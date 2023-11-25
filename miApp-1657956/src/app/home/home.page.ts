import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageURL: string = ''
  imageSource: any
 
  constructor(
 
    public route: Router,
    public domSanitizer: DomSanitizer,
    
  ) {
   
  }


  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      saveToGallery: true
    });
   this.imageSource=image.dataUrl;
  }
  
  getPhoto() {
    return this.imageSource
  }

}
