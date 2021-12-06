import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Department, Employee, Task } from "../models";
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
export class TaskService {
    private readonly BASE_URL = environment.webApi;

  constructor(private readonly http: HttpClient) {}

  getTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(`${this.BASE_URL}/tasks`);
  }

  getTask(id: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.BASE_URL}/tasks/${id}`);
}

}