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
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { StatusComponent } from './components/status/status.component';
import { FeatureBoxComponent } from './components/feature-box/feature-box.component';
import { FeatureComponent } from './components/feature-box/feature/feature.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher } from '@angular/material/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobComponent } from './components/jobs/job/job.component';
import { EinkaufswagenComponent } from './components/einkaufswagen/einkaufswagen.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { HighlightToastComponent } from './components/highlight/highlight-toast/highlight-toast.component';
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
    FormatWorkHoursPipe,
    SearchbarComponent,
    StatusComponent,
    FeatureBoxComponent,
    FeatureComponent,
    JobsComponent,
    JobComponent,
    EinkaufswagenComponent,
    HighlightComponent,
    HighlightsComponent,
    HighlightToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule

  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
