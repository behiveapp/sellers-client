//@Flow
import BifrostService from './BifrostService';

class ProductsService extends BifrostService {
  getProducts () {
    return [
      {sellerIdentifier: '01001001000113', name: 'Product 1', code: 'PROD01', price: 27.49, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien. '},
      {sellerIdentifier: '01001001000113', name: 'Product 2', code: 'PROD02', price: 7.89, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien. Praesent odio est, laoreet id placerat consequat.'},
      {sellerIdentifier: '01001001000113', name: 'Product 3', code: 'PROD03', price: 18.54, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien. Praesent odio est.'},
      {sellerIdentifier: '01001001000113', name: 'Product 4', code: 'PROD04', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien.'},
      {sellerIdentifier: '01001001000113', name: 'Product 4', code: 'PROD04', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien.'},
      {sellerIdentifier: '01001001000113', name: 'Product 4', code: 'PROD04', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien.'},
      {sellerIdentifier: '01001001000113', name: 'Product 4', code: 'PROD04', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien.'},
      {sellerIdentifier: '01001001000113', name: 'Product 4', code: 'PROD04', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien.'},
      {sellerIdentifier: '01001001000113', name: 'Product 4', code: 'PROD04', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien.'},
      {sellerIdentifier: '01001001000113', name: 'Product 4', code: 'PROD04', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien.'},
      {sellerIdentifier: '01001001000113', name: 'Product 4', code: 'PROD04', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien.'},
      {sellerIdentifier: '01001001000113', name: 'Product 4', code: 'PROD04', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien.'},
      {sellerIdentifier: '01001001000113', name: 'Product 4', code: 'PROD04', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet tempor sapien.'},
    ]
  }
}

export default ProductsService;