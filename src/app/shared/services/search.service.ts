import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SearchDataMock } from "../mock-data/search-data.mock";
import { SearchResponse } from "../models/search.model";
import { Observable, of } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
    }),
};

@Injectable({
    providedIn: "root",
})
export class SearchService {

    public searchResults: SearchResponse[] = [];
  private readonly mockSearchData: SearchDataMock;

  constructor(private readonly http: HttpClient) {
    this.mockSearchData = new SearchDataMock();
  }

  public getSearch(id: string): Observable<SearchResponse> {
    let searchResponse: SearchResponse = new SearchResponse();
    this.mockSearchData.values.map((item, index) => {
      if (item.id === id) {
        searchResponse = this.mockSearchData.values[index];
      }
    });
    return searchResponse ? of(searchResponse) : of(null);
  }

  public getAllSearch(): Observable<SearchResponse[]> {
    let searchResponse: SearchResponse[] = [];
    searchResponse = this.mockSearchData.values;
    return of(searchResponse);
  }
}
