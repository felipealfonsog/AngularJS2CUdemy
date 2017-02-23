System.register(['@angular/core', '@angular/router', './pet.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, pet_service_1;
    var PetListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pet_service_1_1) {
                pet_service_1 = pet_service_1_1;
            }],
        execute: function() {
            PetListComponent = (function () {
                function PetListComponent(petService, activatedRoute) {
                    this.petService = petService;
                    this.activatedRoute = activatedRoute;
                    this.type = '';
                    this.pets = [];
                }
                PetListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paramsSubscription = this.activatedRoute.params
                        .subscribe(function (params) {
                        var type = params['type'];
                        if (type.toLowerCase() === 'all') {
                            type = '';
                        }
                        _this.getPets(type);
                    });
                };
                PetListComponent.prototype.ngOnDestroy = function () {
                    this.paramsSubscription.unsubscribe();
                };
                PetListComponent.prototype.onPetDelete = function (pet) {
                    var _this = this;
                    this.petService.delete(pet)
                        .subscribe(function () {
                        _this.getPets(_this.type);
                    });
                };
                PetListComponent.prototype.getPets = function (type) {
                    var _this = this;
                    this.type = type;
                    this.petService.get(type)
                        .subscribe(function (pets) {
                        _this.pets = pets;
                    });
                };
                PetListComponent = __decorate([
                    core_1.Component({
                        selector: 'foster-pet-list',
                        templateUrl: './app/pet-list.component.html',
                        styleUrls: ['./app/pet-list.component.css']
                    }), 
                    __metadata('design:paramtypes', [pet_service_1.PetService, router_1.ActivatedRoute])
                ], PetListComponent);
                return PetListComponent;
            }());
            exports_1("PetListComponent", PetListComponent);
        }
    }
});
//# sourceMappingURL=pet-list.component.js.map