import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
  constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseData;
      var responseOptions;
      switch (request.method) {
        case RequestMethod.Get:
          if (request.url.indexOf('pets?type=') >= 0 || request.url === 'pets') {
            var type;
            if (request.url.indexOf('?') >= 0) {
              type = request.url.split('=')[1];
              if (type === 'undefined') type = '';
            }
            var pets;
            if (type) {
              pets = this._pets.filter(pet => pet.type === type);
            } else {
              pets = this._pets;
            }
            responseOptions = new ResponseOptions({
              body: { pets: JSON.parse(JSON.stringify(pets)) },
              status: 200
            });
          } else {
            var id = parseInt(request.url.split('/')[1]);
            pets = this._pets.filter(pet => pet.id === id);
            responseOptions = new ResponseOptions({
              body: JSON.parse(JSON.stringify(pets[0])),
              status: 200
            });
          }
          break;
        case RequestMethod.Post:
          var pet = JSON.parse(request.text().toString());
          pet.id = this._getNewId();
          pet.picture = "media/" +
              pet.type
              +
          "/000.png";

            this._pets.push(pet);
          responseOptions = new ResponseOptions({ status: 201 });
          break;
        case RequestMethod.Delete:
          var id = parseInt(request.url.split('/')[1]);
          this._deletePet(id);
          responseOptions = new ResponseOptions({ status: 200 });
      }

      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _deletePet(id) {
    var pet = this._pets.find(pet => pet.id === id);
    var index = this._pets.indexOf(pet);
    if (index >= 0) {
      this._pets.splice(index, 1);
    }
  }

  _getNewId() {
    if (this._pets.length > 0) {
      return Math.max.apply(Math, this._pets.map(pet => pet.id)) + 1;
    }
  }

  _pets = [
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