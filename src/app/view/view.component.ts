import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, Params } from '@angular/router';
import { ArticleListService } from '../shareService/article-list.service';
import { switchMap } from 'rxjs/operators';
import { ArticleType } from '../util/arcticle-type.pipe';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  arc_type: string;
  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private articleService: ArticleListService
  ) {
    this.activeRouter.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.arc_type = params['type'] ? params['type'] : 'all';
    });
    this.articleService.arc_type$.subscribe(
      type => {
        this.arc_type = type;
        console.log(type);
      }
    );
  }

  ngOnInit() {
  }

}
