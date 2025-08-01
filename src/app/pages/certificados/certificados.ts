import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { Certificado as certificadoService} from '../../_services/certificado';
import { Certificado } from '../../interfaces/certificado';


@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit{

  certificados: Certificado[] = [];

  constructor(private certificadoService: certificadoService) {}

  ngOnInit(): void {
      this.certificados = this.certificadoService.certificados;
  }
}
