import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  isLoading = false;
  deviceInfo: any;
  ishidemobile: boolean;
  styleObject: any;

  constructor(private router: Router,private deviceService: DeviceDetectorService) {
      this.findDevice();
     }

    ngOnInit(): void {
    }

  onSubmit(form: NgForm) {
    console.log(form);
    this.router.navigate(['/login']);
    // this.authService.sendPasswordResetEmail(form.value.email);
    
  }

    //function to find device and hide the part of signup view for mobile
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
