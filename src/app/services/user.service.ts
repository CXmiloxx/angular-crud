import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${API_URL}/${id}`);
  }

  createUser(data: Partial<User>): Observable<User> {
    return this.http.post<User>(API_URL, data);
  }

  updateUser(id: number, data: Partial<User>): Observable<User> {
    return this.http.put<User>(`${API_URL}/${id}`, data);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}
