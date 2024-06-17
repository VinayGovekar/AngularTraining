import { Component } from '@angular/core';
import { ObjectFunctionsComponent } from './object-functions/object-functions.component';
import { ProfileBuilderComponent } from './profile-builder/profile-builder.component';
import { CustomFilterComponent } from './custom-filter/custom-filter.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ObjectFunctionsComponent,ProfileBuilderComponent,CustomFilterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}

