import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abogados',
  templateUrl: './abogados.page.html',
  styleUrls: ['./abogados.page.scss'],
})
export class AbogadosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToCita() {
    this.router.navigate(['/cita'])
  }
}
