import { Component, OnInit } from '@angular/core';
// import E from 'wangeditor';
import { FroalaEditorComponent } from 'ng2-froala-editor/ng2-froala-editor';
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
    type: new FormControl('frame', [Validators.required]),
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
  text = '<div>现在您可以编辑了...</div>';
  editor: any;

  froalaOptions: any = {
    shortcutsEnabled: [
      'show', 'bold', 'italic', 'underline', 'strikeThrough', 'indent', 'outdent', 'undo', 'redo', 'insertImage',
      'createLink', 'html'],
    height: 300
  };
  tagModal = false;
  ngOnInit() {
  }
  post() {
    if (this.articleForm.valid) {
      const params = this.articleForm.value;
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
  onFroalaModelChanged(event: any) {
    setTimeout(() => {
      this.text = event;
    });
  }

  onEditorInitialized(event?: any) {
    this.editor = FroalaEditorComponent.getFroalaInstance();
    this.editor.on('froalaEditor.focus', (e, editor) => {
      // console.log('editor is focused');
    });
    this.editor.on('froalaEditor.blur', (e, editor) => {
      console.log('editor is blur');
      console.log(e.target.value);
      this.articleForm.patchValue({
        'content': e.target.value
      });
    });
  }
  optionChange(e) {
    this._type = this.types.filter(o => o.value === e.target.value)[0].url;
    this.articleForm.patchValue({
      type: this._type
    });
  }
  showTagsModal(e) {
    e.preventDefault();
    this.tagModal = !this.tagModal;
    if (this.tagModal) {
      // 若手动删除了上次选中的tag 则需要更新面板 (挑出selected标记的那些对比)
      this.allTagsUpdate(this.articleForm.value.tags);
      // console.log(this.articleForm.value);
      // console.log(this.selectedTage);
    }
  }
  allTagsUpdate(tags) {
    if (tags) {
      this.allTags.map((item, index) => {
        if (tags.indexOf(item.label) > -1) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
    }
  }
  addItem() {
    // 获取input框内内容
    console.log(this.articleForm);
    const tags = this.selectedTage;
    this.articleForm.patchValue({
      tags: tags
    });
    this.tagModal = false;
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
    console.log(this.articleForm.value.tags);
    if (this.articleForm.value.tags !== '') {
      console.log(this.articleForm.value.tags);
      this.selectedTage = this.articleForm.value.tags;
    }
    console.log(this.selectedTage);
    if (this.selectedTage.indexOf(item.label) > -1) {
      item.selected = false;
      this.selectedTage = this.selectedTage.filter(o => o !== item.label);
    } else {
      // event.target.classList.add('selected');
      console.log(this.selectedTage);
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
