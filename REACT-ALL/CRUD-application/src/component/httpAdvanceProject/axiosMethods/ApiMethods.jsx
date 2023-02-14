import axios from "axios";

const url='http://127.0.0.1:3003/user';

export const getUser=()=>{
    return axios.get(url);
}

// export const getUserId=(id)=>{
//     return axios.get(`${url}/${id}`)
// }

export const postUser=(user)=>{
    return axios.post(url,user);
}

export const deleteUser=(id)=>{
    return axios.delete(`${url}/${id}`);
}

export const updateUser=(id,user)=>{
    return axios.put(`${url}/${id}`,user)
}
