import axios from 'axios';

class Posts {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api';
    }

    async getAll() {
        const response = await axios.get('/posts');

        return response.data
    }

    add(data) {
        return axios.post('/posts', data);
        
    }

    getOne(id) {
        return axios.get(`/posts/${id}?filter={"include":["comments"]}`);
    }

    edit(post)  {
        return axios.put(`/posts/${post.id}`, post);
    }

    delete(id)  {
        return axios.delete(`/posts/${id}`);
    }

    addComment(comment, postId) {
        console.log(comment)
        return axios.post(`posts/${postId}/comments`, comment)
    }
}

export const posts = new Posts();