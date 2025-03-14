import { Component, inject } from '@angular/core';
import { BaseService } from '../base.service';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  komponensek: any[] = []
  link: any[] = []
  keresoSzo=""
  isBlack:boolean = false

  constructor(private base:BaseService, private search:SearchService, public router:Router) { 
    this.getKomponens()
    this.getPath()
    this.search.getSearchWord().subscribe(
      (res)=>this.keresoSzo=res
    )
  }  

  setKeresoSzo(){
    this.search.setSearchWord(this.keresoSzo)
  }

  onKeyUp(event:any){
    this.search.setSearchWord(event.target.value)
  }

  getKomponens() {
    this.base.getProducts().subscribe((data:any) => 
    this.komponensek = data.komponensek)
  }

  getPath(){
    this.base.getProducts().subscribe((data:any) => 
      this.komponensek = data.komponensek)
  }

  switch(){
    var element = document.body
    element.classList.toggle("dark-mode")
    this.isBlack = true
  }

}
