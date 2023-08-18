import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(private router: Router, private menuController: MenuController, private navController: NavController) { }

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
