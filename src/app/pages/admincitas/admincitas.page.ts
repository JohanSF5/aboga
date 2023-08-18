import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-admincitas',
  templateUrl: './admincitas.page.html',
  styleUrls: ['./admincitas.page.scss'],
})
export class AdmincitasPage implements OnInit {
  citasData: any[] = []; // Aquí almacenaremos los datos de las citas

  constructor(private router: Router, private http: HttpClient, private menuController: MenuController, private navController: NavController) {}

  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.fetchCitasData(); // Actualiza los datos de las citas cuando la página se carga
  }

  fetchCitasData() {
    // Realiza una solicitud al servidor para obtener los datos actualizados de citas
    this.http.get<any[]>('http://localhost:3000/obtener-citas').subscribe(
      (response) => {
        this.citasData = response; // Actualiza los datos de las citas
      },
      (error) => {
        console.error(error);
      }
    );
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