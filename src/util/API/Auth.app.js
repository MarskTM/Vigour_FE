import axiosClient from "./AxiosClient";

const AuthApi = {
    login: async (data) => {
        const url = "/auth/login";
        return await axiosClient.post(url, data);
    },

    getUserById: async (id) => {
        const url = `/user/${id}`;
        return await axiosClient.get(url);
    },

    loginJWT: async (data) => {
        const url = `/user/login/jwt?refToken=${data}`;
        return await axiosClient.post(url);
    }
}

export default AuthApi;