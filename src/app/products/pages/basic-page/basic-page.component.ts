import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameUpper: string = 'marcos';
  public nameLower: string = 'MARCOS';
  public nameTitle: string = 'MaRcOs eStEbAn';

  public customDate =  new Date();

}
