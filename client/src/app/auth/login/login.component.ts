import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
// import { UiService } from 'src/app/shared/ui.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  // private subLoading: Subscription;

  isLoading = false;
  deviceInfo: any;
  ishidemobile: boolean;
  styleObject: any;

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router) {
      this.findDevice();
     }

  ngOnInit(): void {
    // this.subLoading = this.uIservice.loadingStateChanged.subscribe(loading => {
    //   this.isLoading = loading;
    // });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.router.navigate(['/doc/doc-list']);
    // this.authService.loginUser({
    //  email: form.value.email,
    //  password: form.value.password 
    // });
  }

  ngOnDestroy(): void {
    // if(this.subLoading) {
    //   this.subLoading.unsubscribe();
    // }
  }

   //function to find device and hide the part of login view for mobile
   findDevice() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    if(isMobile === true){
      this.ishidemobile = this.ishidemobile;
      this.styleObject = {
        ['margin']: '1rem'
      };
  } else {
    this.ishidemobile = ! this.ishidemobile;
}
}
}
