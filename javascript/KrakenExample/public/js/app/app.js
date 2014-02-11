define(function(require) {
    var $ = require('jquery');
    var bootstrap = require('bootstrap');
    var fuelux= require('fuelux/all');

    var login = require('login');
    var index= require('index');

    console.log(fuelux);

    var app = {
        initialize: function () {
            app.login = login;
            login.init();
        }
    };

    $( document ).ready(function() {
        app.initialize();
        app.login.showLoginDialog();
        var dataSource = {
            columns: function ()
            {
                return [
                    {
                        property: 'toponymName',
                        label: 'Name',
                        sortable: true
                    },
                    {
                        property: 'countrycode',
                        label: 'Country',
                        sortable: true
                    },
                    {
                        property: 'population',
                        label: 'Population',
                        sortable: true
                    },
                    {
                        property: 'fcodeName',
                        label: 'Type',
                        sortable: true
                    }
                ];
            },
            data : function(obj)
            {
                console.log(obj);
                return [{
                    "fcodeName": "capital of a political entity",
                    "toponymName": "Mexico City",
                    "countrycode": "MX",
                    "fcl": "P",
                    "fclName": "city, village,...",
                    "name": "Mexico City",
                    "wikipedia": "",
                    "lng": -99.12766456604,
                    "fcode": "PPLC",
                    "geonameId": 3530597,
                    "lat": 19.428472427036,
                    "population": 12294193
                }];
            }


        };
        $('#MyGrid').datagrid({ dataSource: dataSource, stretchHeight: true })


    });
    $(document)
});