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
import { NewsArticleComponent } from './components/news-article/news-article.component';
import { LeistungenComponent } from './components/leistungen/leistungen.component';
import { AnfahrtComponent } from './components/anfahrt/anfahrt.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { AngeboteComponent } from './components/angebote/angebote.component';
import { AngebotComponent } from './components/angebot/angebot.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LeistungComponent } from './components/leistung/leistung.component';
import { FormatWorkHoursPipe } from './pipes/format-work-hours.pipe';

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
    TeamComponent,
    NewsArticleComponent,
    LeistungenComponent,
    AnfahrtComponent,
    KontaktComponent,
    AngeboteComponent,
    AngebotComponent,
    ErrorComponent,
    HomeComponent,
    LeistungComponent,
    FormatWorkHoursPipe
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
