import { AxiosRequestConfig as AxiosRequestConfigType } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig extends AxiosRequestConfigType {
    retried?: boolean;
  }
}
