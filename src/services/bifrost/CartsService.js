//@Flow
import BifrostService from './BifrostService';


class CartsService extends BifrostService {
  async getCarts (sellerId) {
    const query = `query{Carts(sellerId:"${sellerId}"){createdAt}}`;
    try{
      const response = await this.makeRequest(query);
      console.log('>>>>', response)
      const { Carts: carts } = response.data.data
      return carts;
    } catch (err) {
      console.log(err);
    }
  }
}

export default CartsService;