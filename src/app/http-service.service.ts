import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { appKeys } from '../environments/environment-keys';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  apiURL: string = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  getSubjects(){
    let url = `${this.apiURL}/subjects`;
    const httpOptions = {
    headers: new HttpHeaders(appKeys),  
    params: new HttpParams().set("section", "sems").set("subject","cse4wdc").set("subfolder","true")
  };
  let data = null;

  /**  I have used subscribe here but you can return an Observable or a Promise and subscribe in your component
  Just add return type for your method as Observable<any> or create a class with attributes fname, fpath and mimetype
  getSubjects(): Observable<any> { ..... return this.http.post(url, data ,httpOptions)}
  */

  return this.http.post(url, data ,httpOptions).subscribe(res => console.log(res['result']));
}

}
