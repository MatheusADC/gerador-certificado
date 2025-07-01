import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { BaseUi } from "./_components/base-ui/base-ui";
import { Certificado as CertificadoService } from './_services/certificado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUi,  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'gerador-certificado';
  exibeNavbar: boolean = false;

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
      const certificados = localStorage.getItem('certificados');
      this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
