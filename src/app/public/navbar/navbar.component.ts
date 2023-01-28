import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Ioption {
  label: string;
  navigation: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  urlLogo: string = './../../../assets/ima/logo.png';
  optionList: Ioption[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const optionHome: Ioption = {
      label: 'Inicio',
      navigation: 'home',
    };

    const optionForm: Ioption = {
      label: 'Formulario',
      navigation: 'form',
    };

    const optionUserList: Ioption = {
      label: 'Lista de Usuarios',
      navigation: 'user-list',
    };

    this.optionList.push(optionHome);
    this.optionList.push(optionForm);
    this.optionList.push(optionUserList);
  }

  href(url: string) {
    this.router.navigate([url]);
  }
}
