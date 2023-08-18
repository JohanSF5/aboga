import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
})
export class CitaPage implements OnInit {
  cita = {
    nombre: '',
    correo: '',
    telefono: '',
    cita: '',
  };

  constructor(private router: Router, private http: HttpClient, private menuController: MenuController, private navController: NavController) {}

  ngOnInit() {
  }

  registrarCita() {
    const data = {
      nombre: this.cita.nombre,
      correo: this.cita.correo,
      telefono: this.cita.telefono,
      cita: this.cita.cita,
    };

    this.http.post('http://localhost:3000/registrarcita', data).subscribe(
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
