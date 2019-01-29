import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { FroalaEditorComponent } from 'ng2-froala-editor/ng2-froala-editor';
import { ArticleListService } from '../shareService/article-list.service';
// import E from 'wangeditor';
interface Article {
  arc_title: string;
  // summary: string;
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
    private articleListService: ArticleListService
  ) {
  }
  articles: Array<Article>;
  arc_type: string;
  option: {

  };
  ngOnInit() {
    this.activeRouter.queryParams.subscribe((params: Params) => {
      this.arc_type = params['type'] || 'all';
      this.initArcticleList(this.arc_type);
    });
  }
  initArcticleList(type: string) {
    this.articleListService.getArticleList(type).subscribe(res => {
      console.log(res);
      this.articles = res.data;
    });
  }

}
