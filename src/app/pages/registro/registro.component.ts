import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  model = {
    nombre: 'hola',
    apellido: '',
    rut: '',
    correo: '',
    telefono:'',
    contrasena:'',
    rcontrasena:''

  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit({ value: formData }: NgForm): void {
    console.log('Guardar', formData);
  }
    

}
