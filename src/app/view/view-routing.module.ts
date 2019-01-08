import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';
import { ArticleComponent } from '../article/article.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleEditComponent } from '../article-edit/article-edit.component';

const viewRoutes: Routes = [
  {
    path: '', component: ViewComponent, children: [
      {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
      },
      {
        path: 'view',
        component: ArticleListComponent,
      },
      {
        path: 'view/article',
        component: ArticleComponent
      },
      {
        path: 'edit',
        component: ArticleEditComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(viewRoutes)
  ],
  entryComponents: [ViewComponent, ArticleListComponent],
  exports: [RouterModule],
})
export class ViewRoutingModule { }
