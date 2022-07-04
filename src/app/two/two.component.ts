import { Component, OnInit } from '@angular/core';
import { ServerserviceService } from '../services/serverservice.service';
import {map} from 'rxjs'
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(private services :ServerserviceService) { }
  a: any[] =[]
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
  SWphoto = "assets/down.png" ;
  sho="style.visibility='hidden'"
  SW(){
    this.SNisshown=true 
    this.NSisshown=true
    this.WEisshown=false
    this.EWisshown=false
    this.mySentences[this.number]= this.mySentences[0]   
  }
  NW(){
    this.SNisshown=false
    this.NSisshown=false
    this.WEisshown=true
    this.EWisshown=true
    this.myS1entences[this.number]= this.myS1entences[2]  

  }SE(){
    this.SNisshown=false
    this.NSisshown=false
    this.WEisshown=true
    this.EWisshown=true  
    this.myS1entences[this.number]= this.myS1entences[2] 
  }EN(){
    this.SNisshown=true 
    this.NSisshown=true
    this.WEisshown=false
    this.EWisshown=false 
    this.mySentences[this.number]= this.mySentences[0]     
  }
  SNisshown=true
  NSisshown=true
  WEisshown=true
  EWisshown=true
   time =5000
  ngAfterViewInit(){
    this.time=5000
    setTimeout( ()=>{
  this.number++
  if(this.number==3){
    this.number=0
  }if(this.a[0].sensor_status== true){
    this.time + 20000;}
    }, this.time)
  }
  
  number =0;

  mySentences:Array<string> = [
    "width: 50px; height: 50px; border-radius: 50%; background-color: red ; margin-left: 170px;margin-bottom: 20px;",
    "width: 50px; height: 50px; border-radius: 50%; background-color: yellow ; margin-left: 170px;margin-bottom: 20px;",
   "width: 50px; height: 50px; border-radius: 50%; background-color: green ; margin-left: 170px;margin-bottom: 20px;"
];

myS1entences:Array<string> = [
  "width: 50px; height: 50px; border-radius: 50%; background-color: green ; margin-left: 170px;margin-bottom: 20px;",
  "width: 50px; height: 50px; border-radius: 50%; background-color: yellow ; margin-left: 170px;margin-bottom: 20px;",
 "width: 50px; height: 50px; border-radius: 50%; background-color: red ; margin-left: 170px;margin-bottom: 20px;"
];


}
