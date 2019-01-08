import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, Params } from '@angular/router';
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
    private activeRouter: ActivatedRoute,
    private router: Router,
    private articleService: ArticleListService
  ) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {

    //   }
    // });
    this.activeRouter.queryParams.subscribe((params: Params) => {
      this.arc_type = params['type'];
    });
    this.articleService.arc_type$.subscribe(
      type => {
        this.arc_type = type;
      }
    );
  }

  ngOnInit() {
  }
  onArcType(event) {
    // console.log(event);
    // this.arc_type = event.type;
    this.articleService.arc_type_update(this.arc_type);
  }

}
