import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneratedPassword } from '../../models/GeneratedPassword';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private readonly url: string = 'https://api.happi.dev/v1/generate-password';
  private readonly key: string =
    '?apikey=9521e215U92Y1HuZTuRNvb8echm9kPliqYz0K8CgUXjLJBs9wNqOQnw9';

  constructor(private http: HttpClient) {}

  //get password with given options
  getPassword(
    limit: number,
    length: number,
    hasNumbers: boolean,
    hasUpperCase: boolean,
    hasSymbols: boolean
  ): Observable<string[]> {
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('length', length.toString())
      .set('num', hasNumbers ? '1' : '0')
      .set('upper', hasUpperCase ? '1' : '0')
      .set('symbols', hasSymbols ? '1' : '0');

    return this.http
      .get<GeneratedPassword>(`${this.url}${this.key}`, { params })
      .pipe(map((data: GeneratedPassword) => data.passwords));
  }
}
