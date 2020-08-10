import { Component, AfterViewInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { LoginService } from 'app/core/login/login.service';

@Component({
  selector: 'jhi-login-modal',
  templateUrl: './login.component.html'
})
export class LoginModalComponent implements AfterViewInit {
  @ViewChild('id', { static: false })
  id?: ElementRef;

  authenticationError = false;

  loginForm = this.fb.group({
    id: ['']
    // password: [''],
    // rememberMe: [false]
  });

  constructor(
    private loginService: LoginService,
    private renderer: Renderer,
    private router: Router,
    // public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    if (this.id) {
      this.renderer.invokeElementMethod(this.id.nativeElement, 'focus', []);
    }
  }

  cancel(): void {
    this.authenticationError = false;
    this.loginForm.patchValue({
      id: '',
      password: ''
    });
    // this.activeModal.dismiss('cancel');
  }

  login(): void {
    this.loginService
      .login({
        id: this.loginForm.get('id')!.value
        // ,
        // password: this.loginForm.get('password')!.value,
        // rememberMe: this.loginForm.get('rememberMe')!.value
      })
      .subscribe(
        () => {
          this.authenticationError = false;
          // this.activeModal.close();
          if (
            this.router.url === '/account/register' ||
            this.router.url.startsWith('/account/activate') ||
            this.router.url.startsWith('/account/reset/')
          ) {
            this.router.navigate(['']);
          }
        },
        () => (this.authenticationError = true)
      );
  }

  register(): void {
    // this.activeModal.dismiss('to state register');
    this.router.navigate(['/account/register']);
  }

  requestResetPassword(): void {
    // this.activeModal.dismiss('to state requestReset');
    this.router.navigate(['/account/reset', 'request']);
  }
}
