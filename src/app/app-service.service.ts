import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDto } from './DTO/UserDTO.component';
import { Category } from './model/category.component';
import { Item } from './model/item.component';
import { User } from './model/User.component';
import {ItemDTO} from './DTO/ItemDTO.component';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private itemsUrl = "http://localhost:8080/api/items";
  private categoriesUrl = "http://localhost:8080/api/categories";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public currentUser = new BehaviorSubject<User | null>(null);
  // cast = this.currentUser.asObservable();
  public loggedUser: User | null;

  constructor(private http: HttpClient) {
    this.loggedUser = null;
  }

  editUser(newUser: any) {
    this.currentUser.next(newUser);
  }

  loadData(): Observable<Item[]> { return this.http.get<Item[]>(`${this.itemsUrl}`) }

  filterData(nameCategory: String): Observable<Item[]> { return this.http.get<Item[]>(`${this.itemsUrl}/filterByCategory?nameCategory=${nameCategory}`) }
  filterDataByName(name: String): Observable<Item[]> { return this.http.get<Item[]>(`${this.itemsUrl}/filter?name=${name}`) }

  getAllCategory(): Observable<Category[]> { return this.http.get<Category[]>(`${this.categoriesUrl}`) }

  login(userDto: UserDto) {return this.http.post<any>(`http://localhost:8080/api/login`, userDto);}

  addItem(newItem: Item) {return this.http.post<any>(`http://localhost:8080/api/items`, newItem);}

  deleteItem(id: number | undefined) { return this.http.delete<any>(`http://localhost:8080/api/items/${id}`) }

  updateItem(id: number, newItem: ItemDTO): Observable<any> { return this.http.put(`http://localhost:8080/api/items/${id}` , newItem, this.httpOptions) }

}
