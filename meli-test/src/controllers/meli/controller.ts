import { Router } from 'express';
import SearchService from '../../services/meli/search-service';
import DetailService from '../../services/meli/detail-service';

// CREATE INSTANCE OF ROUTER EXPRESS
const controller = Router();
controller.get(
    '/items',
    // CALL SERVICE SEARCH
    SearchService.execute
);
controller.get(
    '/items/:id',
    // CALL SERVICE DETAIL
    DetailService.execute
);

export default controller;
