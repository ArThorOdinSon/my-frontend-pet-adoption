import { Observable } from "rxjs";
import { DogRecord } from "../model/dogrecord";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class DogService {
    dogrecordurl: string

  constructor(private http: HttpClient) {

    this.dogrecordurl = 'http://localhost:18080/api';

  }

  public getDogrecord(): Observable<DogRecord[]> {
    return this.http.get<DogRecord[]>(this.dogrecordurl + '/dogrecs/');
  }

  public getADogrecord(id: number): Observable<DogRecord> {
    return this.http.get<DogRecord>(this.dogrecordurl + '/show-dogrecord/' + id.toString());
  }

  public addDogrecord(dogrecord: DogRecord): Observable<DogRecord> {
    return this.http.post<DogRecord>(this.dogrecordurl + '/add-dogrecord/', dogrecord);
  }

  public updateDogrecord(id: number): Observable<DogRecord> {
    return this.http.put<DogRecord>(this.dogrecordurl + '/update-dogrecord/', DogRecord);
  }


}   