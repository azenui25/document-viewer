import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AuthService } from '../auth.service';
// import { UiService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogTermsConditionsComponent } from '../dialog-terms-conditions/dialog-terms-conditions.component';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  private subLoading: Subscription;

  isLoading = false;
  agree = false;
  deviceInfo: any;
  ishidemobile: boolean;
  styleObject: any;

  constructor(
    // private authService: AuthService,
    // private uIservice: UiService,
    private dialog: MatDialog,
    private deviceService: DeviceDetectorService) {
      this.findDevice();
     }

  ngOnInit(): void {
    // this.subLoading = this.uIservice.loadingStateChanged.subscribe(loading => {
    //   this.isLoading = loading;
    // });
  }

  onSignup(form: NgForm) {
    console.log(form);
    
    // this.authService.registerUser({ 
    //   firstName: form.value.firstName,
    //   lastName: form.value.lastName,
    //   phoneNumber: form.value.phoneNumber,
    //   authData: { email: form.value.email, password: form.value.password }
    //  })
  }

  openDialog() {

    console.log("Dialog terms & conditions");

    const dialogRef = this.dialog.open(DialogTermsConditionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.agree = result;
       // console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy(): void {
    if(this.subLoading) {
      this.subLoading.unsubscribe();
    }
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