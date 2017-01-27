import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import {EducationMenu} from '../../providers/education-menu';



@Component({
  selector: 'page-education-list',
  templateUrl: 'education-list.html',
  providers:[EducationMenu]
})
export class EducationListPage {

  ios = false;
  items:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuService: EducationMenu, public plt: Platform) {
     if (this.plt.is('ios')) {      
      this.ios = true;
    }
  			this.fnloadMenu();
  }

  fnloadMenu(){
    this.menuService.load()
    .then(data => {
      this.items = data.root;
    });
}
   

  toggleDetails(item) {
    console.log(item.showDetails);
    if (item.showDetails) {
        item.showDetails = false;
        item.icon2 = 'arrow-down';
    } else {
        item.showDetails = true;
        item.icon2 = 'arrow-up';
    }
  }


}
