import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUserData, deleteUserById, fetchCreateUser } from "../../../apis/userApi";

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


export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    actUpdateLoadingCreate: (state, action)=>{
      state.isLoadingCreate = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actFetchAllUsers.pending, (state) => {
        state.isLoading = true;
      })
    builder.addCase(actFetchAllUsers.rejected, (state) => {
        state.errors = {
          message: "Đã xảy ra lỗi khi gọi API",
          code: "",
        };
        state.isLoading = false;
      })
    builder.addCase(actFetchAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allUsers = action.payload || [];
      })
  },
});
// Create middleware call create user
export const actCreateUser = (user)=> async (dispatch) =>{ // Tạo middleware 
  console.log(user, "create product");
  try{
    dispatch(actUpdateLoadingCreate(true));// Update status loading
    await fetchCreateUser(user);
    await dispatch(actFetchAllUsers()); //Call Api và lay all user tu new data
  }catch (errors){
    //handle error to show screen
    console.log(errors)
  }
  finally{
    dispatch(actUpdateLoadingCreate(false)); //UPdate status loading call api success
  }
};
export const actDeleteUser = (id)=> async (dispatch)=>{
  try{
    await deleteUserById(id);//Call Api delete User
    dispatch(actFetchAllUsers());//Call Api get All product to get new Data
  }catch(error){
    console.log(error);
  }
}
export const {actUpdateLoadingCreate} = usersSlice.actions;

export default usersSlice.reducer;