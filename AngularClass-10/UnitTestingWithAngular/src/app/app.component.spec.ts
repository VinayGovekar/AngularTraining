import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { ProductsService } from '../services/products.service';

// providing mock implementation
class mockProductService {
  getData() {
    return of({id:0,name:"p1"});
  }
}

describe('AppComponent', () => {
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [AppComponent],
  //   }).compileComponents();
  // });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        // provideHttpClient(),provideHttpClientTesting(),
        { provide: ProductsService, useClass: mockProductService }
      ]
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'UnitTestingWithAngular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('UnitTestingWithAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, UnitTestingWithAngular');
  });

  it('should retrieve products', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const productService = TestBed.inject(ProductsService);
    component.getData();
    tick();
    expect(component.users).toEqual([
    
    ]);
  }));

  // it('should contain virat',()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const element = compiled.querySelector('div')
  //   console.log(element);
    
  //   expect(element?.textContent).toContain("Virat");
  // });
});
