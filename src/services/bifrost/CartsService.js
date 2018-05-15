//@Flow
import BifrostService from './BifrostService';


class CartsService extends BifrostService {
  async getCarts (sellerId) {
    const query = `query{
      Carts(sellerId:"${sellerId}"){
        id, totalPrice
        Buyer {
          id, name, identifier
        },
        Products {
          id, code, name, price
        }
      }
    }`;
    try{
      const response = await this.makeRequest(query);
      const { Carts: carts } = response.data.data
      return carts;
    } catch (err) {
      console.log(err);
    }
  }
}

export default CartsService;