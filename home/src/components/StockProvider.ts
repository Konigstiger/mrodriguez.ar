
import { AxiosRequestConfig } from 'axios';
import HttpClient  from './http-client-interceptor';
import IStock from './types';

const endpoint: string = 'https://localhost:44369/api/weather';
const bearerCode: string = 'random-bearer-token';

class StockProvider extends HttpClient {
  public constructor() {
    super(endpoint);

    // enable to pass bearer tokens
    //this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };
  
  private _handleRequest = (config: AxiosRequestConfig) => {
    config.headers['Authorization'] = bearerCode;
    return config;
  };

  public getUsers = () => this.instance.get<IStock>('/stock');
  
  public getStock() {
    // create a promise for the axios request
    const promise = this.instance.get<IStock>('/stock');

    // using .then, create a new promise which extracts the data
    //const dataPromise = promise.then((response) => response.data)

    // return it
    return promise
}


  //public getUser = (id: string) => this.instance.get<IStock>(`/users/${id}`);
}

export default StockProvider