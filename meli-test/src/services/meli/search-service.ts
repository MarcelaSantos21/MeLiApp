import { Request, Response } from 'express';
import { constants } from 'http2';
import config from '../../config';
import HttpClientService from '../utils/http-client-service';
import { ItemCollection } from '../../interfaces/item-collection';
import { Search } from '../../model/search';

export default class SearchService {

    public static async execute(req: Request, res: Response) {
        try {
            // https://api.mercadolibre.com/sites/MLA/search?q=vaso
            // INCOME PARAM
            const query = req.query.q;
            // BUILD ENDPOINT
            const endPoint = `${config.meli.domain}${config.meli.paths.search}?q=${query}&limit=4`;
            
            // CALL SERVICE CLIENT
            const payloadResponse: ItemCollection = await HttpClientService.execute(endPoint, 'get');
            
            // RESPONSE CLIENT SERVICE
            res.status(constants.HTTP_STATUS_OK).send(Search.from(payloadResponse));
        } catch (error) {
            // RESPONSE ERROR CLIENT SERVICE
            res.status(error.statusCode? error.statusCode : constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).send(error);
        }
    }
}
