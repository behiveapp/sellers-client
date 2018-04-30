class StorageService {
  constructor() {
    this.storage = window.localStorage
  }
  getData(key) {
    const data = this.storage.getItem(key) || false;
    return JSON.parse(data);
  }
  setData(key, value) {
    const data = value || false;
    this.storage.setItem(key, JSON.stringify(data));
  }
  removeData(key) {
    this.storage.removeItem(key);
  }
}

export default new StorageService();