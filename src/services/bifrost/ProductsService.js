//@Flow
import BifrostService from './BifrostService';


class ProductsService extends BifrostService {
  async getProducts () {
    const query = `query{Products(sellerIdentifier:"28192281949"){name, code, price, description, sellerIdentifier}}`;
    try{
      const response = await this.makeRequest(query);
      console.log('>>>>', response)
      const { Products: products } = response.data.data
      return products;
    } catch (err) {
      console.log(err);
    }
  }
}

export default ProductsService;