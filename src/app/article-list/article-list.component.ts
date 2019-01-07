import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {
  @Input() articles;
  constructor() { }

  ngOnInit() {
    this.articles = [
      {
        title: '如何解决IOS下软键盘收起后页面空白等异常问题',
        summary: 'HTML5 输入框标签在安卓端获得焦点，软键盘自动弹出，页面不会自觉往上弹出；IOS恰恰相反。。。。。',
        postDate: '2019-01-04',
        views: 5
      }
    ];
  }

}
