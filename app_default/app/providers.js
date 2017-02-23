System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var lookupListToken, lookupLists;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("lookupListToken", lookupListToken = new core_1.OpaqueToken('lookupListToken'));
            exports_1("lookupLists", lookupLists = {
                types: [
                    {
                        single: 'Cat',
                        plural: 'Cats'
                    },
                    {
                        single: 'Dog',
                        plural: 'Dogs'
                    }]
            });
        }
    }
});
//# sourceMappingURL=providers.js.map