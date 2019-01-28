import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { HeaderComponent } from '../header/header.component';
import { ViewRoutingModule } from './view-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleComponent } from '../article/article.component';
import { ArticleType } from '../util/arcticle-type.pipe';
import { ArticleEditComponent } from '../article-edit/article-edit.component';
import { FroalaEditorModule } from 'ng2-froala-editor/ng2-froala-editor';

@NgModule({
  imports: [
    CommonModule, ViewRoutingModule, FormsModule, ReactiveFormsModule, FroalaEditorModule
  ],
  declarations: [ViewComponent, HeaderComponent, ArticleListComponent, ArticleComponent, ArticleEditComponent, ArticleType]
})
export class ViewModule { }
