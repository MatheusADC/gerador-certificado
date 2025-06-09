import { Component } from '@angular/core';
import { SecondaryButton } from "../../app/_components/secondary-button/secondary-button";
import { ItemCertificado } from "../../app/_components/item-certificado/item-certificado";

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

}
