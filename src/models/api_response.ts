export interface ApiResponse<T = { [key: string]: any; }> {
    status: number;
    data: T;
}