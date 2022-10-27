import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  goToPage() {
    this.router.navigate(['/ajuda']);
  }


  goToPage02() {
    this.router.navigate(['/regioes']);
  }


}
