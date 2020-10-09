import axios from 'axios';

class Posts {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api';
    }

    async getAll() {
        const response = await axios.get('/posts');

        return response.data
    }

    getOne(id) {
        return axios.get(`/posts/${id}`);
    }


}

export const posts = new Posts();