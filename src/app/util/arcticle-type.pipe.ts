import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterType' })
export class ArticleType implements PipeTransform {
  transform(value: string): string {
    let result;
    switch (value) {
      case 'frame':
        result = '框架学习';
        break;
      case 'nodejs':
        result = 'Nodejs';
        break;
      case 'practicial':
        result = '实用前端';
        break;
      case 'other':
        result = '生活日常';
        break;
      case 'all':
        result = '首页';
        break;
      case 'edit':
        result = '文章编辑';
        break;
      default:
        break;
    }
    return result;
  }
}
