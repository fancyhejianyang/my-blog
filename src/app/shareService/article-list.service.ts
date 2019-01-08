import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
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
  getArticleList(type: string): Observable<any> {
    let url;
    url = '/assets/all.json';
    switch (type) {
      case 'all':
        url = '/assets/all.json';
        break;
      case 'frame':
        url = '/assets/frame.json';
        break;
      case 'nodejs':
        url = '/assets/nodejs.json';
        break;
      case 'practicial':
        url = '/assets/practicial.json';
        break;
      case 'other':
        url = '/assets/other.json';
        break;
      default:
        url = '/assets/all.json';
        break;
    }
    return this.http.get(url);
  }
}
