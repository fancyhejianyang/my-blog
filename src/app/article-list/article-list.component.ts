import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ArticleListService } from '../shareService/article-list.service';
import E from 'wangeditor';
interface Article {
  arc_title: string;
  summary: string;
  content: string;
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
      console.log(res);
      this.articles = res.data;
    });
  }

}
