import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{  RouterModule, Routes  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { JobComponent } from './job/job.component';
import { CandidateComponent } from './candidate/candidate.component';



 const mypage:Routes=[
  
                  {path:"dashboard",component:DashboardComponent},
                   {path:"candidate",component:CandidateComponent},  
                   {path:"job" , component:JobComponent},
                   {path:"invoice",component:InvoiceComponent}
                    ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    InvoiceComponent,
    JobComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
     NgxPaginationModule,
     Ng2OrderModule,
    

    RouterModule.forRoot(mypage)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
