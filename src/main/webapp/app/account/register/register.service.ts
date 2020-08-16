import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { IUser } from 'app/core/user/user.model';
import { map, flatMap } from 'rxjs/operators';
import { AuthServerProvider, JwtToken } from '../../core/auth/auth-jwt.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private http: HttpClient, private authServerProvider: AuthServerProvider, private accountService: AccountService) {}

  save(account: IUser): Observable<Account | null> {
    return this.http
      .post<JwtToken>(SERVER_API_URL + 'api/register', account)
      .pipe(map(response => this.authServerProvider.authenticateSuccess(response, true)))
      .pipe(flatMap(() => this.accountService.identity(true)));
  }
}
