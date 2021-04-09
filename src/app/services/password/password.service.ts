import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import {
  map,
  catchError,
  retryWhen,
  scan,
  delayWhen,
  tap,
} from 'rxjs/operators';
import { GeneratedPassword } from '../../models/GeneratedPassword';
import { GeneratedPasswordError } from '../../models/GeneratedPasswordError';
import { PasswordState, FetchPasswordData } from '../../models/PasswordState';

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
  ): Observable<PasswordState> {
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('length', length.toString())
      .set('num', hasNumbers ? '1' : '0')
      .set('upper', hasUpperCase ? '1' : '0')
      .set('symbols', hasSymbols ? '1' : '0');

    return this.http
      .get<GeneratedPassword>(`${this.url}${this.key}`, { params })
      .pipe(
        map((data: GeneratedPassword) => {
          return {
            passwords: data.passwords,
            state: FetchPasswordData.Success,
          };
        }),
        retryWhen((error) =>
          error.pipe(
            tap((error) => console.log(`Http Error ${error.status} occured.`)),
            scan((acc, error) => {
              if (error.status >= 500)
                throw new GeneratedPasswordError('Server side Error');
              if (error.status === 403)
                throw new GeneratedPasswordError('Access Forbiden');
              if (acc > 3)
                throw new GeneratedPasswordError(
                  'Trouble joining password server'
                );
              console.log('Retry attempt ' + acc);
              return acc + 1;
            }, 1),
            delayWhen((val) => timer(val * 2000))
          )
        )
      );
  }
}
