import { Component, OnInit } from '@angular/core';
import E from 'wangeditor';
@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  constructor() { }
  editor;
  ngOnInit() {
    this.editor = new E('.edit');
    this.editor.customConfig.onchange = function (html) {
      console.log(html);
    };
    this.editor.create();
    this.editor.$textContainerElem[0].style.height = '750px';
  }
  post() {
    this.editor.change();
    console.log(this.editor.txt.html());
  }
}
