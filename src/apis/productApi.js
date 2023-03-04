import axios from "axios"
import {BE_URL} from ".././components/constants/config"
export const fetchAllDataProduct = async ()=>{
  const {data} = await axios.get(`${BE_URL}products`);// gọi api và lấy tất cả data
  return data;
}
export const fetchDataProductById = async (id) =>{
  const {data} = await axios.get(`${BE_URL}products/${id}`);// gọi api và lấy tt sp theo id
  return data;
}
export const deleteProductById = async (id) =>{
  return await axios.delete(`${BE_URL}products/${id}`); // gọi api xóa sp theo id
}
export const fetchCreateProduct = async (product) =>{
  return await axios.post(`${BE_URL}products`, product); //truyền data product vào body để server nhận đc
}
//Edit product
export const fetchUpdateProductById = async (id, payload)=>{
  return await axios.put(`${BE_URL}products/${id}`, payload);
}
// Chức năng edit giống với chức năng thêm mới