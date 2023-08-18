import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  usuario = {
    nombre: '',
    correo: '',
    mensaje: '',
  };

  constructor(private router: Router, private http: HttpClient, private menuController: MenuController, private navController: NavController) {}

  ngOnInit() {}

  registrarDuda() {
    const data = {
      nombre: this.usuario.nombre,
      correo: this.usuario.correo,
      mensaje: this.usuario.mensaje,
    };

    this.http.post('http://localhost:3000/contacto', data).subscribe(
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


  openPage(page: string) {
  
    this.navController.navigateForward(page);
    this.menuController.close();
  }

  logout() {
    this.router.navigate(['/home']);
    this.menuController.close();
  }


  closeMenu() {
    this.menuController.close();
  }
}
