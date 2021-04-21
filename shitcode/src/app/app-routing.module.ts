import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ReportComponent} from './components/report/report.component';
import {QuestionComponent} from './components/question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent, data: {animation: 'WelcomePage'}},
  {path: 'question', component: QuestionComponent, data: {animation: 'QuestionPage'}},
  {path: 'report', component: ReportComponent, data: {animation: 'ReportPage'}},
  {path: '**', redirectTo: 'welcome'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
