
import { Component } from '@angular/core';
import { Percels } from '../Interface/interface';
import { PercelService } from '../percel.service';

@Component({
  selector: 'app-diplay-percel',
  templateUrl: './diplay-percel.component.html',
  styleUrls: ['./diplay-percel.component.css']
})
export class DiplayPercelComponent{
 
  percels:Percels[]=[];
  constructor( private service:PercelService){
    this.percels = this.service.Percels
  }

 
}
