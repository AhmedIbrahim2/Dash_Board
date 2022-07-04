import { Component, OnInit } from '@angular/core';
import { ServerserviceService } from '../services/serverservice.service';

import {map} from 'rxjs'
@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {
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

}
