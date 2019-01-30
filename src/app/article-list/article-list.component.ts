import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { FroalaEditorComponent } from 'ng2-froala-editor/ng2-froala-editor';
import { ArticleListService } from '../shareService/article-list.service';
// import E from 'wangeditor';
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
    private articleListService: ArticleListService
  ) {
  }
  articles: Array<Article> = [];
  arc_type: string;
  option: {

  };
  pageIndex = 1;
  autoHeight = '';
  ngOnInit() {
    this.activeRouter.queryParams.subscribe((params: Params) => {
      this.arc_type = params['type'] || 'all';
      this.initArcticleList(this.arc_type, this.pageIndex);
    });
  }
  initArcticleList(type: string, pageIndex: number) {
    this.articleListService.getArticleList(type, String(pageIndex)).subscribe(res => {
      console.log(res);
      if (res.code === '1' && res.data.length > 1) {
        this.articles = res.data;
        this.autoHeight = res.data.length > 5 ? 150 * res.data.length + 'px' : '750px';
      } else {
        console.log('无数据！');
        this.articles = [];
      }
    });
  }
  prePage() {
    if (this.pageIndex - 1 > 0) {
      this.initArcticleList(this.arc_type, this.pageIndex - 1);
    } else {
      alert('已经是第一页了！');
    }
  }
  nextPage() {
    this.initArcticleList(this.arc_type, this.pageIndex + 1);
  }

}
