import axios from "axios";
import { BASE_URL, USER_AGENT } from '../constants/strings';
import qs from 'querystring';
import { ApiResponse } from '../models/api_response';

export function ApiClient() {
    const client = axios.create({
        baseURL: BASE_URL,
        timeout: 3000,
        headers: { 'User-Agent': USER_AGENT },
    });

    async function getRaw(params: qs.ParsedUrlQuery) {
        params = {
            'api_version': '4',
            '_format': 'json',
            '_marker': '0',
            'ctx': 'web6dot0',
            ...params
        };
        const res = await client.get('/api.php', { params });

        return res.data;
    }

    async function getJson<T>(params: qs.ParsedUrlQuery) {
        params = {
            'api_version': '4',
            '_format': 'json',
            '_marker': '0',
            'ctx': 'web6dot0',
            ...params
        };
        const res = await client.get('/api.php', { params });        

        return { status: res.status, data: res.data } as ApiResponse<T>;
    }

    async function getListJson<T>(params: qs.ParsedUrlQuery) {
        params = {
            'api_version': '4',
            '_format': 'json',
            '_marker': '0',
            'ctx': 'web6dot0',
            ...params
        };
        const res = await client.get('/api.php', { params });

        return res.data as ApiResponse<T[]>;
    }

    return {
        getRaw,
        getJson,
        getListJson,
    };
}