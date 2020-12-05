import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog';
import { ModalCadastroComponent } from '../modal-cadastro/modal-cadastro.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  displayedColumns: string[] = ['nome','sobrenome','cpf','telefone','endereco','endereco2','cidade','cep', 'functions'];
  dataSource: any;
  
  
  constructor(private db: AngularFireDatabase,
    private dialog: MatDialog) { 
      this.dataSource = this.db.list('cadastroCliente').snapshotChanges()
      .pipe(map(cadastroCliente => {
        return cadastroCliente.map(cadastroCliente => {
          return Object.assign({ key: cadastroCliente.payload.key }, cadastroCliente.payload.val())
        });
      }));
    }

    insert(data = null): void {
      const dialogRef = this.dialog.open(ModalCadastroComponent, {
        width: '500px',
        data: { ...data, type: 'create' }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.db.list('cadastroCliente').push(result);
        }
      });
    }
  
    delete(key) {
      this.db.list('cadastroCliente').remove(key)
    }
  
    edit(data = null) {
      const dialogRef = this.dialog.open(ModalCadastroComponent, {
        width: '500px',
        data: { ...data, type: 'update' }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.db.list('cadastroCliente').update(result.key, result)
        }
      });
    }

}
