// @Flow
import axios from 'axios';
import { BIFROST_URL } from 'react-native-dotenv';

export default class BifrostService {
  constructor () {
    this.url = BIFROST_URL;
  }

  makeRequest(query: string, variables: object) {
    return axios.post(this.url, { query, variables });
  }
}