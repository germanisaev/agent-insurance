import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { SearchDataMock } from "../mock-data/search-data.mock";
import { Department, Employee } from "../models";
import { Observable, of } from "rxjs";
import { filter, map } from 'rxjs/operators';
import { environment } from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
    private readonly BASE_URL = environment.webApi;

  constructor(private readonly http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(`${this.BASE_URL}/employees`);
  }

}