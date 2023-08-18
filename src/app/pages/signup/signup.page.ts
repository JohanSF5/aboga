import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usuario = {
    nombre: '',
    correoElectronico: '',
    contrasena: '',
  };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  registrarUsuario() {
    const data = {
      nombre: this.usuario.nombre,
      correo: this.usuario.correoElectronico,
      contraseña: this.usuario.contrasena,
    };

    this.http.post('http://localhost:3000/registrar', data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error); // Puedes mostrar un mensaje de error aquí si lo deseas
        // Manejar errores en caso de que falle el registro.
      }
    );
            this.router.navigate(['/inicio']);
  }

  GoToLogin() {
    this.router.navigate(['/login']);
  }
}
