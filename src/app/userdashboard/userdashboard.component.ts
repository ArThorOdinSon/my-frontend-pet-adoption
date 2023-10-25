import { Component, OnInit } from '@angular/core';
import { DogRecord } from '../model/dogrecord';
import { DogService } from '../service/dogservice';
import { ActivatedRoute, Params } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  dogrecs: DogRecord[] = []

  constructor(private route : Router, private dogservice:DogService, private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.dogservice.getDogrecord().subscribe((data: DogRecord[])=>{
      this.dogrecs = data;
      console.log(this.dogrecs);
    })  
    
  }

}
