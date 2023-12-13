import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { API_BASE_URL } from '@/shared/config/envs';

class ApiService {
  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
  });

  static initialize() {
    this.axiosInstance.interceptors.request.use(this.handleRequest, this.handleError);
    this.axiosInstance.interceptors.response.use(this.handleResponse, this.handleError);
  }

  private static handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    //handle request here

    // config.headers['Authorization'] = 'Bearer your-token';

    return config;
  }

  private static handleResponse(response: AxiosResponse): AxiosResponse {
    // Success response here
    return response;
  }

  private static handleError(error: AxiosError): Promise<AxiosError> {
    // handle http errors here
    return Promise.reject(error);
  }

  public static async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  public static async post<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }
}

ApiService.initialize();

export default ApiService;
