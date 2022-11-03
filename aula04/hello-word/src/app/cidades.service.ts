import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegioesPageRoutingModule } from './regioes/regioes-routing.module';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  httpOptions = {headers: new HttpHeaders({ 'x-bin-meta': 'false' })};

  constructor(private http: HttpClient) { }

  obterCidadesByRegion(regiao: any): Observable<object> {
    // const dataUrl = 'https://api.jsonbin.io/v3/b/633dd6fa65b57a31e68c063a';
    // return this.http.get(dataUrl, this.httpOptions);

    const dataUrl = 'http://172.16.107.82:8080/regions/'+regiao;
    console.log(dataUrl);
    return this.http.get(dataUrl);
  }
}
