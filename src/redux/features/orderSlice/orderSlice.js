import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllDataOrder, updateOrderStatus } from '../../../apis/orderApi';

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

// Create middleware handle call API
export const actFetchAllOrder = createAsyncThunk(
  "orders/fetchLogin",
  async () => {
    const data = await fetchAllDataOrder();
    return data || [] ;
  }
);
export const actUpdateOrderStatus = createAsyncThunk(
  'orders/updateOrderStatus',
  async ({ id, status }) => {
    const data = await updateOrderStatus(id, status);
    return data;
  }
)


const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Xử lý khi thực hiện lấy dữ liệu từ API thành công
     builder.addCase(actFetchAllOrder.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(actFetchAllOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      // Xử lý khi thực hiện lấy dữ liệu từ API thất bại
      builder.addCase(actFetchAllOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      // Xử lý khi thực hiện cập nhật trạng thái đơn hàng từ API thành công
      builder.addCase(actUpdateOrderStatus.fulfilled, (state, action) => {
      const { id, status } = action.payload;
      const index = state.orders.findIndex((order) => order.id === id);
      if (index !== -1) {
        state.orders[index].status = status;
      }
      });
     // Xử lý khi thực hiện cập nhật trạng thái đơn hàng từ API thất bại
      builder.addCase(actUpdateOrderStatus.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default orderSlice.reducer;