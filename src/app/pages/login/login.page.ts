import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface LoginResponse {
  success: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  sensorValue: number = 1; // Inicializa el valor del sensor

  usuario = {
    correoElectronico: '',
    contrasena: '',
  };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    // Llama a detectarSensor() cada 5 segundos
    setInterval(() => {
      this.detectarSensor();
    }, 10); // Intervalo de .01 segundos
  }

  iniciarSesion() {
    const data = {
      correo: this.usuario.correoElectronico,
      contraseña: this.usuario.contrasena,
    };

    // Realiza la solicitud de inicio de sesión al backend de Ionic
    this.http.post<LoginResponse>('http://localhost:3000/iniciarSesion', data).subscribe(
      (response) => {
        if (response.success) {
          console.log('Inicio de sesión exitoso');
          // Si el inicio de sesión es exitoso, redirige al usuario a la página de inicio
          this.router.navigate(['/inicio']);
        } else {
          console.log('Credenciales incorrectas');
        }
      },
      (error) => {
        console.error(error);
        // Manejar errores en caso de que falle la solicitud de inicio de sesión.
      }
    );
  }

  // Agrega esta función para manejar la detección del sensor infrarrojo
  detectarSensor() {
    // Realiza una solicitud al servidor para obtener el valor actualizado del sensor
    this.http.get<any>('http://localhost:3000/obtener-valor').subscribe(
      (response) => {
        if (response.success) {
          // Actualiza el valor del sensor con el valor obtenido del servidor
          const data = {
            value: response.value,
          };  
          // Verifica si el valor del sensor es 0 y redirige al usuario a la página de inicio
          if (response.value === 0) {
            this.router.navigate(['/admin']);
          }
        }
      },
      (error) => {
        console.error(error);
        // Manejar errores en caso de que falle la solicitud.
      }
    );
  }

  GoToSignup() {
    this.router.navigate(['/signup'])
  }

  GoToHome() {
    this.router.navigate(['/home'])
  }

  GoToInicio() {
    this.iniciarSesion(); // Llama a la función para iniciar sesión cuando el usuario hace clic en "Iniciar sesión"
  }
}
