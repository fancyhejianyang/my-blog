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
  selectedTage = [];
  allTags = [
    { label: 'HTML', id: 0 },
    { label: 'CSS', id: 1 },
    { label: 'Javascript', id: 2 },
    { label: 'Angular', id: 3 },
    { label: 'React', id: 4 },
    { label: '移动端兼容', id: 5 },
    { label: 'Jquery', id: 6 },
    { label: 'ES系列', id: 7 },
    { label: 'Typescript', id: 8 },
    { label: 'webpack', id: 9 },
    { label: 'gulp', id: 10 },
    { label: 'Nodejs', id: 11 }
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
    this.editor.customConfig.onchange = html => {
      console.log(html);
    };
    this.editor.customConfig.onblur = html => {
      // 此处是否需要添加编辑区失去焦点关闭 tagModal
    };
    this.editor.customConfig.onfocus = html => {
      this.tagModal = false;
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
    console.log(this.tagModal);
    this.tagModal = true;
  }
  addItem() {
    const tags = this.selectedTage;
    this.articleForm.patchValue({
      tags: tags
    });
    this.tagModal = false;
    console.log(this.selectedTage);
  }
  cancel() {
    // this.selectedTage = [];
    // const tags = this.selectedTage;
    // this.articleForm.patchValue({
    //   tags: tags
    // });
    this.tagModal = false;
  }
  selectLabel(event, item) {
    this.allTags.filter(o=>{});
    // if (this.selectedTage.indexOf(item) > -1) {
    //   event.target.classList.remove('selected');
    //   this.selectedTage = this.selectedTage.filter(o => o !== item);
    // } else {
    //   // event.target.classList.add('selected');
    //   item.selected = true;
    //   this.selectedTage.push(item);
    // }
  }
}
