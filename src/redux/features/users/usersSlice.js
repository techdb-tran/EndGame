import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllUserData,
  deleteUserById,
  fetchInfoMe,
  fetchCreateUser,
  fetchUpdateUserById,
  fetchLoginUser,
  fetchRegisterUser,
  fetchUserBytId
} from "../../../apis/userApi";
import { KEY_ACCESS_TOKEN, KEY_IS_LOGGED } from "../../../constants/config";
import * as Jwt from "jsonwebtoken";

const initialState = {
  allUsers: [],
  isLoading: false,
  isLoadingCreate: false,
  isLoadingDelete: false,
  errors: {},
};
//Create middleware handle call API
export const actFetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const data = await fetchAllUserData();
    return data || [];
  }
);

export const actFetchLogin = createAsyncThunk(
  "users/actFetchLogin",
  async (user) => {
    const userData = await fetchLoginUser(user);
    return userData;
  }
);

export const actFetchRegister = createAsyncThunk(
  "users/actFetchRegister",
  async (user) => {
    const userData = await fetchRegisterUser(user);
    return userData;
  }
);

export const actFetchUserByID = createAsyncThunk('users/actFetchUserByID', async (id) => {
  const user = await fetchUserBytId(id)
  return user
})

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    actUpdateLoadingCreate: (state, action) => {
      state.isLoadingCreate = action.payload;
    },
    actGetMe: (state, action) => {
      state.user = action.payload;
    },
    loginSuccess: (state, action) => {
      localStorage.setItem(KEY_IS_LOGGED, JSON.stringify(true));
      state.isLogged = true;
    },
    actLogout: (state, action) => {
      localStorage.removeItem(KEY_ACCESS_TOKEN);
      localStorage.setItem(KEY_IS_LOGGED, JSON.stringify(false));
      state.isLogged = false;
      state.user = {};
      state.accessToken = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actFetchAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actFetchAllUsers.rejected, (state) => {
      state.errors = {
        message: "Đã xảy ra lỗi khi gọi API",
        code: "",
      };
      state.isLoading = false;
    });
    builder.addCase(actFetchAllUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allUsers = action.payload || [];
    });
    builder.addCase(actFetchLogin.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actFetchLogin.rejected, (state) => {
      state.errors = {
        error: "Error",
      };
      state.isLoading = false;
    });

    builder.addCase(actFetchLogin.fulfilled, (state, action) => {
      const { user, accessToken } = action.payload;

      if (accessToken) {
        state.user = user;
        state.accessToken = accessToken;
        localStorage.setItem(KEY_IS_LOGGED, JSON.parse(true));
        state.isLogged = true;
        localStorage.setItem(KEY_ACCESS_TOKEN, accessToken);
      }
      state.isLoading = false;
    });
    //register
    builder.addCase(actFetchRegister.rejected, (state) => {
      state.error = {
        error: "error",
      };
      state.isLoading = false;
    });
  },
});

export const actReLogin = (accessToken) => async (dispatch) => {
  try {
    const decodeToken = Jwt.decode(accessToken);
    if (decodeToken?.email) {
      const repsInfo = await fetchInfoMe(decodeToken.email);
      const infoUser = repsInfo?.[0];
      delete infoUser?.password;
      dispatch(actGetMe(infoUser));
      dispatch(loginSuccess());
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(actUpdateLoadingCreate(false));
  }
};

export const actRegister = (user) => async (dispatch) => {
  try {
    dispatch(actUpdateLoadingCreate(true));
    await fetchRegisterUser(user);
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(actUpdateLoadingCreate(false));
  }
};

// Create middleware call create user
export const actCreateUser = (user) => async (dispatch) => {
  // Tạo middleware
  console.log(user, "create product");
  try {
    dispatch(actUpdateLoadingCreate(true)); // Update status loading
    await fetchCreateUser(user);
    await dispatch(actFetchAllUsers()); //Call Api và lay all user tu new data
  } catch (errors) {
    //handle error to show screen
    console.log(errors);
  } finally {
    dispatch(actUpdateLoadingCreate(false)); //UPdate status loading call api success
  }
};
export const actDeleteUser = (id) => async (dispatch) => {
  try {
    await deleteUserById(id); //Call Api delete User
    dispatch(actFetchAllUsers()); //Call Api get All product to get new Data
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(actUpdateLoadingCreate(false));
  }
};
export const actUpdateUser = (id, user) => async (dispatch) => {
  try {
    await fetchUpdateUserById(id, user); //Call Api delete User
    dispatch(actFetchAllUsers()); //Call Api get All product to get new Data
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(actUpdateLoadingCreate(false));
  }
};

export const { actUpdateLoadingCreate, actGetMe, loginSuccess, actLogout } =
  usersSlice.actions;

export default usersSlice.reducer;
