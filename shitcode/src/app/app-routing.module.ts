import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ReportComponent} from './components/report/report.component';
import {QuestionComponent} from './components/question/question.component';

const routes: Routes = [
  {path: 'question', component: QuestionComponent},
  {path: 'report', component: ReportComponent},
  {path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
