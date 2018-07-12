import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../model/Client';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Client[], query: string): Client[] {
    if (!items) { return []; }
    if (!query) { return items; }
    query = query.toLowerCase();
    return items.filter(item => {
      return Object.values(item)
        .map(v => Object.values(v))
        .reduce((a, b) => a.concat(b))
        .some((i: string) => i.toLowerCase().includes(query));
    });
  }

}
