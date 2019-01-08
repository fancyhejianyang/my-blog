import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { HeaderComponent } from '../header/header.component';
import { ViewRoutingModule } from './view-routing.module';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleComponent } from '../article/article.component';
// import { ArticleListModule } from '../article-list/article-list.module';
// import { ArticleListRoutingModule } from '../article-list/article-list-routing.module';
@NgModule({
  imports: [
    CommonModule, ViewRoutingModule
  ],
  declarations: [ViewComponent, HeaderComponent, ArticleListComponent, ArticleComponent]
})
export class ViewModule { }
