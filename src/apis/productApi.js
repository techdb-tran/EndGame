import axios from "axios"
import {BE_URL} from "../constants/config"

export const fetchAllDataProduct = async () => {
  const {data} = await axios.get(`${BE_URL}products`);
  return data;
};

export const fetchDataProductById = async (id) =>{
  const {data} = await axios.get(`${BE_URL}products/${id}`);// gọi api và lấy tt sp theo id
  return data;
}

export const fetchSearchProduct = async (searchTerm) => {
  const response = await axios.get(`${BE_URL}products?q={searchTerm}`)
  return response.data
}

export const deleteProductById = async (id) =>{
  return await axios.delete(`${BE_URL}products/${id}`); // gọi api xóa sp theo id
}
export const fetchCreateProduct = async (product) =>{
  return await axios.post(`${BE_URL}products`, product); //truyền data product vào body để server nhận đc
}
//Edit product
export const updateProductById = async (id, product)=>{
  const {data} = await axios.patch(`${BE_URL}products/${id}`, product);
  return  data;
}
export const searchProduct = async (query)=>{
  const {data} = await axios.get(`${BE_URL}products?q=${query}`);
  return data;
}
export const searchProductType = async ()=>{
  const {data} = await axios.get(`${BE_URL}products?productType=Accessory`);
  return data;
}