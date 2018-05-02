//@Flow
import BifrostService from './BifrostService';


class ProductsService extends BifrostService {
  async getProducts () {
    const query = `query{Products(name:"novo"){name, code, price, description, sellerIdentifier}}`;
    const response = await this.makeRequest(query);
    const { Products: products } = response.data.data
    console.log(products);

    return products;
  }
}

export default ProductsService;