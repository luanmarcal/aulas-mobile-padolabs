import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CidadesService } from '../cidades.service';
import { CidadesPage } from '../cidades/cidades.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cidades: any;
  regiao: string;

  constructor(
    private router: Router, 
    private cidadesService: CidadesService

  ) {
    this.cidades = [];
    this.regiao = '';
  }

  goToPage(Cidade) {
    console.log(Cidade);
    this.router.navigate(['/cidades'], { state: { dados: Cidade } });
  }

  ngOnInit() {
    this.regiao = history.state.dados;
    console.log(this.regiao);

    this.cidadesService.obterCidadesByRegion(this.regiao).subscribe((data) => {
      this.cidades = data;
      console.log(data);
    });
  }

}
