import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircuitDiagramComponent } from './circuit-diagram/circuit-diagram.component';
import { DiagramTwoComponent } from './diagram-two/diagram-two.component';
import { DiagramTwoService } from './diagram-two/diagram-two.service';
import { DiagramThreeComponent } from './diagram-three/diagram-three.component';

@NgModule({
  declarations: [AppComponent, CircuitDiagramComponent, DiagramTwoComponent, DiagramThreeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DiagramTwoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
