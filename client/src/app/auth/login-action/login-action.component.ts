import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-action',
  templateUrl: './login-action.component.html',
  styleUrls: ['./login-action.component.css']
})
export class LoginActionComponent implements OnInit {


  ngUnsubscribe: Subject<any> = new Subject<any>();
  subActionCodeStatus : Subscription;
  //actions = UserManagementActions;

  // The user management actoin to be completed
  mode: string;
  // Just a code Firebase uses to prove that
  // this is a real password reset.
  actionCode: string;

  actionCodeChecked: boolean;

  isLoading = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private authService: AuthService
  ) { }

  ngOnInit() {

    // this.subActionCodeStatus = this.authService.oActionCodeStatus.subscribe(status => {
    //   this.actionCodeChecked = status;
    // });

    // this.activatedRoute.queryParams
    //   .pipe(takeUntil(this.ngUnsubscribe))
    //   .subscribe(params => {
    //     if (!params) this.router.navigate(['/home']);

    //     this.mode = params['mode'];
    //     this.actionCode = params['oobCode'];

    //     switch (params['mode']) {
    //       case "resetPassword": {
    //         // Verify the password reset code is valid.
    //         this.authService.verifyPasswordResetCode(this.actionCode);
    //       } break
    //       case "recoverEmail": {

    //       } break
    //       case "verifyEmail": {

    //       } break
    //       default: {
    //         console.log('query parameters are missing');
    //         this.router.navigate(['/login']);
    //       }
    //     }
    //   });
  }

  ngOnDestroy() {
    // End all subscriptions listening to ngUnsubscribe
    // to avoid memory leaks.
    this.ngUnsubscribe.next();
    // this.ngUnsubscribe.complete();
    // if (this.subActionCodeStatus) {
    //   this.subActionCodeStatus.unsubscribe();
    // }
  }

  /**
   * Attempt to confirm the password reset with firebase and
   * navigate user back to home.
   */
  onSubmit(form: NgForm) {
    // if (form.value.password1 != form.value.password2) {
    //   alert('New Password and Confirm Password do not match');
    //   return;
    // }

    // this.authService.confirmPasswordReset(form.value.password1, this.actionCode);
    
  }

}
