import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleListService } from '../shareService/article-list.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  location = '首页';
  arc_type: string;
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    // private articleService: ArticleListService
  ) {
    this.arc_type = this.activeRouter.snapshot.params['type'] || 'all';
    console.log(this.arc_type);
  }

  ngOnInit() {
  }
  onArcType(event) {
    console.log(event);
  }

}
