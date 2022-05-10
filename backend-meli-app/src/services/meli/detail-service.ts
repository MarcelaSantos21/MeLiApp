import { Request, Response } from 'express';
import { constants } from 'http2';
import config from '../../config';
import HttpClientService from '../utils/http-client-service';
import { Item } from '../../model/item';
import { Categories } from './../../interfaces/categories-response';

export default class DetailService {
    public static async execute(req: Request, res: Response) {

        try {
            // https://api.mercadolibre.com/sites/MLA/search?q=vaso
            // INCOME PARAM
            const id = req.params.id;
            // BUILD ENDPOINT
            const itemEndPoint = `${config.meli.domain}${config.meli.paths.items}/${id}`;
            const itemDescriptionEndPoint = `${config.meli.domain}${config.meli.paths.items}/${id}/description`;

            // CALL SERVICE CLIENT
            const response = await Promise.all([
                HttpClientService.execute(itemEndPoint, 'get'),
                HttpClientService.execute(itemDescriptionEndPoint, 'get')
            ]);

            const categoriesEndPoint = `${config.meli.domain}${config.meli.paths.categories}/${response[0].category_id}`;
            const responseCategory: Categories = await HttpClientService.execute(categoriesEndPoint, 'get');
            
            // RESPONSE CLIENT SERVICE
            res.status(constants.HTTP_STATUS_OK).send(
                Item.from(response[0], response[1], responseCategory)
            );
        } catch (error) {
            // RESPONSE ERROR CLIENT SERVICE
            res.status(error.statusCode).send(error);
        }
    }
}
