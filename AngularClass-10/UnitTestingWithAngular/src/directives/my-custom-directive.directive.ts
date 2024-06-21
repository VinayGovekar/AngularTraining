import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]',
  standalone: true
})
export class MyCustomDirectiveDirective {

  constructor(public element:ElementRef) { 
    console.log(element.nativeElement.styleUrl);
    
    // element.nativeElement.style.background="red";
    element.nativeElement.disabled =true;
  }
  
}
