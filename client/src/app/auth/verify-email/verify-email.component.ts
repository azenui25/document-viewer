import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  deviceInfo: any;
  ishidemobile: boolean;
  styleObject: any;
  constructor(private deviceService: DeviceDetectorService) {
    this.findDevice();
   }


  ngOnInit(): void {
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
