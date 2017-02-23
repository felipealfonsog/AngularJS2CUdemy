System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var PetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PetComponent = (function () {
                function PetComponent() {
                    this.delete = new core_1.EventEmitter();
                }
                PetComponent.prototype.onDelete = function () {
                    this.delete.emit(this.pet);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PetComponent.prototype, "pet", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PetComponent.prototype, "delete", void 0);
                PetComponent = __decorate([
                    core_1.Component({
                        selector: 'foster-pet',
                        templateUrl: './app/pet.component.html',
                        styleUrls: ['./app/pet.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PetComponent);
                return PetComponent;
            }());
            exports_1("PetComponent", PetComponent);
        }
    }
});
//# sourceMappingURL=pet.component.js.map