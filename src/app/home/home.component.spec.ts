import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../_services';
import { of } from 'rxjs';
import { USERS } from '../mock-users';
import { User } from '../_models';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
let userServiceStub: Partial<UserService>;
let component: HomeComponent;
let fixture: ComponentFixture<HomeComponent>;
let userService;
let userServicespy;
let mockCurrentUser;

describe('HomeComponent', () => {
    
    beforeEach(async(() => {
        userService = jasmine.createSpyObj('UserService', ['getAll']);
    // Make the spy return a synchronous Observable with the test data
        userServicespy = userService.getAll.and.returnValue( of(USERS) );
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [
                RouterTestingModule.withRoutes([])
              ],
            providers: [{provide: UserService, useValue: userService }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
       // fixture.detectChanges();
    });

    afterEach(() => { 
        localStorage.removeItem('currentUser');
      });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return false when the user is not in local storage', () => {
        mockCurrentUser= JSON.parse(localStorage.getItem('currentUser'));
        expect(mockCurrentUser).toBeFalsy();
    });

    it('should return true when the user is in local storage', () => {
      let user: User[] = [{  id: 14,
             username: 'Bombasto Nice', 
             password:'123455', 
             firstName:'Bombasto', 
             lastName:'Nice'}];
        localStorage.setItem('currentUser', JSON.stringify(user)); 
        mockCurrentUser= JSON.parse(localStorage.getItem('currentUser'));
        expect(mockCurrentUser).toBeTruthy(); 
    });

    it('should call UserService', async(() => {
        fixture.detectChanges();    
        expect(userServicespy).toHaveBeenCalled();
        expect(userServicespy.calls.any()).toBe(true);
    }));

    it('should display "All registered users:" as headline', () => {
        expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('All registered users:');
      });
    
    it('should NOT have users before ngOnInit', () => {
        expect(component.users.length).toBe(0,'should not have users before ngOnInit');
      });   

    it('should HAVE heroes', () => {
        fixture.detectChanges(); 
        expect(component.users.length).toBeGreaterThan(0,'should have heroes after service promise resolves');
    });
        
    it('should display users', async(() => {
        fixture.detectChanges(); 
        expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(4);
    }));
});