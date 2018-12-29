import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {PRoperty} from './models/property.component';
import {DEtails} from './models/details.component'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  urlHomes = 'http://localhost:3000/homes'
  urlDetails = 'http://localhost:3000/details'
  constructor(private http: HttpClient) { }


  getPropertys():Observable<[PRoperty]>{
    return this.http.get<[PRoperty]>(this.urlHomes);

  }
  AddItems(obj:DEtails):Observable<DEtails>{
    return this.http.post<DEtails>(this.urlDetails,obj);
  }
}
