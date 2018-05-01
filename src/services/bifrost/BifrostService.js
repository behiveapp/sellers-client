// @Flow
import axios from 'axios';
import Config from 'react-native-config';

export default class BifrostService {
  constructor () {
    console.log(Config);
    const { BIFROST_URL } = Config;
    this.url = BIFROST_URL;
  }

  makeRequest(query: string) {
    return axios.post(this.url, { query });
  }
}