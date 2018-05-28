//@Flow
import BifrostService from './BifrostService';


class CartsService extends BifrostService {
  async getCarts (sellerId, status = 0) {
    const query = `query{
      Carts(sellerId:"${sellerId}", status:${status}){
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

  async getCartsFromBuyer (buyerId, status = 0) {
    const query = `query{
      Carts(buyerId:"${buyerId}", status:${status}){
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

  async openCart (buyer, seller) {
    const newBuyer = {
      Id: buyer.id,
      identifier: buyer.identifier,
      name: buyer.name
    };

    const query = `
      mutation OpenCartMutation($buyer: BuyerInput!, $seller: SellerInput!) {
        openCart(buyerData: $buyer, sellerData: $seller) {
          cart {
            id
            Buyer {
              name,
              identifier
            }
            Products {
              name
            }
          }
        }
      }
    `;

    try{
      const response = await this.makeRequest(query, {buyer: newBuyer, seller});
      const { cart } = response.data.data.openCart;
      return cart;
    } catch (err) {
      console.log(err);
    }
  }

  async addProduct (cart_id, product_id) {
    const query = `
      mutation AddProductMutation($cart_id: String!, $product_id: String!) {
        addProduct(cartId: $cart_id, productId: $product_id) {
          cart {
            id
            Buyer {
              name,
              identifier
            }
            Products {
              name
            }
          }
        }
      }
    `;

    try{
      const response = await this.makeRequest(query, {cart_id, product_id});
      const { cart } = response.data.data.addProduct;
      return cart;
    } catch (err) {
      console.log(err);
    }
  }

  async closeCart (cart_id) {
    const query = `
      mutation CloseCartMutation($cart_id: String!) {
        closeCart(cartId: $cart_id) {
          cart {
            id
            Buyer {
              name,
              identifier
            }
            Products {
              name
            }
          }
        }
      }
    `;

    try{
      const response = await this.makeRequest(query, { cart_id });
      const { cart } = response.data.data.closeCart;
      return cart;
    } catch (err) {
      console.log(err);
    }
  }
}

export default CartsService;