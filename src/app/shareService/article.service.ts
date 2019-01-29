import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }
  getArticle(id: number): Observable<any> {

    return this.http.get('http://127.0.0.1:8081/getArticle', {
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
