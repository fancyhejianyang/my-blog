import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterType' })
export class ArticleType implements PipeTransform {
  transform(value: string): string {
    let result;
    console.log(value);
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
        result = '其它';
        break;
      default:
        break;
    }
    return result;
  }
}
