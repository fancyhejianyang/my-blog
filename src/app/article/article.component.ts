import { Component, OnInit } from '@angular/core';
// const Showdown = require('showdown');
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import Showdown from 'showdown';
import { ArticleService } from '../shareService/article.service';
interface Article {
  arc_title: string;
  // summary: string;
  content: string;
  arc_orginal: string;
  postDate: string | Date;
  views: number | string;
  type: string;
  arc_writer?: string;
  arc_id?: number | string;
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) { }
  article = {
    type: '',
    arc_title: '',
    postDate: '',
    arc_writer: '',
    views: 0,
    arc_orginal: '0',
    content: ''
  };
  paramErr = false;
  converter = new Showdown.Converter();
  ngOnInit() {
    this.activeRouter.queryParams.subscribe((params: Params) => {
      this.initArticle(params['arc_id']);
    });
  }
  initArticle(arc_id) {
    this.articleService.getArticle(arc_id).subscribe(res => {
      console.log(res);
      this.article = res.data[0];
    });
  }
  backTohome() {
    this.router.navigateByUrl('/view');
  }
  refresh(){
    window.location.reload();
  }

}
