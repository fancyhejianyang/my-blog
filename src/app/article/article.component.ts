import { Component, OnInit } from '@angular/core';
const Showdown = require('showdown');
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  constructor() { }
  arcticle;
  converter = new Showdown.Converter();
  ngOnInit() {
    this.arcticle = {
      arc_title: '如何解决IOS下软键盘收起后页面空白等异常问题',
      arc_time: '2019-01-01 13:00:00',
      arc_writer: '何建洋',
      arc_read: 100,
      arc_orginal: true,
      arc_content: '# hello, markdown!'
    };
    document.getElementsByClassName('arc_main')[0].innerHTML = this.converter.makeHtml(this.arcticle.arc_content);
  }

}
