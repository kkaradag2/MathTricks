import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController) {}

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
