import axios from 'axios';
import { apiKey } from './apikey'; 

export default axios.create({
  baseUrl: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: {apiKey}
  }
})