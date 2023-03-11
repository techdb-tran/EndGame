import axios from "axios"
import {BE_URL} from "../constants/config"
export const fetchAllDataOrder = async ()=>{
  const {data} = await axios.get(`${BE_URL}orders`);// gọi api và lấy tất cả data
  return data;
}
export const updateOrderStatus = async (id, status) => {
  try {
    const response = await axios.patch(`${BE_URL}orders/${id}`, {status});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};