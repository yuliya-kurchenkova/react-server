import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-c431b-default-rtdb.europe-west1.firebasedatabase.app'
})