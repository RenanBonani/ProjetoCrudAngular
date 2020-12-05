import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  title = 'ProjetoFaculdade';
  displayedColumns: string[] = ['nome','preco', 'peso', 'quantidade', 'value', 'functions'];
  dataSource: any;

  constructor(private db: AngularFireDatabase,
    private dialog: MatDialog) {
    this.dataSource = this.db.list('item').snapshotChanges()
      .pipe(map(items => {
        return items.map(item => {
          return Object.assign({ key: item.payload.key }, item.payload.val())
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
        this.db.list('item').push(result);
      }
    });
  }

  delete(key) {
    this.db.list('item').remove(key)
  }

  edit(data = null) {
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '500px',
      data: { ...data, type: 'update' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.list('item').update(result.key, result)
      }
    });
  }
}


