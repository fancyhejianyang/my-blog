import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ArticleListService } from '../shareService/article-list.service';
interface Article {
  title: string;
  summary: string;
  postDate: string | Date;
  views: number | string;
  type: string;
  arc_id: number | string;
}
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute,
    private articleService: ArticleListService
  ) {
  }
  articles: Array<Article>;
  arc_type: string;
  ngOnInit() {
    this.activeRouter.queryParams.subscribe((params: Params) => {
      this.arc_type = params['type'] || 'all';
      this.initArcticleList(this.arc_type);
    });
  }
  initArcticleList(type: string) {
    this.articleService.getArticleList(type).subscribe(res => {
      this.articles = res.result.data;
    });
  }

}
