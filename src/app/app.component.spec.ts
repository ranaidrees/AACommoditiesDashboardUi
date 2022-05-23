import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { AppComponent } from './app.component';
import { AuthenticationService } from './shared';
import { TokenStorage } from './shared/authentication/token-storage.service';

describe('AppComponent', () => {
    let authenticationService: AuthenticationService;
    beforeEach(async () => {
      //  const mockAuthenticationService = jasmine.createSpyObj(['isAuthorized']);

        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            providers: [
                AuthenticationService,
                TokenStorage
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();

        authenticationService = TestBed.inject(AuthenticationService);
    });

    it('should create the app', () => {

        spyOn(authenticationService, 'isAuthorized').and.returnValue(of(true).pipe(delay(1)));
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'AADashboard'`, () => {
        spyOn(authenticationService, 'isAuthorized').and.returnValue(of(true).pipe(delay(1)));
        const test = jasmine.createSpyObj(['login', 'logout']);

        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('AA Dashboard');
    });
});
