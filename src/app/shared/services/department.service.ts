import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { Department } from "../models";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class DepartmentService {
  private readonly BASE_URL = environment.webApi;

  constructor(private readonly http: HttpClient) {
  }

  public getSearch(id: string): Observable<Department> {
    return this.http.get<Department>(`${this.BASE_URL}/departments/${id}`);
  }

  public getAllSearch(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.BASE_URL}/departments`);
  }
}