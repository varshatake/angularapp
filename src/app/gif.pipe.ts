import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gif'
})
export class GifPipe implements PipeTransform {

  transform(value: any, gifTerm: any): any {
    return value.filter(function(searchGiphy) {
      return searchGiphy.title.toLowerCase().indexOf(gifTerm.toLowerCase()) > -1
    });
  }

}
