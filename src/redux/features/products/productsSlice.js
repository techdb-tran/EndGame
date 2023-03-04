import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteProductById, fetchUpdateProductById, fetchAllDataProduct, fetchCreateProduct } from "../../../apis/productApi";


const initialState = {
  allProducts: [],
  product: {},
  isLoading: false,
  isLoadingCreate: false,
  isLoadingDelete: false,
  errors:{},
};

// Create middleware handle call API
export const actFetchAllProduct = createAsyncThunk(
  "users/fetchLogin",
  async () => {
    const data = await fetchAllDataProduct();
    return data || [] ;
  }
);

// Create middleware handle update product by id
export const actUpdateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, payload }) => {
    await fetchUpdateProductById(id, payload);
    const data = await fetchAllDataProduct();
    return data || [];
  }
);

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    actUpdateLoadingCreate: (state, action)=>{
      state.isLoadingCreate = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actFetchAllProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actFetchAllProduct.rejected, (state) => {
      state.errors = {
        errors: "Đã xảy ra lỗi khi gọi API",
        code: "",
      };
      state.isLoading = false;
    });
    builder.addCase(actFetchAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload || [];
    });

    builder.addCase(actUpdateProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actUpdateProduct.rejected, (state) => {
      state.errors = {
        errors: "Đã xảy ra lỗi khi gọi API",
        code: "",
      };
      state.isLoading = false;
    });
    builder.addCase(actUpdateProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload || [];
    });
  },
});

// Create middleware handle create product
export const actCreateProduct = (product) => async (dispatch) => {
  console.log(product, "create product");
  try {
    dispatch(actUpdateLoadingCreate(true)); // Update status loading
    await fetchCreateProduct(product);
    await dispatch(actFetchAllProduct()); // Call Api và lấy all sản phẩm từ new data
  } catch (errors) {
    // Handle error to show screen
    console.log(errors);
  } finally {
    dispatch(actUpdateLoadingCreate(false)); // Update status loading call api success
  }
};

// Create middleware handle delete product by id
export const actDeleteProduct = (id) => async (dispatch) => {
  try {
    await deleteProductById(id); // Call Api delete Product
    dispatch(actFetchAllProduct()); // Call Api get All product to get new Data
  } catch (error) {
    console.log(error);
  }
};

export const {actUpdateLoadingCreate} = productsSlice.actions;

export default productsSlice.reducer;
