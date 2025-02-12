import { Component, inject } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  komponensek: any[] = []
  link: any[] = []

  constructor(private base:BaseService) { 
    this.getKomponens()
    this.getPath()
  }  

  getKomponens() {
    this.base.getProducts().subscribe((data:any) => 
    this.komponensek = data.komponensek)
  }

  getPath(){
    this.base.getProducts().subscribe((data:any) => 
      this.komponensek = data.komponensek)
  }

}
