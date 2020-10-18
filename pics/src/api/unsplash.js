// All code regarding configuaration

import axios from 'axios';

const searchImages = (term)=> {

}

export default axios.create({

    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID hZNxX1BSxDzpmkUkFSG-tNgQoaHQO-IIvqeKDZEsM-o'
    }
})