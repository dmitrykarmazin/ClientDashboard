import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../model/Client';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Client[], query: string): Client[] {
    if(!items) return [];
    if(!query) return items;
    query = query.toLowerCase();
    return items.filter( item => {
      let str = `${item.general.firstName} ${item.general.lastName}`.toLowerCase();
      return str.includes(query);
    });
    
    return null;
  }

}
