import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TutorialpageComponent } from './tutorialpage/tutorialpage.component';
import { MySummarizerComponent } from './my-summarizer/my-summarizer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SummarizeFileComponent } from './summarize-file/summarize-file.component';
import { SummarizeUrlComponent } from './summarize-url/summarize-url.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TutorialpageComponent,
    MySummarizerComponent,
    SummarizeFileComponent,
    SummarizeUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzAlertModule,
    NzNotificationModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
