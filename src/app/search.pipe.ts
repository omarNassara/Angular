import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: false
})
export class SearchPipe implements PipeTransform {

  transform(movies:any[] , term:string):any[]  {
    return movies.filter((movies)=> movies.title.includes(term));
  }

}
