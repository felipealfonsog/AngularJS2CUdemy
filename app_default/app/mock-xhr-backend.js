System.register(['@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, Observable_1;
    var MockXHRBackend;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            MockXHRBackend = (function () {
                function MockXHRBackend() {
                    this._pets = [
                        {
                            id: 1,
                            name: "Poofster",
                            picture: "media/cats/1.jpg",
                            type: "Cats",
                            category: "Siamese",
                            year: 2010,
                            fosteredOn: 1294166565384,
                            fosterRequest: false
                        },
                        {
                            id: 2,
                            name: "Atom",
                            picture: "media/dogs/1.jpg",
                            type: "Dogs",
                            category: "Yorkshire Terrier",
                            year: 2015,
                            fosteredOn: null,
                            fosterRequest: true
                        }, {
                            id: 3,
                            name: "Firebug",
                            type: "Dogs",
                            picture: "media/dogs/2.jpg",
                            category: "Shibu Inu",
                            year: 2016,
                            fosteredOn: null,
                            fosterRequest: false
                        }, {
                            id: 4,
                            name: "Hoopers",
                            picture: "media/cats/2.jpg",
                            type: "Cats",
                            category: "Tabby",
                            year: null,
                            fosteredOn: null,
                            fosterRequest: true
                        }, {
                            id: 5,
                            name: "Happy Joe",
                            picture: "media/dogs/3.jpg",
                            type: "Dogs",
                            category: "Shiau Inu",
                            year: 2017,
                            fosteredOn: 1457166565384,
                            fosterRequest: false
                        }, {
                            id: 5,
                            name: "Maddy",
                            picture: "media/cats/4.jpg",
                            type: "Cats",
                            category: "Mix",
                            year: 2017,
                            fosterRequest: true
                        }
                    ];
                }
                MockXHRBackend.prototype.createConnection = function (request) {
                    var _this = this;
                    var response = new Observable_1.Observable(function (responseObserver) {
                        var responseData;
                        var responseOptions;
                        switch (request.method) {
                            case http_1.RequestMethod.Get:
                                if (request.url.indexOf('pets?type=') >= 0 || request.url === 'pets') {
                                    var type;
                                    if (request.url.indexOf('?') >= 0) {
                                        type = request.url.split('=')[1];
                                        if (type === 'undefined')
                                            type = '';
                                    }
                                    var pets;
                                    if (type) {
                                        pets = _this._pets.filter(function (pet) { return pet.type === type; });
                                    }
                                    else {
                                        pets = _this._pets;
                                    }
                                    responseOptions = new http_1.ResponseOptions({
                                        body: { pets: JSON.parse(JSON.stringify(pets)) },
                                        status: 200
                                    });
                                }
                                else {
                                    var id = parseInt(request.url.split('/')[1]);
                                    pets = _this._pets.filter(function (pet) { return pet.id === id; });
                                    responseOptions = new http_1.ResponseOptions({
                                        body: JSON.parse(JSON.stringify(pets[0])),
                                        status: 200
                                    });
                                }
                                break;
                            case http_1.RequestMethod.Post:
                                var pet = JSON.parse(request.text().toString());
                                pet.id = _this._getNewId();
                                pet.picture = "media/" +
                                    pet.type
                                    +
                                        "/000.png";
                                _this._pets.push(pet);
                                responseOptions = new http_1.ResponseOptions({ status: 201 });
                                break;
                            case http_1.RequestMethod.Delete:
                                var id = parseInt(request.url.split('/')[1]);
                                _this._deletePet(id);
                                responseOptions = new http_1.ResponseOptions({ status: 200 });
                        }
                        var responseObject = new http_1.Response(responseOptions);
                        responseObserver.next(responseObject);
                        responseObserver.complete();
                        return function () { };
                    });
                    return { response: response };
                };
                MockXHRBackend.prototype._deletePet = function (id) {
                    var pet = this._pets.find(function (pet) { return pet.id === id; });
                    var index = this._pets.indexOf(pet);
                    if (index >= 0) {
                        this._pets.splice(index, 1);
                    }
                };
                MockXHRBackend.prototype._getNewId = function () {
                    if (this._pets.length > 0) {
                        return Math.max.apply(Math, this._pets.map(function (pet) { return pet.id; })) + 1;
                    }
                };
                return MockXHRBackend;
            }());
            exports_1("MockXHRBackend", MockXHRBackend);
        }
    }
});
//# sourceMappingURL=mock-xhr-backend.js.map