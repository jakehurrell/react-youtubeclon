import axios from 'axios';

const KEY = 'AIzaSyDLsh-vHZQRGIRbAQe7XlWasQUJJBQW3s0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});