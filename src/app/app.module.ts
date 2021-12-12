import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FirstFormComponent } from './first-form/first-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondFormComponent } from './second-form/second-form.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  declarations: [FirstFormComponent, SecondFormComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
