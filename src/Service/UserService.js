import axios from "axios";

const createNewUserSevice = (data) => {
    console.log('check data fr sevice: ', data)
    return axios.post('https://tuanhung.site/api/v1/user/create', data)
}

export {
    createNewUserSevice,
}