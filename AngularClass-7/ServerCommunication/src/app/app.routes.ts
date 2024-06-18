import { Routes } from '@angular/router';
import { IronmanComponent } from '../components/ironman/ironman.component';
import { SpidermanComponent } from '../components/spiderman/spiderman.component';

export const routes: Routes = [
  {
    path: 'ironman',
    component: IronmanComponent,
  },
  {
    path: 'spiderman',
    component: SpidermanComponent,
  },
];
