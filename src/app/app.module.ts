import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings'
import { SingleGamesPage } from '../pages/single-games/single-games'
import { MultipleGamePage } from '../pages/multiple-game/multiple-game'
import { MemorizedPage } from '../pages/memorized/memorized'
import { EducationListPage } from '../pages/education-list/education-list'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    SingleGamesPage,
    MultipleGamePage,
    MemorizedPage,
    EducationListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    SingleGamesPage,
    MultipleGamePage,
    MemorizedPage,
    EducationListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
