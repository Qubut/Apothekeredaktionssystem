import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NestedListPipe } from './pipes/nested-list.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NewsComponent } from './components/news/news.component';
import { FaqComponent } from './components/faq/faq.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NestedListPipe,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    DialogComponent,
    NewsComponent,
    FaqComponent,
    NewsletterComponent,
    TeamMemberComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
