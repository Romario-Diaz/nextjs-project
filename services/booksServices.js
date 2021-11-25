import axios from "axios";
import API from '../util/const'

class BooksService {

    sendBooks({data}, file) {

    }

    getInitialBooks() {
        return axios.get(`${API.URI}/books/getInicializationData`)
    }

    getAllAudioBooks() {
        return axios.get(`${API.URI}/books/getAudioBooks`)
    }

    getAllEbooks() {
        return axios.get(`${API.URI}/books/getEbooks`)
    }
}

export default BooksService