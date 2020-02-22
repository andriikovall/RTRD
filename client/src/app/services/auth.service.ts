import { Injectable } from '@angular/core';
import { User, Message, Token } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(login: string, password: string): Observable<User> {
    return this.http.post<User>('/api/auth/register', { login, password });
  }

  login(user: User): Observable<Token> {
    return this.http.post<Token>('/api/auth/login', user)
      .pipe(
        tap(
          ({ token }) => localStorage.setItem('token', token)
        )
      )
  }

  getById(id: String): Observable<User> {
    return this.http.get<User>(`api/user/${id}`)
  }

  getAll(user: User): Observable<User[]> {
    return this.http.get<User[]>('/api/user')
  }

  delete(user: User): Observable<Message> {
    return this.http.delete<Message>(`/api/user/${user._id}`)
  }

  logout() {
    localStorage.clear()
  }

  get isAuthenticated() {

  }

}
