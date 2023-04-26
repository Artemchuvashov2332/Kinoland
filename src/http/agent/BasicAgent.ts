import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class BasicAgent {
  protected $http: AxiosInstance;
  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this.$http = axios.create({
      baseURL,
      ...config,
    });
  }
}
