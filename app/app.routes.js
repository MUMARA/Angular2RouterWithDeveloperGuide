"use strict";
var router_1 = require('@angular/router');
var routes = [
    { path: 'crisis-center', component: CrisisCenterComponent },
    { path: 'heroes', component: HerolistComponent },
    { path: 'hero/:id', component: HeroDetailComponent }];
exports.appRouterProviders = [router_1.provideRouter(routes)];
//# sourceMappingURL=app.routes.js.map