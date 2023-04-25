import { Component } from '@angular/core';
import { WebApiService } from 'src/app/service/web-api.service';
import {Router} from '@angular/router';
import{FormControl,FormGroup,Validators}from'@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
form !:FormGroup
constructor(
  private userApiService:WebApiService,
  private router: Router
  
){}
ngOnInit(): void {

  this.form=new FormGroup({
    title: new FormControl('',[Validators.required]),
    author: new FormControl('',[Validators.required]),
  genere: new FormControl('',[Validators.required]),
    publication_year: new FormControl('',[Validators.required]),
 


  })
}

get fetch(){
  return this.form.controls;
}
submit(){
  console.log(this.form.value)
  this.userApiService.create(this.form.value).subscribe((res)=>{
  console.log("User created")
  console.log(res)
})
this.form.reset()
}
}