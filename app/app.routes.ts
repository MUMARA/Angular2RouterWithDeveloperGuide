import { provideRouter, RouterConfig } from '@angular/router';

const routes : RouterConfig = 
[
    {path : 'crisis-center',component : CrisisCenterComponent},
    {path:'heroes', component:HerolistComponent},
    {path: 'hero/:id',component:HeroDetailComponent}];

    export const appRouterProviders = [provideRouter(routes)];