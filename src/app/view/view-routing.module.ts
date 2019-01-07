import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';
import { ArticleComponent } from '../article/article.component';
import { ArticleListComponent } from '../article-list/article-list.component';

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
        component: ArticleListComponent
      },
      {
        path: 'view/article',
        component: ArticleComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(viewRoutes)
  ],
  entryComponents: [ViewComponent, ArticleComponent],
  exports: [RouterModule],
})
export class ViewRoutingModule { }
