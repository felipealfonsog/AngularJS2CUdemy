System.register(['@angular/router', './pet-form.component', './pet-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, pet_form_component_1, pet_list_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pet_form_component_1_1) {
                pet_form_component_1 = pet_form_component_1_1;
            },
            function (pet_list_component_1_1) {
                pet_list_component_1 = pet_list_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'add', component: pet_form_component_1.PetFormComponent },
                { path: ':type', component: pet_list_component_1.PetListComponent },
                { path: '', pathMatch: 'full', redirectTo: 'all' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map