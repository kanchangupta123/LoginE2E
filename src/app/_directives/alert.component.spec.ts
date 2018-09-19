import { TestBed,ComponentFixture,async } from '@angular/core/testing';
import { AlertComponent } from "./alert.component";
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Router,NavigationStart } from '@angular/router'; 
import { AlertService } from "./../_services/alert.service";
import { Observable } from 'rxjs';
xdescribe('Alert Component', () => {

    //Declarations   
   let component: AlertComponent;
   let fixture:   ComponentFixture<AlertComponent>;
   let alertService;
   let router: Router;
   let getMessageSpy;
   let message;

   class MockRouter {
    // Router
    public ne = new NavigationStart(0, 'http://localhost:4200/login');
    public events = new Observable(observer => {
    observer.next(this.ne);
    observer.complete();
  }); }
   
   /* setup */
   beforeEach(async(() => {
    message = 'true';
    alertService = jasmine.createSpyObj('AlertService', ['getMessage']);
    getMessageSpy = alertService.getMessage.and.returnValue(of(message));
       TestBed.configureTestingModule({                            // configure TestBed
       declarations: [ AlertComponent ],                             // component to test
       imports: [
        RouterTestingModule.withRoutes([])
      ], 
                               // import test router module
       providers: [{provide: AlertService, useValue: alertService},
                   { provide: Router, useClass: MockRouter }
        ] 
     //   { provide: Router,      useValue: routerSpy }]
    })
    .compileComponents();
  }));
     fixture = TestBed.createComponent(AlertComponent);   
     component = fixture.componentInstance;
     router = fixture.debugElement.injector.get( Router);
   
   /* confirms the app component exists with a Jasmine expectation */
   it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    
  });


   it('should be created', () => {
       expect(component).toBeDefined();
    });
    
   });