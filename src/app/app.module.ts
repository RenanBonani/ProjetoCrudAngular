import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { DummyComponent } from './dummy/dummy.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FooterComponent } from './footer/footer.component';
import { ModalCadastroComponent } from './modal-cadastro/modal-cadastro.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalProductComponent,
    NavbarComponent,
    DummyComponent,
    CadastroComponent,
    FooterComponent,
    ModalCadastroComponent,
    CadastroProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatToolbarModule  
  ],

  entryComponents: [
    ModalProductComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
