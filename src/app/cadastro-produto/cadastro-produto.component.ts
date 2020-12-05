import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'
import { ModalProductComponent } from '../modal-product/modal-product.component';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  displayedColumns: string[] = ['nome','preco', 'peso', 'quantidade', 'value', 'functions'];
  dataSource: any;

  constructor(private db: AngularFireDatabase,
    private dialog: MatDialog) {
    this.dataSource = this.db.list('cadastroProduto').snapshotChanges()
      .pipe(map(cadastroProduto => {
        return cadastroProduto.map(cadastroProduto => {
          return Object.assign({ key: cadastroProduto.payload.key }, cadastroProduto.payload.val())
        });
      }));
  }

  insert(data = null): void {
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '500px',
      data: { ...data, type: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.list('cadastroProduto').push(result);
      }
    });
  }

  delete(key) {
    this.db.list('cadastroProduto').remove(key)
  }

  edit(data = null) {
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '500px',
      data: { ...data, type: 'update' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.list('cadastroProduto').update(result.key, result)
      }
    });
  }
}

