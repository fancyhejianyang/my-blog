import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArticleListService {
  private arc_type = new Subject<string>();
  constructor(
    private http: HttpClient
  ) { }
  arc_type$ = this.arc_type.asObservable();
  arc_type_update(type: string) {
    this.arc_type.next(type);
  }
  getArticleList(type: string, pageIndex: string): Observable<any> {
    return this.http.get(`${environment.SERVER_URL}/getArcticlesByType`, {
      headers: {
        header: 'Content-Type'
      },
      observe: 'body',
      params: {
        'pageSize': '5',
        'pageIndex': pageIndex,
        'type': type
      },
      responseType: 'json'
    });
  }
}
