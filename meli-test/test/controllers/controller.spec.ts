import chai from 'chai';
import chaiHttp from 'chai-http';
import nock from 'nock';
import app from '../../src/app';

chai.use(chaiHttp);
const expect = chai.expect;

describe('EventName: /api/items', () => {
    beforeEach(() => {
        nock.cleanAll();
    });

    const searchResponse = {
        'site_id': 'MLA',
        'country_default_time_zone': 'GMT-03:00',
        'query': 'vasos',
        'paging': {},
        'results': [{
            'id': 'MLA935538728',
            'site_id': 'MLA',
            'title': '24 Vaso Wiskie Tennessee Ideal Velas Cera Soja Por Mayor',
            'seller': {},
            'price': 4060.8,
            'prices': {},
            'sale_price': null,
            'currency_id': 'ARS',
            'available_quantity': 1,
            'sold_quantity': 50,
            'buying_mode': 'buy_it_now',
            'listing_type_id': 'gold_special',
            'stop_time': '2041-08-18T04:00:00.000Z',
            'condition': 'new',
            'permalink': 'https://articulo.mercadolibre.com.ar/MLA-935538728-24-vaso-wiskie-tennessee-ideal-velas-cera-soja-por-mayor-_JM',
            'thumbnail': 'http://http2.mlstatic.com/D_788636-MLA47206092020_082021-O.jpg',
            'thumbnail_id': '788636-MLA47206092020_082021',
            'accepts_mercadopago': true,
            'installments': {},
            'address': {},
            'shipping': {},
            'seller_address': {},
            'attributes': [],
            'original_price': 4320,
            'category_id': 'MLA4621',
            'official_store_id': null,
            'domain_id': 'MLA-DRINKING_GLASSES',
            'catalog_product_id': null,
            'tags': [],
            'order_backend': 1,
            'use_thumbnail_id': false,
            'offer_score': null,
            'offer_share': null,
            'match_score': null,
            'winner_item_id': null,
            'melicoin': null,
            'discounts': null
        }],
        'sort': {},
        'available_sorts': [],
        'filters': [
            {
                'id': 'category',
                'name': 'Categories',
                'type': 'text',
                'values': [
                    {
                        'id': 'MLA4621',
                        'name': 'Vasos',
                        'path_from_root': [
                            {
                                'id': 'MLA1574',
                                'name': 'Hogar, Muebles y Jardín'
                            },
                            {
                                'id': 'MLA1592',
                                'name': 'Bazar y Cocina'
                            },
                            {
                                'id': 'MLA436289',
                                'name': 'Vajilla y Artículos de Servir'
                            },
                            {
                                'id': 'MLA1593',
                                'name': 'Vajilla'
                            },
                            {
                                'id': 'MLA4621',
                                'name': 'Vasos'
                            }
                        ]
                    }
                ]
            }
        ],
        'available_filters': []
    };

    const itemResponse = {
        'id': 'MLA865411635',
        'site_id': 'MLA',
        'title': 'Vaso Copon Copa Sin Tallo Rigolleau Gourmet 450ml X 12',
        'subtitle': null,
        'seller_id': 371080845,
        'category_id': 'MLA4621',
        'official_store_id': null,
        'price': 2423,
        'base_price': 2423,
        'original_price': null,
        'currency_id': 'ARS',
        'initial_quantity': 11453,
        'available_quantity': 250,
        'sold_quantity': 5000,
        'sale_terms': [
            {
                'id': 'WARRANTY_TIME',
                'name': 'Tiempo de garantía',
                'value_id': null,
                'value_name': '15 días',
                'value_struct': {
                    'number': 15,
                    'unit': 'días'
                },
                'values': [
                    {
                        'id': null,
                        'name': '15 días',
                        'struct': {
                            'number': 15,
                            'unit': 'días'
                        }
                    }
                ]
            },
            {
                'id': 'WARRANTY_TYPE',
                'name': 'Tipo de garantía',
                'value_id': '2230280',
                'value_name': 'Garantía del vendedor',
                'value_struct': null,
                'values': [
                    {
                        'id': '2230280',
                        'name': 'Garantía del vendedor',
                        'struct': null
                    }
                ]
            }
        ],
        'buying_mode': 'buy_it_now',
        'listing_type_id': 'gold_special',
        'start_time': '2020-07-01T00:50:32.000Z',
        'stop_time': '2040-06-25T04:00:00.000Z',
        'condition': 'new',
        'permalink': 'https://articulo.mercadolibre.com.ar/MLA-865411635-vaso-copon-copa-sin-tallo-rigolleau-gourmet-450ml-x-12-_JM',
        'thumbnail_id': '822373-MLA45839536533_052021',
        'thumbnail': 'http://http2.mlstatic.com/D_822373-MLA45839536533_052021-I.jpg',
        'secure_thumbnail': 'https://http2.mlstatic.com/D_822373-MLA45839536533_052021-I.jpg',
        'pictures': [
            {
                'id': '822373-MLA45839536533_052021',
                'url': 'http://http2.mlstatic.com/D_822373-MLA45839536533_052021-O.jpg',
                'secure_url': 'https://http2.mlstatic.com/D_822373-MLA45839536533_052021-O.jpg',
                'size': '399x500',
                'max_size': '524x656',
                'quality': ''
            },
            {
                'id': '849971-MLA48184510963_112021',
                'url': 'http://http2.mlstatic.com/D_849971-MLA48184510963_112021-O.jpg',
                'secure_url': 'https://http2.mlstatic.com/D_849971-MLA48184510963_112021-O.jpg',
                'size': '500x500',
                'max_size': '1080x1080',
                'quality': ''
            },
            {
                'id': '735963-MLA47570758068_092021',
                'url': 'http://http2.mlstatic.com/D_735963-MLA47570758068_092021-O.jpg',
                'secure_url': 'https://http2.mlstatic.com/D_735963-MLA47570758068_092021-O.jpg',
                'size': '333x500',
                'max_size': '640x960',
                'quality': ''
            },
            {
                'id': '789432-MLA47570749092_092021',
                'url': 'http://http2.mlstatic.com/D_789432-MLA47570749092_092021-O.jpg',
                'secure_url': 'https://http2.mlstatic.com/D_789432-MLA47570749092_092021-O.jpg',
                'size': '334x500',
                'max_size': '643x960',
                'quality': ''
            },
            {
                'id': '770192-MLA47570712792_092021',
                'url': 'http://http2.mlstatic.com/D_770192-MLA47570712792_092021-O.jpg',
                'secure_url': 'https://http2.mlstatic.com/D_770192-MLA47570712792_092021-O.jpg',
                'size': '334x500',
                'max_size': '643x960',
                'quality': ''
            },
            {
                'id': '953962-MLA48183178707_112021',
                'url': 'http://http2.mlstatic.com/D_953962-MLA48183178707_112021-O.jpg',
                'secure_url': 'https://http2.mlstatic.com/D_953962-MLA48183178707_112021-O.jpg',
                'size': '500x500',
                'max_size': '1080x1080',
                'quality': ''
            },
            {
                'id': '835753-MLA48183148901_112021',
                'url': 'http://http2.mlstatic.com/D_835753-MLA48183148901_112021-O.jpg',
                'secure_url': 'https://http2.mlstatic.com/D_835753-MLA48183148901_112021-O.jpg',
                'size': '500x500',
                'max_size': '1080x1080',
                'quality': ''
            },
            {
                'id': '811071-MLA47570744150_092021',
                'url': 'http://http2.mlstatic.com/D_811071-MLA47570744150_092021-O.jpg',
                'secure_url': 'https://http2.mlstatic.com/D_811071-MLA47570744150_092021-O.jpg',
                'size': '334x500',
                'max_size': '643x960',
                'quality': ''
            },
            {
                'id': '671524-MLA47570742108_092021',
                'url': 'http://http2.mlstatic.com/D_671524-MLA47570742108_092021-O.jpg',
                'secure_url': 'https://http2.mlstatic.com/D_671524-MLA47570742108_092021-O.jpg',
                'size': '333x500',
                'max_size': '640x960',
                'quality': ''
            },
            {
                'id': '931616-MLA47570753118_092021',
                'url': 'http://http2.mlstatic.com/D_931616-MLA47570753118_092021-O.jpg',
                'secure_url': 'https://http2.mlstatic.com/D_931616-MLA47570753118_092021-O.jpg',
                'size': '334x500',
                'max_size': '643x960',
                'quality': ''
            }
        ],
        'video_id': 'XMm-X0CT1bc',
        'descriptions': [],
        'accepts_mercadopago': true,
        'non_mercado_pago_payment_methods': [],
        'shipping': {
            'mode': 'me2',
            'methods': [],
            'tags': [
                'self_service_in'
            ],
            'dimensions': null,
            'local_pick_up': false,
            'free_shipping': false,
            'logistic_type': 'fulfillment',
            'store_pick_up': false
        },
        'international_delivery_mode': 'none',
        'seller_address': {
            'city': {
                'name': 'Villa Crespo'
            },
            'state': {
                'id': 'AR-C',
                'name': 'Capital Federal'
            },
            'country': {
                'id': 'AR',
                'name': 'Argentina'
            },
            'search_location': {
                'neighborhood': {
                    'id': 'TUxBQlZJTDQyMjBa',
                    'name': 'Villa Crespo'
                },
                'city': {
                    'id': 'TUxBQ0NBUGZlZG1sYQ',
                    'name': 'Capital Federal'
                },
                'state': {
                    'id': 'TUxBUENBUGw3M2E1',
                    'name': 'Capital Federal'
                }
            },
            'id': 1130901083
        },
        'seller_contact': null,
        'location': {},
        'coverage_areas': [],
        'attributes': [
            {
                'id': 'BRAND',
                'name': 'Marca',
                'value_id': '3656926',
                'value_name': 'Rigolleau',
                'value_struct': null,
                'values': [
                    {
                        'id': '3656926',
                        'name': 'Rigolleau',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'DRINKING_GLASS_PRODUCT_TYPE',
                'name': 'Tipo de producto',
                'value_id': '6530859',
                'value_name': 'Vaso',
                'value_struct': null,
                'values': [
                    {
                        'id': '6530859',
                        'name': 'Vaso',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'HEIGHT',
                'name': 'Altura',
                'value_id': null,
                'value_name': '12.5 cm',
                'value_struct': {
                    'number': 12.5,
                    'unit': 'cm'
                },
                'values': [
                    {
                        'id': null,
                        'name': '12.5 cm',
                        'struct': {
                            'number': 12.5,
                            'unit': 'cm'
                        }
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'IS_PERSONALIZED_PRODUCT',
                'name': 'Es producto personalizado',
                'value_id': '242084',
                'value_name': 'No',
                'value_struct': null,
                'values': [
                    {
                        'id': '242084',
                        'name': 'No',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'ITEM_CONDITION',
                'name': 'Condición del ítem',
                'value_id': '2230284',
                'value_name': 'Nuevo',
                'value_struct': null,
                'values': [
                    {
                        'id': '2230284',
                        'name': 'Nuevo',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'MATERIAL',
                'name': 'Material',
                'value_id': '2431731',
                'value_name': 'Vidrio',
                'value_struct': null,
                'values': [
                    {
                        'id': '2431731',
                        'name': 'Vidrio',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'MODEL',
                'name': 'Modelo',
                'value_id': null,
                'value_name': 'Gourmet',
                'value_struct': null,
                'values': [
                    {
                        'id': null,
                        'name': 'Gourmet',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'MOUTH_DIAMETER',
                'name': 'Diámetro de la boca',
                'value_id': null,
                'value_name': '6.5 cm',
                'value_struct': {
                    'number': 6.5,
                    'unit': 'cm'
                },
                'values': [
                    {
                        'id': null,
                        'name': '6.5 cm',
                        'struct': {
                            'number': 6.5,
                            'unit': 'cm'
                        }
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'PACKS_NUMBER',
                'name': 'Cantidad de packs',
                'value_id': null,
                'value_name': '1',
                'value_struct': null,
                'values': [
                    {
                        'id': null,
                        'name': '1',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'PRODUCT_FEATURES',
                'name': 'Características del producto',
                'value_id': '7435883',
                'value_name': 'Frágil',
                'value_struct': null,
                'values': [
                    {
                        'id': '7435883',
                        'name': 'Frágil',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'RECOMMENDED_DRINKS',
                'name': 'Bebidas recomendadas',
                'value_id': null,
                'value_name': 'Jugos y gaseosas,Vino,Agua',
                'value_struct': null,
                'values': [
                    {
                        'id': '6530871',
                        'name': 'Jugos y gaseosas',
                        'struct': null
                    },
                    {
                        'id': '2431728',
                        'name': 'Vino',
                        'struct': null
                    },
                    {
                        'id': '2431729',
                        'name': 'Agua',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'SALE_FORMAT',
                'name': 'Formato de venta',
                'value_id': '1359392',
                'value_name': 'Pack',
                'value_struct': null,
                'values': [
                    {
                        'id': '1359392',
                        'name': 'Pack',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'SHIPMENT_PACKING',
                'name': 'Embalaje del envío',
                'value_id': '7435892',
                'value_name': 'Caja',
                'value_struct': null,
                'values': [
                    {
                        'id': '7435892',
                        'name': 'Caja',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'UNITS_PER_PACK',
                'name': 'Unidades por pack',
                'value_id': null,
                'value_name': '12',
                'value_struct': null,
                'values': [
                    {
                        'id': null,
                        'name': '12',
                        'struct': null
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            },
            {
                'id': 'VOLUME_CAPACITY',
                'name': 'Capacidad en volumen',
                'value_id': null,
                'value_name': '450 mL',
                'value_struct': {
                    'number': 450,
                    'unit': 'mL'
                },
                'values': [
                    {
                        'id': null,
                        'name': '450 mL',
                        'struct': {
                            'number': 450,
                            'unit': 'mL'
                        }
                    }
                ],
                'attribute_group_id': 'OTHERS',
                'attribute_group_name': 'Otros'
            }
        ],
        'warnings': [],
        'listing_source': '',
        'variations': [
            {
                'id': 59061102425,
                'price': 2423,
                'attribute_combinations': [
                    {
                        'id': 'COLOR',
                        'name': 'Color',
                        'value_id': '57070',
                        'value_name': 'Transparente',
                        'value_struct': null,
                        'values': [
                            {
                                'id': '57070',
                                'name': 'Transparente',
                                'struct': null
                            }
                        ]
                    }
                ],
                'available_quantity': 250,
                'sold_quantity': 5000,
                'sale_terms': [],
                'picture_ids': [
                    '822373-MLA45839536533_052021',
                    '849971-MLA48184510963_112021',
                    '735963-MLA47570758068_092021',
                    '789432-MLA47570749092_092021',
                    '770192-MLA47570712792_092021',
                    '953962-MLA48183178707_112021',
                    '835753-MLA48183148901_112021',
                    '811071-MLA47570744150_092021',
                    '671524-MLA47570742108_092021',
                    '931616-MLA47570753118_092021'
                ],
                'catalog_product_id': null
            }
        ],
        'status': 'active',
        'sub_status': [],
        'tags': [
            'brand_verified',
            'good_quality_picture',
            'good_quality_thumbnail',
            'loyalty_discount_eligible',
            'immediate_payment',
            'cart_eligible'
        ],
        'warranty': 'Garantía del vendedor: 15 días',
        'catalog_product_id': null,
        'domain_id': 'MLA-DRINKING_GLASSES',
        'parent_item_id': null,
        'differential_pricing': null,
        'deal_ids': [
            'MLA7156',
            'MLA6888'
        ],
        'automatic_relist': false,
        'date_created': '2020-07-01T00:50:32.000Z',
        'last_updated': '2022-05-03T18:56:54.975Z',
        'health': 0.75,
        'catalog_listing': false,
        'channels': [
            'marketplace'
        ]
    };

    const itemDescriptionResponse = {
        "text": "",
        "plain_text": "EL PRECIO PUBLICADO CORRESPONDE A: 12 copas sin tallos ¡HAY STOCK! COMPRÁ SIN CONSULTAR Y TE CONTACTAREMOS A LA BREVEDAD. CARACTERISTICAS: Vaso Gourmet 450ml Material: Vidrio Altura: 12,5 cm Diámetro boca: 6,5cm Diametro: 9,5 cm Capacidad: 450ml Marca: Rigolleau Vidrio resistente ----PICLES DISTRIBUIDORA---- Especialistas en venta online. Te garantizamos la mejor experiencia de compra. ¡Tomamos todas las precauciones para que tu producto llegue bien! HORARIOS DE ATENCIÓN ONLINE LUNES A VIERNES de 9 a 20 HORAS. HORARIOS DE ENTREGA: LUNES A VIERNES DE 14 A 21 HORAS HORARIOS PARA RETIRAR EN VILLA CRESPO: LUNES A VIERNES DE 11 A 16 HORAS PREGUNTAS FRECUENTES 1) ¿Tienen stock de los productos publicados? Si, contamos con stock de todos los productos publicados. 2) ¿Por donde retiro? Se puede retirar por Villa Crespo días hábiles de 11:00 a 16:00. 3) ¿Cuál es el costo de envío a domicilio? ¿ Cuando llegaría? Colocando tu código postal en la parte donde dice envíos podes conocer el costo y fecha estimada de entrega. Si elegiste la opción de envió en el día, las entregas se realizan hasta las 21 horas aproximademente. 4) ¿Hacen envíos a todo el país? Si, realizamos envíos a todo el país con MERCADO ENVIOS. 5) ¿Qué medios de pago aceptan? Aceptamos mercadopago, podés consultar todas las promociones disponibles en: https://www.mercadopago.com.ar/promociones 7) ¿Realizan factura A? Para que podamos emitir la factura A, necesitamos que la cuenta de Mercado Libre desde donde vayas a realizar la compra, esté registrada como IVA Responsable Inscripto o IVA Exento. De lo contrario, se va a emitir automáticamente una factura B. 8) ¿Puedo realizar un cambio? Disponés de 30 (treinta) días corridos a partir de la fecha de recepción del producto para gestionar el cambio. El producto debe estar en las mismas condiciones de recepción. ¡Esperamos tu compra!",
        "last_updated": "2022-04-28T18:44:55.000Z",
        "date_created": "2020-07-01T00:50:32.000Z",
        "snapshot": {}
    }

    const categoriesResponse = {
        "id": "MLA4621",
        "name": "Vasos",
        "picture": null,
        "permalink": null,
        "total_items_in_this_category": 22087,
        "path_from_root": [
            {
                "id": "MLA1574",
                "name": "Hogar, Muebles y Jardín"
            },
            {
                "id": "MLA1592",
                "name": "Bazar y Cocina"
            },
            {
                "id": "MLA436289",
                "name": "Vajilla y Artículos de Servir"
            },
            {
                "id": "MLA1593",
                "name": "Vajilla"
            },
            {
                "id": "MLA4621",
                "name": "Vasos"
            }
        ],
        "children_categories": [
        ],
        "attribute_types": "variations",
        "settings": {
            "adult_content": false,
            "buying_allowed": true,
            "buying_modes": [
                "auction",
                "buy_it_now"
            ],
            "catalog_domain": "MLA-DRINKING_GLASSES",
            "coverage_areas": "not_allowed",
            "currencies": [
                "ARS"
            ],
            "fragile": false,
            "immediate_payment": "required",
            "item_conditions": [
                "not_specified",
                "new",
                "used"
            ],
            "items_reviews_allowed": false,
            "listing_allowed": true,
            "max_description_length": 50000,
            "max_pictures_per_item": 12,
            "max_pictures_per_item_var": 10,
            "max_sub_title_length": 70,
            "max_title_length": 60,
            "max_variations_allowed": 500,
            "maximum_price": null,
            "maximum_price_currency": "ARS",
            "minimum_price": 99,
            "minimum_price_currency": "ARS",
            "mirror_category": null,
            "mirror_master_category": null,
            "mirror_slave_categories": [
            ],
            "price": "required",
            "reservation_allowed": "not_allowed",
            "restrictions": [
            ],
            "rounded_address": false,
            "seller_contact": "not_allowed",
            "shipping_options": [
                "carrier",
                "custom"
            ],
            "shipping_profile": "optional",
            "show_contact_information": false,
            "simple_shipping": "optional",
            "stock": "required",
            "sub_vertical": "home",
            "subscribable": false,
            "tags": [
            ],
            "vertical": "home_industries",
            "vip_subdomain": "articulo",
            "buyer_protection_programs": [
                "delivered",
                "undelivered"
            ],
            "status": "enabled"
        },
        "channels_settings": [
            {
                "channel": "mshops",
                "settings": {
                    "minimum_price": 0
                }
            },
            {
                "channel": "proximity",
                "settings": {
                    "status": "disabled"
                }
            },
            {
                "channel": "mp-merchants",
                "settings": {
                    "buying_modes": [
                        "buy_it_now"
                    ],
                    "immediate_payment": "required",
                    "minimum_price": 1,
                    "status": "enabled"
                }
            }
        ],
        "meta_categ_id": null,
        "attributable": false,
        "date_created": "2018-04-25T08:12:56.000Z"
    }

    it('Should answer item list with status 200', (done) => {
        nock('https://api.mercadolibre.com/sites/MLA').log(console.log)
            .get('/search?q=vasos')
            .reply(200, searchResponse, {
                'Content-Type': 'application/json'
            });
        chai.request(app)
            .get('/api/items?q=vasos')
            .end((err, res) => {
                expect(res.status).to.equals(200);
                done();
            });
    });


    it('Should answer error with status 500', (done) => {
        nock('https://api.mercadolibre.com/sites/MLA').log(console.log)
            .get('/search?q=vasos')
            .reply(500, {}, {
                'Content-Type': 'application/json'
            });
        chai.request(app)
            .get('/api/items?q=vasos')
            .end((err, res) => {
                expect(res.status).to.equals(500);
                done();
            });
    });


    it('Should answer item  with status 200', (done) => {
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/items/MLA865411635')
            .reply(200, itemResponse, {
                'Content-Type': 'application/json'
            });
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/items/MLA865411635/description')
            .reply(200, itemDescriptionResponse, {
                'Content-Type': 'application/json'
            });
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/categories/MLA4621')
            .reply(200, categoriesResponse, {
                'Content-Type': 'application/json'
            });
        chai.request(app)
            .get('/api/items/MLA865411635')
            .end((err, res) => {
                expect(res.status).to.equals(200);
                done();
            });
    });

    it('Should answer error with fail in item service  with status 200', (done) => {
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/items/MLA865411635')
            .reply(500, {}, {
                'Content-Type': 'application/json'
            });
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/items/MLA865411635/description')
            .reply(200, itemDescriptionResponse, {
                'Content-Type': 'application/json'
            });
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/categories/MLA4621')
            .reply(200, categoriesResponse, {
                'Content-Type': 'application/json'
            });
        chai.request(app)
            .get('/api/items/MLA865411635')
            .end((err, res) => {
                expect(res.status).to.equals(500);
                done();
            });
    });

    it('Should answer error with fail in item description service  with status 200', (done) => {
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/items/MLA865411635')
            .reply(200, itemResponse, {
                'Content-Type': 'application/json'
            });
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/items/MLA865411635/description')
            .reply(500, {}, {
                'Content-Type': 'application/json'
            });
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/categories/MLA4621')
            .reply(200, categoriesResponse, {
                'Content-Type': 'application/json'
            });
        chai.request(app)
            .get('/api/items/MLA865411635')
            .end((err, res) => {
                expect(res.status).to.equals(500);
                done();
            });
    });

    it('Should answer error with fail in categories service  with status 200', (done) => {
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/items/MLA865411635')
            .reply(200, itemResponse, {
                'Content-Type': 'application/json'
            });
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/items/MLA865411635/description')
            .reply(200, itemDescriptionResponse, {
                'Content-Type': 'application/json'
            });
        nock('https://api.mercadolibre.com').log(console.log)
            .get('/categories/MLA4621')
            .reply(500, {}, {
                'Content-Type': 'application/json'
            });
        chai.request(app)
            .get('/api/items/MLA865411635')
            .end((err, res) => {
                expect(res.status).to.equals(500);
                done();
            });
    });

});



