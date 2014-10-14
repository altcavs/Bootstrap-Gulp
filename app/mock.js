var MockServices = angular.module('demoApp.mock', ['ngMockE2E']);
MockServices.run(function ($httpBackend) {

    var menu =[

        {
            "id": 1,
            "title": "Кадры",
            "submenu":[
                {
                    "id": "staff_01",
                    "title": "Учет персональных данных",
                    "url": "news"
                },
                {
                    "id": "staff_02",
                    "title": "Учет движения кадров",
                    "url": ""
                },
                {
                    "id": "",
                    "title": "Учет отпусков и командировок",
                    "url": ""
                },
                {
                    "id": "",
                    "title": "Настройка графиков работы",
                    "url": ""
                }
            ]
        },
        {
            "id": 2,
            "title": "Зарплата",
            "submenu":[
                {
                    "id": "",
                    "title": "Различные системы оплаты труда",
                    "url": ""
                },
                {
                    "id": "",
                    "title": "Различные системы оплаты труда",
                    "url": ""
                }
            ]
        },
        {
            "id": 3,
            "title": "Документооборот",
            "submenu":[
                {
                    "id": "",
                    "title": "Основы программы",
                    "url": ""
                },
                {
                    "id": "",
                    "title": "Учет рабочего времени",
                    "url": ""
                }
            ]
        }
    ];

    var menuUrl = "/api/menu";
    $httpBackend.whenGET(menuUrl).respond(menu);
    //$httpBackend.expectGET(menuUrl);
    // Pass through any requests for application files
    $httpBackend.whenGET(/app/).passThrough();
    $httpBackend.whenGET(/data/).passThrough();
});