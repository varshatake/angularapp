import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userpipe'
})
export class UserpipePipe implements PipeTransform {

  transform(value: any, postTerm:any): any {
    return value.filter(function(searchpost){
      return searchpost.title.toLowerCase().indexOf(postTerm.toLowerCase()) > -1
    })
  }

}
