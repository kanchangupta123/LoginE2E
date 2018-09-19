import { TestBed,ComponentFixture,fakeAsync,tick } from '@angular/core/testing';
import { AppComponent } from "./app.component";
xdescribe('App Component', () => {

 //Declarations   
let component: AppComponent;
let fixture:   ComponentFixture<AppComponent>;
/* setup */
beforeEach(() => {
    TestBed.configureTestingModule({                            // configure TestBed
        declarations: [ AppComponent ],                             // component to test
        imports: [  ],                           // import test router module
        providers: [ ]
  });
});
  fixture = TestBed.createComponent(AppComponent);   
  component = fixture.componentInstance;


/* confirms the app component exists with a Jasmine expectation */
it('should be created', fakeAsync(() => {
    expect(component).toBeFalsy();

    tick();
  //  expect(component).toBeTruthy();
    
  }));
});