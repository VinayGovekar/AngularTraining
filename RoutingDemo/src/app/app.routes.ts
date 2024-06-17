import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('../components/about/about.component').then(
        (m) => m.AboutComponent
      ),
    children: [
      {
        path: 'rating',
        loadComponent: () =>
          import('../components/rating/rating.component').then(
            (m) => m.RatingComponent
          ),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('../components/feedback/feedback.component').then(
            (m) => m.FeedbackComponent
          ),
      },
    ],
  },
  {
    path: 'services',
    loadComponent: () =>
      import('../components/services/services.component').then(
        (m) => m.ServicesComponent
      ),
  },
  {
    path: 'formTemplate',
    loadComponent: () =>
      import('../components/template-form1/template-form1.component').then(
        (m) => m.TemplateForm1Component
      ),
  },
  {
    path: 'reactiveformTemplate',
    loadComponent: () =>
      import('../components/reactive-form/reactive-form.component').then(
        (m) => m.ReactiveFormComponent
      ),
  },
];
