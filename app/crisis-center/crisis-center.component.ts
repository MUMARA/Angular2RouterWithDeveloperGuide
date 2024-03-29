import {Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { CrisisService} from './crisis.service';

@Component({
    template:`
    <h2>Crisis Center</h2>
    <router-outlet></router-outlet>`,
    directives:[ROUTER_DIRECTIVES],
    providers:[CrisisService]
})
export class CrisisCenterComponent{}