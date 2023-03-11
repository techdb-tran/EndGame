import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteProductById, updateProductById, fetchAllDataProduct, fetchCreateProduct } from "../../../apis/productApi";


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
  "products/fetchAllProduct",
  async () => {
    const data = await fetchAllDataProduct();
    return data || [] ;
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
  },
});
export const actCreateProduct = (product) => async (dispatch) => {
  console.log(product, "create product");
  try {
    dispatch(actUpdateLoadingCreate(true)); // Update status loading
    await fetchCreateProduct(product);
    await dispatch(actFetchAllProduct()); // Call Api và lấy all sản phẩm từ new data
  } catch (errors) {
    console.log(errors);
  } finally {
    dispatch(actUpdateLoadingCreate(false)); // Update status loading call api success
  }
};

export const actDeleteProduct = (id) => async (dispatch) => {
  try {
    await deleteProductById(id); 
    dispatch(actFetchAllProduct()); 
  } catch (error) {
    console.log(error);
  }finally {
    dispatch(actUpdateLoadingCreate(false)); 
  }
};
export const actUpdateProduct = (id, product) => async (dispatch) => {
  try {
    await updateProductById(id, product);
    dispatch(actFetchAllProduct());
  }catch (error) {
    console.log(error);
  }finally {
    dispatch(actUpdateLoadingCreate(false)); 
  }
};
export const {actUpdateLoadingCreate} = productsSlice.actions;

export default productsSlice.reducer;
