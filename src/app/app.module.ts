import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule, MatToolbarModule, MatSelectModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    HeaderComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSliderModule,
        MatSelectModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
