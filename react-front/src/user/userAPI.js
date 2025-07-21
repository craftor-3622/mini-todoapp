import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'

const Login = () => {
  axios({
    method: 'post',
    url: `${BASE_URL}/login`,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    })
}