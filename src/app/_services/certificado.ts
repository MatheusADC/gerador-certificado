import { Injectable } from '@angular/core';
import { Certificado as ICertificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class Certificado {

  certificados: ICertificado[] = [];

  constructor() { }

  adicionarCertificado(certificado: ICertificado) {
    this.certificados.unshift({...certificado});
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
