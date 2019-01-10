import { Component, OnInit } from '@angular/core';
import E from 'wangeditor';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  constructor() { }
  editor;
  tags = [];
  allTags = [
    'HTML', 'CSS', 'Javascript', 'Angular',
    'React', 'Vue', '移动端兼容', 'Jquery',
    'ES系列', 'Typescript', 'webpack', 'gulp',
    'Nodejs'
  ];
  articleForm = new FormGroup({
    arc_title: new FormControl(''),
    type: new FormControl(''),
    arc_orginal: new FormControl(''),
    tags: new FormControl(' ')
  });
  types = [
    {
      id: 0,
      value: '框架学习'
    },
    {
      id: 1,
      value: 'Nodejs'
    },
    {
      id: 2,
      value: '实用前端'
    },
    {
      id: 3,
      value: '生活感悟'
    }
  ];
  tagModal = false;
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
  optionChange(e) {
    console.log(this.articleForm);
  }
  showTagsModal() {
    this.tagModal = true;
  }
  selectLabel(item) {
    console.log(item);
    this.tagModal = false;
    this.tags.push(item);
    const tags = this.tags.join(' ');
    this.articleForm.patchValue({
      tags: tags
    });
    console.log(this.articleForm);
  }
}
