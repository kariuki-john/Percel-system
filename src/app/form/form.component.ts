import { Component, OnInit,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PercelService } from '../percel.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  constructor(private percels: PercelService){}
  ngOnInit() {
    // this.percels.Percels.push('JohnDoe','johndoe@travel.com','This is the first this.percels')
  }

 

  submitedForm(form:NgForm){
    console.log(form.value);
    
  }

}
