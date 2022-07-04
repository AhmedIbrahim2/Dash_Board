import { Component, OnInit } from '@angular/core';
import { ServerserviceService } from '../services/serverservice.service';

import {map} from 'rxjs'
import { time } from 'console';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  a: any[] =[]
  constructor(private services :ServerserviceService) { }

  ngOnInit(): void {
        this.services.getAll()?.snapshotChanges().pipe(
      map(changes =>
       changes.map(c => 
         ({id :c.payload.doc.id , ...c.payload.doc.data() }))
       )
    ).subscribe(data =>{
      this.a =data;
       console.log(data);
    })
  }
   
  SW(){
    this.SNEisshown=false 
    this.mySentences[this.number] = this.mySentences[0]   
  }
  SNEisshown=true
  time =5000
  reload(){
    this.SNEisshown=true
    this.number=0;
  }
  ngAfterViewInit(){
  
    setTimeout( ()=>{
  this.time=5000
  this.number++
  if(this.number==3){
    this.number=0
  }if(this.a[0].sensor_status== true){
     this.time + 20000;
  }
    }, this.time)
    
  }

  
  mySentences:Array<string> = [
    "width: 50px; height: 50px; border-radius: 50%; background-color: red ; margin-left: 10px;margin-bottom: 20px;",
    "width: 50px; height: 50px; border-radius: 50%; background-color: yellow ; margin-left: 10px;margin-bottom: 20px;",
   "width: 50px; height: 50px; border-radius: 50%; background-color: green ; margin-left: 10px;margin-bottom: 20px;"
];
number=0;

get(){
  console.log(this.a[0].sensor_status)
}

}
