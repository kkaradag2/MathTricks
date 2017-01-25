import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { SettingsPage } from '../settings/settings'
import { SingleGamesPage } from '../single-games/single-games'
import { MultipleGamePage } from '../multiple-game/multiple-game'
import { MemorizedPage } from '../memorized/memorized'
import { EducationListPage } from '../education-list/education-list'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ios = false;

  constructor(public navCtrl: NavController, public plt: Platform) { 

    if (this.plt.is('ios')) {      
      this.ios = true;
    }

   }
   
  	goSettingsPage(){
  		this.navCtrl.push(SettingsPage);
  	}

  	goSingleGamePage(){
		this.navCtrl.push(SingleGamesPage);
  	}

  	goMultipleGamePage(){
  		this.navCtrl.push(MultipleGamePage);	
  	}

    goMemorizedPage(){
     	this.navCtrl.push(MemorizedPage);	
    }
    goEducationListPage(){
      this.navCtrl.push(EducationListPage);
    }

}
