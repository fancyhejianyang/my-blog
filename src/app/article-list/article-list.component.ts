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
  articles: Array<Article> = [
    {
      title: '如何解决IOS下软键盘收起后页面空白等异常问题',
      summary: 'HTML5 输入框标签在安卓端获得焦点，软键盘自动弹出，页面不会自觉往上弹出；IOS恰恰相反。。。。。',
      postDate: '2019-01-04',
      views: 5,
      type: 'practicial',
      arc_id: 8
    },
    {
      title: '如何解决IOS下软键盘收起后页面空白等异常问题',
      summary: 'HTML5 输入框标签在安卓端获得焦点，软键盘自动弹出，页面不会自觉往上弹出；IOS恰恰相反。。。。。',
      postDate: '2019-01-04',
      views: 5,
      type: 'practicial',
      arc_id: 8
    }
  ];
  arc_type: string;
  ngOnInit() {
    this.activeRouter.queryParams.subscribe((params: Params) => {
      this.arc_type = params['type'];
      console.log(this.arc_type);
    });
  }

}
