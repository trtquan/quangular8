import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SubstanceSecComponent } from './components/substance-sec/substance-sec.component';
import { SubstancePrequencyComponent } from './components/substance-prequency/substance-prequency.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { SubstanceViewerComponent } from './components/substance-viewer/substance-viewer.component';
import { SubstanceFormComponent } from './components/substance-form/substance-form.component';

import { MatToolbarModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SubstanceSecComponent,
    SubstancePrequencyComponent,
    PatientDetailComponent,
    SubstanceViewerComponent,
    SubstanceFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
