import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneratedPassword } from '../models/GeneratedPassword';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  url: string = 'https://api.happi.dev/v1/generate-password';
  key: string =
    '?apikey=9521e215U92Y1HuZTuRNvb8echm9kPliqYz0K8CgUXjLJBs9wNqOQnw9';

  constructor(private http: HttpClient) {}

  //get password with given options
  getPassword(
    length: string,
    num: Boolean,
    upper: Boolean,
    symbols: Boolean
  ): Observable<string[]> {
    const params = new HttpParams()
      .set('limit', '1')
      .set('length', length)
      .set('num', num ? '1' : '0')
      .set('upper', upper ? '1' : '0')
      .set('symbols', symbols ? '1' : '0');

    return this.http
      .get<GeneratedPassword>(`${this.url}${this.key}`, { params })
      .pipe(map((data: GeneratedPassword) => data.passwords));
  }
}
