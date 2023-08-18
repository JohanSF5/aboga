import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router, private http: HttpClient, private menuController: MenuController, private navController: NavController) {}

  ngOnInit() {
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
