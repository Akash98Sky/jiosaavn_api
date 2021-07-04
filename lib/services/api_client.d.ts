import qs from 'querystring';
import { ApiResponse } from '../models/api_response';
export declare function ApiClient(): {
    getRaw: (params: qs.ParsedUrlQuery) => Promise<any>;
    getJson: <T>(params: qs.ParsedUrlQuery) => Promise<ApiResponse<T>>;
    getListJson: <T_1>(params: qs.ParsedUrlQuery) => Promise<ApiResponse<T_1[]>>;
};
