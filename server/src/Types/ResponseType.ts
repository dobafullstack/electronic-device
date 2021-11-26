import Error from './Error'

type ApiResponse = {
    code: number;
    result: any;
    error: Error | null;
}

export default ApiResponse;