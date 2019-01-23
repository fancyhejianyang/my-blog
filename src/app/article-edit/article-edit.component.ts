import { Component, OnInit } from '@angular/core';
import E from 'wangeditor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }
  editor;
  tags = [];
  selectedTage = [];
  allTags: Array<{ label: string, id: number, selected?: boolean }> = [
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
    arc_title: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    arc_orginal: new FormControl('0', [Validators.required]),
    tags: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  });
  _type: string;
  types = [
    {
      id: 0,
      value: '框架学习',
      url: 'frame'
    },
    {
      id: 1,
      value: 'Nodejs',
      url: 'nodejs'
    },
    {
      id: 2,
      value: '实用前端',
      url: 'practicial'
    },
    {
      id: 3,
      value: '生活随笔',
      url: 'other'
    }
  ];
  tagModal = false;
  ngOnInit() {
    this.editor = new E('.edit');
    this.editor.customConfig.onchange = html => {
      console.log(html);
      this.articleForm.patchValue({
        content: html
      });
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
    // this.editor.change();
    if (this.articleForm.valid) {
      const params = this.articleForm.value;
      // console.log(new Date());
      this.http.post('http://127.0.0.1:8081/blog',
        {
          headers: {
            header: 'Content-Type'
          },
          observe: 'body',
          params: {
            ...params
          },
          responseType: 'json',
          // withCredentials: true
        }).subscribe(data => {
          console.log(data);
        });
    }
  }
  optionChange(e) {
    this._type = this.types.filter(o => o.value === e.target.value)[0].url;
    console.log(this._type);
  }
  showTagsModal(e) {
    console.log(e);
    e.preventDefault();
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
    this.selectedTage = [];
    const tags = this.selectedTage;
    this.articleForm.patchValue({
      tags: tags
    });
    this.tagModal = false;
  }
  selectLabel(event, item) {
    if (this.selectedTage.indexOf(item.label) > -1) {
      item.selected = false;
      this.selectedTage = this.selectedTage.filter(o => o !== item.label);
    } else {
      // event.target.classList.add('selected');
      item.selected = true;
      this.selectedTage.push(item.label);
    }
    this.allTags.map(o => {
      if (o.id === item.id) {
        Object.assign(o, item);
      }
    });
  }
  cancelPublish() {
    this.router.navigateByUrl('view');
  }
}
