import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {
  url:string = "https://api.happi.dev/v1/generate-password"
  key:string = "?apikey=9521e215U92Y1HuZTuRNvb8echm9kPliqYz0K8CgUXjLJBs9wNqOQnw9"

  constructor(private http:HttpClient) { }

  //get password with given options
  getPassword(limit:string,lenght:string,num:string,upper:string,symbols:string):Observable<string>{
    return this.http.get<string>(`${this.url}${key}&limit=${limit}&length=${lenght}&num=${num}&upper=${upper}&symbols=${symbols}`);
  }
  
}
