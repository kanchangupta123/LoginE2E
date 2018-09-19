import { TestBed, async } from '@angular/core/testing';
import { Router,NavigationStart } from '@angular/router'; 
import { AlertService } from './alert.service';
import { Observable } from 'rxjs';

let alertService;
class MockRouter {
    // Router
    public ne = new NavigationStart(0, 'http://localhost:4200/login');
    public events = new Observable(observer => {
    observer.next(this.ne);
    observer.complete();
  }); }

xdescribe('AlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({    
      providers: [ {provide:AlertService},
        { provide: Router, useClass: MockRouter }
    ]
    });
  });
  //router = fixture.debugElement.injector.get( Router);
  it ('should receive event', async (() => {
    alertService = jasmine.createSpyObj('AlertService', ['getMessage']);
   
    alertService.success('A',0);
    alertService.getMessage();
    
}));
});