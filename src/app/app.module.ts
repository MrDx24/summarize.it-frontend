import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TutorialpageComponent } from './tutorialpage/tutorialpage.component';
import { MySummarizerComponent } from './my-summarizer/my-summarizer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TutorialpageComponent,
    MySummarizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
