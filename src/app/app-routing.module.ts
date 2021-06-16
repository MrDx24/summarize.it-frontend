import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MySummarizerComponent } from './my-summarizer/my-summarizer.component';
import { SummarizeFileComponent } from './summarize-file/summarize-file.component';
import { SummarizeUrlComponent } from './summarize-url/summarize-url.component';
import { TutorialpageComponent } from './tutorialpage/tutorialpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'tutorial', component: TutorialpageComponent},
  { path: 'summarize', component: MySummarizerComponent},
  { path: 'summarizeFile', component: SummarizeFileComponent},
  { path: 'summarizeUrl', component: SummarizeUrlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
