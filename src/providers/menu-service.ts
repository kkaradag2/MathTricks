import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

data:any;

  constructor(public http: Http) {
    this.data = null;
  }

load() {
  if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }

  // don't have the data yet
  return new Promise(resolve => {
      this.http.get('/assets/Data/menu.json')
      .map(res => res.json())
      .subscribe(data => {        
        this.data = data;
        resolve(this.data);
      });
  });

}
}
