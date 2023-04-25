
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { WebApiService } from 'src/app/service/web-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id !: number
  user !: User
  form !: FormGroup

  constructor(
    private bookapi:WebApiService,
    private router:Router
    
     ) {}

     ngOnInit(): void {
      this.form = new FormGroup({
        title: new FormControl('',[Validators.required]),
        author: new FormControl('',[Validators.required]),
      genere: new FormControl('',[Validators.required]),
        publication_year: new FormControl('',[Validators.required])
      })

 

     }

     get fetch() {
      return this.form.controls;
     }


     submit(){
      console.log(this.form.value)
      this.bookapi.update(this.id, this.form.value).subscribe((res)=>{
        console.log("updated")
        console.log(res)
      })
      this.form.reset()
     }
}
