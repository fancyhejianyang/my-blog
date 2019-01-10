import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { HeaderComponent } from '../header/header.component';
import { ViewRoutingModule } from './view-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleComponent } from '../article/article.component';
// import { ArticleListModule } from '../article-list/article-list.module';
// import { ArticleListRoutingModule } from '../article-list/article-list-routing.module';
import { ArticleType } from '../util/arcticle-type.pipe';
import { ArticleEditComponent } from '../article-edit/article-edit.component';
@NgModule({
  imports: [
    CommonModule, ViewRoutingModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ViewComponent, HeaderComponent, ArticleListComponent, ArticleComponent, ArticleEditComponent, ArticleType]
})
export class ViewModule { }
