import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.css']
})
export class ModalCadastroComponent{

  public modalData = {
    nome: null,
    sobrenome: null,
    cpf: null,
    telefone: null,
    endereco: null,
    endereco2:null,
    cidade: null,    
    cep: null,
  }

  constructor(
    public dialogRef: MatDialogRef<ModalCadastroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      Object.assign(this.modalData, data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
