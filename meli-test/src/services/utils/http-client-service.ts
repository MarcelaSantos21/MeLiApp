import { constants } from 'http2';
import fetch from 'node-fetch';

class ErrorHttpResponse {
    constructor(public readonly message: string, public readonly statusCode: number) {
    }
}

export default class HttpClientService {
    public static async execute(endPoint: string, method: string,): Promise<any> {
        try {
            const res = await fetch(
                endPoint,
                {
                    headers: {},
                    method,
                    timeout: 10000
                }
            );
            if (res.ok) {
                const jsonBody = await res.json();
                return Promise.resolve(jsonBody);
            } else {
                return Promise.reject(new ErrorHttpResponse(res.status.toString(), res.status));
            }
        } catch (reason) {
            return Promise.reject(new ErrorHttpResponse(reason.message, constants.HTTP_STATUS_INTERNAL_SERVER_ERROR));
        }
    }
}
