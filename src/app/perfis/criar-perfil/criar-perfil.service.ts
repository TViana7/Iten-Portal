import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from "@angular/http";

@Injectable()
export class CriarPerfilService {

  constructor(private http:Http) { }




   /*

    Metodo que retorna um json com os dados para a checkbox

  */
  getPerfis() {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get('http://localhost:3000/ws/mapeamento/getURL/teste', options).map(data => {
            //console.log(data.json());
            return data.json();
    });
  
   }

   insertPerfil(perfil:Object){
    console.log(perfil);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post('http://localhost:3000/ws/perfis/inserirPerfil/novoPerfil', JSON.stringify(perfil), options)
            .map((response: Response)=>response.json());

  }

}


