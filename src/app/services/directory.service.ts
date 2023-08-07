import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  private apiUrl = 'http://localhost:3001/api/get-directory-listing';

  constructor(private http: HttpClient) {}

  getDirectoryListings(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
