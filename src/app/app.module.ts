import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { CardgameComponent } from './cardgame/cardgame.component';
import { EnemyComponent } from './cardgame/enemy/enemy.component';
import { EnemyCardsComponent } from './cardgame/player/enemy-cards.component';
import { PlayerCardsComponent } from './cardgame/player-cards/player-cards.component';
import { PlayerDeckComponent } from './cardgame/player-deck/player-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProjectsComponent,
    CardgameComponent,
    EnemyComponent,
    EnemyCardsComponent,
    PlayerCardsComponent,
    PlayerCardsComponent,
    PlayerDeckComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
