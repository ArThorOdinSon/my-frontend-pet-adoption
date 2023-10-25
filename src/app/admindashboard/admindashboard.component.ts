import { Component, OnInit } from '@angular/core';
import { DogRecord } from '../model/dogrecord';
import { DogService } from '../service/dogservice';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  dogrecs: DogRecord[] = []

  constructor(private route : Router,private routes:ActivatedRoute,private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getDogrecord().subscribe((data: DogRecord[])=>{
      this.dogrecs = data;
      console.log(this.dogrecs);
    })  
  }

}
