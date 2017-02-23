System.register(['@angular/core', '@angular/forms', '@angular/router', './pet.service', './providers'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, forms_1, router_1, pet_service_1, providers_1;
    var PetFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pet_service_1_1) {
                pet_service_1 = pet_service_1_1;
            },
            function (providers_1_1) {
                providers_1 = providers_1_1;
            }],
        execute: function() {
            PetFormComponent = (function () {
                function PetFormComponent(formBuilder, petService, lookupLists, router) {
                    this.formBuilder = formBuilder;
                    this.petService = petService;
                    this.lookupLists = lookupLists;
                    this.router = router;
                }
                PetFormComponent.prototype.ngOnInit = function () {
                    this.form = this.formBuilder.group({
                        type: this.formBuilder.control('Cats'),
                        name: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        category: this.formBuilder.control(''),
                        year: this.formBuilder.control('', this.yearValidator),
                    });
                };
                PetFormComponent.prototype.yearValidator = function (control) {
                    if (control.value.trim().length === 0) {
                        return null;
                    }
                    var year = parseInt(control.value);
                    var minYear = 1800;
                    var maxYear = 2500;
                    if (year >= minYear && year <= maxYear) {
                        return null;
                    }
                    else {
                        return {
                            'year': {
                                min: minYear,
                                max: maxYear
                            }
                        };
                    }
                };
                PetFormComponent.prototype.onSubmit = function (pet) {
                    var _this = this;
                    this.petService.add(pet)
                        .subscribe(function () {
                        _this.router.navigate(['/', pet.type]);
                    });
                };
                PetFormComponent = __decorate([
                    core_1.Component({
                        selector: 'foster-pet-form',
                        templateUrl: './app/pet-form.component.html',
                        styleUrls: ['./app/pet-form.component.css']
                    }),
                    __param(2, core_1.Inject(providers_1.lookupListToken)), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, pet_service_1.PetService, Object, router_1.Router])
                ], PetFormComponent);
                return PetFormComponent;
            }());
            exports_1("PetFormComponent", PetFormComponent);
        }
    }
});
//# sourceMappingURL=pet-form.component.js.map