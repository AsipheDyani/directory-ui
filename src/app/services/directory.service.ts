import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  private apiUrl = `${environment.directoryApiUrl}/get-directory-listing`;

  constructor(private http: HttpClient) {}

  getDirectoryListings(path?: string): Observable<string[]> {
    const url = path
      ? `${this.apiUrl}/${encodeURIComponent(path)}`
      : this.apiUrl;
    return this.http.get<string[]>(url);
  }
}
