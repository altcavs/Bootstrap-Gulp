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

    var menuUrl = '/api/menu';
    $httpBackend.whenGET(menuUrl).respond(menu);

    var articles = [
       {
           "id": "staff",
           "title": "Кадры",
           "subcategories": [
               {
                   "id": "staff_1",
                   "title": "Non ullamco non proident consectetur Lorem id excepteur tempor adipisicing cillum ea ex ut ea.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Laborum cupidatat ullamco veniam proident consectetur aliqua elit labore non.",
                           "description": "Tempor excepteur esse labore reprehenderit nulla laborum id cupidatat nisi dolore commodo ut. Deserunt id aliquip Lorem eu sit Lorem ipsum.",
                           "url": "#/staff/1"
                       },
                       {
                           "id": 2,
                           "title": "Non esse tempor eiusmod nisi nulla adipisicing do Lorem.",
                           "description": "Cupidatat aliqua esse sunt ullamco exercitation quis reprehenderit non. Anim ut voluptate dolor enim nisi officia mollit laboris enim velit.",
                           "url": "#/staff/2"
                       },
                       {
                           "id": 3,
                           "title": "Veniam est consequat sunt consectetur mollit deserunt culpa nostrud magna ipsum.",
                           "description": "Qui veniam culpa irure velit ea velit irure proident id. Sint enim sint aliquip minim.",
                           "url": "#/staff/3"
                       },
                       {
                           "id": 4,
                           "title": "Do cupidatat id adipisicing in enim nostrud ullamco consectetur labore qui aute laborum.",
                           "description": "Laboris irure eiusmod voluptate Lorem. Tempor reprehenderit occaecat aliqua velit dolore duis sint pariatur exercitation.",
                           "url": "#/staff/4"
                       }
                   ]
               },
               {
                   "id": "staff_2",
                   "title": "Irure eu occaecat cillum aute.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Pariatur ut et culpa officia.",
                           "description": "Dolore eiusmod et deserunt nisi elit ullamco officia id nostrud. Excepteur qui anim nulla voluptate sunt ipsum esse nisi cupidatat quis sunt ut irure.",
                           "url": "#/staff/1"
                       },
                       {
                           "id": 2,
                           "title": "Sunt dolor eu eiusmod laboris et deserunt velit eu reprehenderit id eiusmod nulla mollit.",
                           "description": "Magna deserunt magna culpa nulla magna tempor mollit eiusmod occaecat id. Aute nulla fugiat proident eu dolore culpa cillum ullamco consequat nisi quis.",
                           "url": "#/staff/2"
                       },
                       {
                           "id": 3,
                           "title": "Ex tempor irure ex nisi dolor adipisicing aliqua sunt non esse duis anim nostrud.",
                           "description": "Ipsum laboris id ullamco excepteur eu excepteur velit dolor quis id elit sunt. Adipisicing sit qui laborum pariatur nisi officia aliqua enim anim nostrud id nisi exercitation aute.",
                           "url": "#/staff/3"
                       }
                   ]
               },
               {
                   "id": "staff_3",
                   "title": "Dolor veniam sunt proident exercitation fugiat elit tempor esse proident minim magna incididunt.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Cillum aute sint consectetur aliqua adipisicing magna deserunt et.",
                           "description": "Elit velit aute officia officia. Et mollit nostrud magna mollit elit velit adipisicing excepteur non esse.",
                           "url": "#/staff/1"
                       },
                       {
                           "id": 2,
                           "title": "Tempor sint exercitation proident non sint aliquip pariatur eu aute.",
                           "description": "Aliquip non cupidatat ipsum tempor ea. Ad quis sit sunt eu sint deserunt sit reprehenderit dolore reprehenderit ipsum.",
                           "url": "#/staff/2"
                       },
                       {
                           "id": 3,
                           "title": "Eiusmod nostrud voluptate et ex consectetur velit.",
                           "description": "Excepteur laborum consequat enim voluptate est. Enim mollit Lorem adipisicing amet pariatur cupidatat aliquip anim minim exercitation deserunt ex est.",
                           "url": "#/staff/3"
                       },
                       {
                           "id": 4,
                           "title": "Cillum proident commodo laboris proident ex ut eu eiusmod.",
                           "description": "Reprehenderit quis esse aute aliqua qui duis sint proident ea excepteur. Tempor consectetur et labore voluptate ea.",
                           "url": "#/staff/4"
                       }
                   ]
               },
               {
                   "id": "staff_4",
                   "title": "Reprehenderit eiusmod eiusmod sint elit laboris veniam.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Ea non velit non sit cupidatat sint et ipsum.",
                           "description": "Proident anim ut sunt incididunt consequat veniam anim. Culpa commodo ex qui adipisicing non magna.",
                           "url": "#/staff/1"
                       },
                       {
                           "id": 2,
                           "title": "Exercitation dolore et esse anim officia exercitation consectetur cillum amet.",
                           "description": "Eu irure aliquip est duis tempor magna adipisicing cupidatat. Amet magna pariatur et proident mollit velit ea pariatur proident ad.",
                           "url": "#/staff/2"
                       },
                       {
                           "id": 3,
                           "title": "Ad est qui reprehenderit anim sunt quis.",
                           "description": "Ea minim non et anim nostrud qui ea officia anim nisi laborum adipisicing irure dolor. Magna commodo culpa veniam deserunt dolor proident culpa.",
                           "url": "#/staff/3"
                       },
                       {
                           "id": 4,
                           "title": "Eiusmod voluptate do qui id do proident mollit officia.",
                           "description": "Est est quis laboris consectetur cillum. Nostrud occaecat fugiat deserunt tempor anim sint.",
                           "url": "#/staff/4"
                       },
                       {
                           "id": 5,
                           "title": "Nostrud veniam sunt exercitation tempor dolore irure.",
                           "description": "Tempor irure duis minim elit. Ut veniam dolore ad deserunt et amet aliquip velit cillum.",
                           "url": "#/staff/5"
                       }
                   ]
               }
           ]
       },
       {
           "id": "salary",
           "title": "Зарплата",
           "subcategories": [
               {
                   "id": "salary_1",
                   "title": "Elit dolor cupidatat non ullamco. Nulla pariatur elit enim adipisicing.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Commodo tempor eu labore in ea sit in laboris consequat nisi proident.",
                           "description": "Magna quis officia elit veniam nulla enim ut eiusmod fugiat mollit. Aliqua dolor labore consectetur incididunt enim.",
                           "url": "#/salary/1"
                       },
                       {
                           "id": 2,
                           "title": "Pariatur ex voluptate fugiat cupidatat ullamco esse nostrud Lorem occaecat aute ipsum eu ad.",
                           "description": "Sunt sint aliqua qui laborum anim adipisicing laboris elit ad duis non. Proident est Lorem reprehenderit eiusmod magna qui fugiat officia amet.",
                           "url": "#/salary/2"
                       },
                       {
                           "id": 3,
                           "title": "Pariatur incididunt cupidatat aute enim sunt incididunt ullamco duis adipisicing velit duis ad eu deserunt.",
                           "description": "Adipisicing do aliquip quis commodo aute enim anim mollit quis et. Aliqua elit ut amet mollit Lorem amet sint dolor nostrud voluptate aliquip ut nostrud.",
                           "url": "#/salary/3"
                       }
                   ]
               },
               {
                   "id": "salary_2",
                   "title": "Qui labore eiusmod minim anim dolor officia deserunt irure et tempor nisi tempor duis dolor. Ea consectetur irure magna officia ut excepteur id est proident.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Incididunt laboris veniam occaecat aliquip reprehenderit proident ut.",
                           "description": "Fugiat nulla occaecat voluptate magna consectetur elit in id. Nisi enim esse laboris eiusmod elit qui pariatur irure sunt irure aute aliqua exercitation.",
                           "url": "#/salary/1"
                       },
                       {
                           "id": 2,
                           "title": "Officia aliqua nisi magna officia eu magna nisi dolore veniam est do commodo mollit adipisicing.",
                           "description": "Reprehenderit esse minim elit exercitation qui sunt dolore nisi minim fugiat in ad laboris. Esse nulla occaecat voluptate consequat nisi sunt ut laborum laborum.",
                           "url": "#/salary/2"
                       },
                       {
                           "id": 3,
                           "title": "Ad consectetur ipsum nostrud occaecat officia mollit id anim sint mollit.",
                           "description": "Est elit laborum ex elit anim. Est nostrud irure sit nostrud mollit non et est Lorem non nulla excepteur esse culpa.",
                           "url": "#/salary/3"
                       },
                       {
                           "id": 4,
                           "title": "Officia eiusmod aute eu dolor culpa ullamco sint.",
                           "description": "Sint Lorem irure ea consequat minim aute duis commodo mollit non. Exercitation ea nostrud non excepteur enim dolore Lorem sint.",
                           "url": "#/salary/4"
                       },
                       {
                           "id": 5,
                           "title": "Anim consequat in in fugiat mollit commodo exercitation occaecat anim magna ad.",
                           "description": "Non incididunt exercitation commodo amet dolore sunt. Nisi do amet nulla minim officia cupidatat mollit reprehenderit sit incididunt labore non officia.",
                           "url": "#/salary/5"
                       }
                   ]
               },
               {
                   "id": "salary_3",
                   "title": "Id ipsum id voluptate labore fugiat sunt ipsum consectetur aliquip duis est. Consectetur nostrud ipsum Lorem anim quis consequat est in.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Non irure minim pariatur incididunt laborum cupidatat ullamco culpa commodo voluptate.",
                           "description": "Quis aliquip commodo est cupidatat velit est voluptate dolore voluptate. Eu elit est adipisicing dolore esse adipisicing dolore.",
                           "url": "#/salary/1"
                       },
                       {
                           "id": 2,
                           "title": "Est irure amet commodo fugiat duis sunt laborum ullamco.",
                           "description": "Sit proident deserunt id nisi do nostrud nisi pariatur laborum consectetur officia anim anim. Nisi labore occaecat labore mollit aliquip nulla.",
                           "url": "#/salary/2"
                       },
                       {
                           "id": 3,
                           "title": "Deserunt exercitation irure aliqua dolor pariatur nisi magna ut aute et ipsum irure laborum aliquip.",
                           "description": "Laboris aute nisi commodo eiusmod Lorem deserunt amet quis laborum aliquip. Aute adipisicing qui reprehenderit ullamco sint excepteur fugiat labore nostrud.",
                           "url": "#/salary/3"
                       },
                       {
                           "id": 4,
                           "title": "Nisi in sunt consectetur laborum esse reprehenderit aliqua occaecat labore.",
                           "description": "Officia sint aliquip magna occaecat consectetur eiusmod tempor ipsum officia consectetur id. Tempor culpa qui laborum ipsum dolore labore laboris laboris laborum minim.",
                           "url": "#/salary/4"
                       },
                       {
                           "id": 5,
                           "title": "Ea enim consectetur ipsum cupidatat ex non incididunt proident fugiat duis.",
                           "description": "Lorem ad in nulla culpa laborum sit consectetur cillum nostrud magna incididunt id. Id anim ea laboris irure eiusmod laborum.",
                           "url": "#/salary/5"
                       }
                   ]
               },
               {
                   "id": "salary_4",
                   "title": "Consectetur do ut aute sit ex consequat Lorem. Esse reprehenderit eiusmod ad anim minim voluptate eu velit quis.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Occaecat elit et proident mollit quis nulla exercitation eiusmod ad nostrud aliqua in.",
                           "description": "Voluptate proident veniam consectetur deserunt. Aliquip sit adipisicing irure ea fugiat.",
                           "url": "#/salary/1"
                       },
                       {
                           "id": 2,
                           "title": "Id ad anim est officia voluptate.",
                           "description": "Et duis nisi ut exercitation. Voluptate commodo ex incididunt minim sit velit qui aliqua eiusmod adipisicing.",
                           "url": "#/salary/2"
                       },
                       {
                           "id": 3,
                           "title": "Dolore mollit irure aliqua quis quis labore ullamco ullamco non labore.",
                           "description": "Commodo tempor minim dolore ipsum cillum commodo aliqua magna mollit veniam ullamco Lorem proident id. Occaecat ex ullamco deserunt dolor culpa nostrud Lorem cupidatat consequat laboris exercitation exercitation.",
                           "url": "#/salary/3"
                       },
                       {
                           "id": 4,
                           "title": "Esse commodo ipsum quis cupidatat enim officia id ex id.",
                           "description": "Dolore adipisicing do nisi laboris. Cillum ullamco exercitation deserunt cillum velit laboris eiusmod elit consequat reprehenderit anim sit mollit.",
                           "url": "#/salary/4"
                       }
                   ]
               },
               {
                   "id": "salary_5",
                   "title": "Aute ut qui incididunt proident occaecat in magna labore qui excepteur fugiat duis laboris duis. Dolor quis Lorem aute nulla fugiat id ullamco qui minim.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Veniam dolore duis eiusmod eiusmod ea velit dolore mollit ad.",
                           "description": "Proident eu commodo voluptate ipsum adipisicing est ad Lorem do cupidatat in commodo. Elit velit mollit exercitation fugiat velit.",
                           "url": "#/salary/1"
                       },
                       {
                           "id": 2,
                           "title": "Id officia consectetur ad nisi nulla Lorem laboris laboris adipisicing commodo minim enim eu.",
                           "description": "Occaecat mollit in occaecat nulla ex veniam laborum in aliquip pariatur adipisicing consequat occaecat. Sint do anim laboris irure sit occaecat est voluptate esse.",
                           "url": "#/salary/2"
                       },
                       {
                           "id": 3,
                           "title": "Cupidatat nisi amet commodo nulla cillum laboris sunt deserunt est ut.",
                           "description": "Esse nostrud cillum anim et velit aliquip velit duis velit. Cupidatat dolor Lorem nostrud irure ullamco nostrud esse consequat culpa occaecat aliquip anim aliquip ex.",
                           "url": "#/salary/3"
                       }
                   ]
               }
           ]
       },
       {
           "id": "doc",
           "title": "Документооборот",
           "subcategories": [
               {
                   "id": "doc_1",
                   "title": "Enim voluptate pariatur laborum eu labore pariatur enim id incididunt laboris ea ad esse. Non cillum sint non ullamco eu minim ipsum.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Ut do amet proident labore do pariatur ipsum consectetur aliqua voluptate velit.",
                           "description": "Ut dolore tempor ex veniam aute enim est. Non anim incididunt laboris esse dolor esse ullamco sint.",
                           "url": "#/doc/1"
                       },
                       {
                           "id": 2,
                           "title": "Cupidatat esse amet ex laborum et deserunt ad mollit sunt id.",
                           "description": "Mollit nulla amet excepteur velit minim do deserunt eu labore sint cillum ea mollit. Nostrud sunt dolor mollit qui sint ipsum nulla eu reprehenderit eu ex ex est.",
                           "url": "#/doc/2"
                       },
                       {
                           "id": 3,
                           "title": "Exercitation sint sint sint officia voluptate fugiat esse dolor ipsum minim laboris nisi.",
                           "description": "Ipsum enim adipisicing velit consectetur laboris incididunt eiusmod. Ad laborum Lorem pariatur in irure exercitation ex reprehenderit do culpa mollit tempor aliquip ullamco.",
                           "url": "#/doc/3"
                       }
                   ]
               },
               {
                   "id": "doc_2",
                   "title": "Et ea id reprehenderit aute mollit laborum pariatur duis labore officia cillum cillum eu sunt. Ea voluptate nulla dolor esse duis.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Pariatur tempor nostrud duis cupidatat aliquip anim ut enim voluptate minim eiusmod amet.",
                           "description": "Minim laboris ipsum ut laborum ad pariatur voluptate eu sit eiusmod incididunt laborum fugiat. Labore id excepteur est laborum veniam do ut labore id nisi proident qui consectetur.",
                           "url": "#/doc/1"
                       },
                       {
                           "id": 2,
                           "title": "Exercitation veniam qui excepteur veniam ipsum tempor.",
                           "description": "Aliqua proident culpa nostrud et et. Pariatur ipsum culpa et fugiat ea nisi aute ut sint ex amet quis occaecat.",
                           "url": "#/doc/2"
                       },
                       {
                           "id": 3,
                           "title": "Mollit mollit culpa non minim elit voluptate occaecat ex minim tempor laboris.",
                           "description": "Nostrud laboris pariatur exercitation et. Ut excepteur irure aute qui nostrud Lorem.",
                           "url": "#/doc/3"
                       },
                       {
                           "id": 4,
                           "title": "Ad officia ad et deserunt ut veniam ad voluptate eiusmod ipsum aute duis cupidatat veniam.",
                           "description": "Reprehenderit do consectetur consectetur eiusmod id. Quis est incididunt voluptate ea non.",
                           "url": "#/doc/4"
                       },
                       {
                           "id": 5,
                           "title": "Minim ipsum Lorem duis cupidatat fugiat enim qui.",
                           "description": "Amet culpa nostrud officia dolore dolore nulla. Esse ex est consectetur officia do ad tempor est anim tempor esse.",
                           "url": "#/doc/5"
                       }
                   ]
               },
               {
                   "id": "doc_3",
                   "title": "Do sint enim id nisi tempor non fugiat aliquip quis ipsum proident duis. Sint est est cupidatat cillum irure irure in nisi mollit dolor consequat in enim non.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Tempor mollit nulla ex nostrud fugiat ut duis dolor minim cillum.",
                           "description": "Commodo aliquip duis voluptate id commodo exercitation culpa eu Lorem velit cillum. Proident nisi voluptate ad culpa proident duis velit esse.",
                           "url": "#/doc/1"
                       },
                       {
                           "id": 2,
                           "title": "Est tempor culpa excepteur irure eu aliquip elit.",
                           "description": "In sit laboris voluptate velit tempor aute dolor est sint amet cillum. Labore sit incididunt dolor labore labore adipisicing.",
                           "url": "#/doc/2"
                       },
                       {
                           "id": 3,
                           "title": "Adipisicing est voluptate magna dolore consectetur non adipisicing eu ea labore dolore.",
                           "description": "Tempor excepteur elit in voluptate quis nisi culpa aute sit. Incididunt id non consequat velit cupidatat est aliquip ut culpa qui reprehenderit magna fugiat.",
                           "url": "#/doc/3"
                       }
                   ]
               },
               {
                   "id": "doc_4",
                   "title": "Id nulla mollit irure deserunt proident qui aliquip nostrud pariatur reprehenderit laborum laborum reprehenderit minim. Sunt et fugiat esse in commodo cupidatat aliquip aute enim eu duis dolor voluptate magna.",
                   "articles": [
                       {
                           "id": 1,
                           "title": "Duis ullamco eiusmod cupidatat nostrud.",
                           "description": "Enim mollit aliqua cupidatat ut sunt incididunt ex dolore sint anim elit ex eu est. Cillum voluptate amet exercitation duis laboris.",
                           "url": "#/doc/1"
                       },
                       {
                           "id": 2,
                           "title": "Nostrud voluptate exercitation eu veniam aute mollit esse officia laboris proident elit est ipsum.",
                           "description": "Irure aliquip sint reprehenderit officia amet. Incididunt ad dolore voluptate magna anim enim nostrud magna laboris.",
                           "url": "#/doc/2"
                       },
                       {
                           "id": 3,
                           "title": "Esse laborum consectetur voluptate sint laborum dolore esse tempor esse.",
                           "description": "Consectetur Lorem anim tempor quis ad aliqua dolor ad ut nostrud adipisicing elit cillum. Dolore velit consequat minim pariatur non quis.",
                           "url": "#/doc/3"
                       },
                       {
                           "id": 4,
                           "title": "Reprehenderit excepteur deserunt nisi commodo laborum ea duis irure duis nisi voluptate ea voluptate.",
                           "description": "Dolore esse fugiat tempor fugiat labore cillum occaecat tempor veniam tempor Lorem fugiat. Quis cupidatat sit laborum sit reprehenderit.",
                           "url": "#/doc/4"
                       }
                   ]
               }
           ]
       }
    ];

    var categoryUrl = "/api/category"
    var catRegex = new RegExp(categoryUrl + "/[0-9][0-9]*", '');
    $httpBackend.whenGET(catRegex).respond(function (method, url, data) {
        var subcategory  = {"id": 0};
        var parameters = url.split('/');
        var length = parameters.length;
        var id = parameters[length - 1];

        if (id) {
            for (var i = 0; i < articles.length; i++) {
                if (articles[i].id == id) {
                    subcategory = articles[i].subcategories;
                    break;
                }
            };
        }
        return [200,subcategory, {}];
    });
    // Pass through any requests for application files
    $httpBackend.whenGET(/app/).passThrough();
    $httpBackend.whenGET(/data/).passThrough();
});