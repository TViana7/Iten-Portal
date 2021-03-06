import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilizadoresComponent } from './utilizadores.component';
import { CriarUtilizadorComponent } from './criar-utilizador/criar-utilizador.component';
import { UtilizadoresRoutingModule } from "app/utilizadores/utilizadores.routing.module";
import { CriarUtilizadorService } from "app/utilizadores/criar-utilizador/criar-utilizador.service";

import { UtilizadoresService } from "app/utilizadores/utilizadores.service";
import { EditarUtilizadorComponent } from './editar-utilizador/editar-utilizador.component';
import { EditarUtilizadorService } from "app/utilizadores/editar-utilizador/editar-utilizador.service";
import { DataTableModule } from "angular2-datatable";




@NgModule({
  imports: [
    CommonModule,
    UtilizadoresRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,

  ],
  declarations: [UtilizadoresComponent, CriarUtilizadorComponent, EditarUtilizadorComponent],
  providers:[CriarUtilizadorService, UtilizadoresService, EditarUtilizadorService]
})
export class UtilizadoresModule { }
