import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage {
  showSpinner: boolean = true;

  constructor(private router: Router) {
    setTimeout(() => {
      this.showSpinner = false;
      this.router.navigate(['/home']);
    }, 5000);
  }
}
