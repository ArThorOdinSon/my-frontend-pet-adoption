import { Component, OnInit } from '@angular/core';
import { DogService } from '../service/dogservice';
import { DogRecord } from '../model/dogrecord';


@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit {
  dogrecord: DogRecord[] = []
  
  constructor(private dogService: DogService) { }

  ngOnInit(): void {
  }


}
