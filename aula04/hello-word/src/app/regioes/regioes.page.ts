import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-regioes',
  templateUrl: './regioes.page.html',
  styleUrls: ['./regioes.page.scss'],
})
export class RegioesPage implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  goToPage(regiao) {
    this.router.navigate(['/home'], { state: { dados: regiao } });
  }
}
