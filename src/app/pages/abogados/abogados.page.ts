import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-abogados',
  templateUrl: './abogados.page.html',
  styleUrls: ['./abogados.page.scss'],
})
export class AbogadosPage implements OnInit {

  constructor(private router: Router, private http: HttpClient, private menuController: MenuController, private navController: NavController) {}

  ngOnInit() {
  }

  GoToCita() {
    this.router.navigate(['/cita'])
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
