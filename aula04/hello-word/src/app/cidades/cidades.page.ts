import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],

})
export class CidadesPage implements OnInit {
  Cidades: any;

  constructor(private router: Router) {
    this.Cidades = [];
  }

  ngOnInit() {
    this.Cidades = history.state.dados;
    console.log(this.Cidades);
  }

  goToPage() {
    this.router.navigate(['/regioes']);
  }

}
