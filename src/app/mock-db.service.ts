import {InMemoryDbService} from 'angular-in-memory-web-api';


export class InMemLoaderService implements InMemoryDbService {
  createDb() {
    let loader = [
      { id: 1, name: 'Loader' }
    ];
    return {loader};
  }
}
