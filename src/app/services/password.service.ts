import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneratedPassword } from '../models/GeneratedPassword'

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  url:string = "https://api.happi.dev/v1/generate-password"
  key:string = "?apikey=9521e215U92Y1HuZTuRNvb8echm9kPliqYz0K8CgUXjLJBs9wNqOQnw9"

  constructor(private http:HttpClient) { }

  //get password with given options
  getPassword(lenght:string,num:string,upper:string,symbols:string):Observable<GeneratedPassword>{
    return this.http.get<GeneratedPassword>(`${this.url}${this.key}&limit=1&length=${lenght}&num=${num}&upper=${upper}&symbols=${symbols}`);
  }
  
}
