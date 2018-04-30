// @Flow
import axios from 'axios';

export default class BifrostService {
  constructor () {
    const { BIFROST_URL } = process.env;
    this.url = BIFROST_URL;
  }

  makeRequest(query: string) {
    return axios.post(this.url, { query });
  }
}