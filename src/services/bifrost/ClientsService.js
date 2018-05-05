//@Flow
import BifrostService from './BifrostService';


class ClientsService extends BifrostService {
  async getClients () {
    const query = `query{Buyers{id, name, identifier}}`;

    try {
      const response = await this.makeRequest(query);
      const { Buyers: clients } = response.data.data
      return clients;
    } catch (err) {
      console.log(err);
    }
  }
}

export default ClientsService;