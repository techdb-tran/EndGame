import axios from "axios"
import { BE_URL } from ".././components/constants/config"
export const fetchAllUserData = async () => {
    const { data } = await axios.get(`${BE_URL}users`);// gọi api và lấy tất cả data user
    return data;
}
export const fetchUserDataById = async (id) => {
    const { data } = await axios.get(`${ BE_URL }users/${id}`);// gọi api và lấy tt user theo id
    return data;
}
export const deleteUserById = async (id) => {
    return await axios.delete(`${ BE_URL }users/${id}`); // gọi api xóa user theo id
}
export const fetchCreateUser = async (user) => {
    return await axios.post(`${ BE_URL }users`, user); //truyền data user vào body để server nhận đc
}
//Edit user
export const fetchUpdateUserById = async (id) => {
}