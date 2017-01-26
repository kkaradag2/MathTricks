import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import {MenuService} from '../../providers/menu-service';



import { SettingsPage } from '../settings/settings'
import { SingleGamesPage } from '../single-games/single-games'
import { MultipleGamePage } from '../multiple-game/multiple-game'
import { MemorizedPage } from '../memorized/memorized'
import { EducationListPage } from '../education-list/education-list'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MenuService]
})
export class HomePage {

  ios = false;
  menuitems:any;

  constructor(public navCtrl: NavController, public plt: Platform,  public menuService: MenuService) { 

    if (this.plt.is('ios')) {      
      this.ios = true;
    }

     this.fnloadMenu();

   }


fnMenuClick(menuitemno)
{
        switch (menuitemno) {
            case '1':
                this.navCtrl.push(EducationListPage);
                break;
            case '2':
                this.navCtrl.push(SingleGamesPage);
                break;
            case '3':
                this.navCtrl.push(MultipleGamePage);
                break;
            case '4':
                  this.navCtrl.push(MemorizedPage);
                break;                                
            case '5':
                this.navCtrl.push(SettingsPage);
                break;                
            default:

        }
}

fnloadMenu(){
    this.menuService.load()
    .then(data => {
      this.menuitems = data.root;
    });
}
   
  	

}
