import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() arctype = new EventEmitter<boolean>();
  constructor(
    private router: Router
  ) { }
  types = [
    {
      type: 'all',
      txt: '回到首页'
    },
    {
      type: 'frame',
      txt: '框架学习'
    },
    {
      type: 'nodejs',
      txt: 'Nodejs'
    },
    {
      type: 'practicial',
      txt: '实用前端'
    },
    {
      type: 'other',
      txt: '生活感悟'
    }
  ];
  ngOnInit() {

  }
  toggleArticle(e, item) {
    // this.arctype.emit(item);
    // this.router.navigateByUrl('view');
  }

}
