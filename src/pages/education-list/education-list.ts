import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PeopleService} from '../../providers/people-service';


@Component({
  selector: 'page-education-list',
  templateUrl: 'education-list.html',
  providers: [PeopleService]
})
export class EducationListPage {

 public people: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleService: PeopleService) {
  	 this.loadPeople();
  }

  
   loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.people = data.results;
    });
  }

}
