import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }
  getArticle(id: number): Observable<any> {
    return this.http.get(`${environment.SERVER_URL}/getArticle`, {
      headers: {
        header: 'Content-Type'
      },
      observe: 'body',
      params: {
        'arc_id': String(id)
      },
      responseType: 'json'
    });
  }
}
