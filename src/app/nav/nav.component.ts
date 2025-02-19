import { Component, inject } from '@angular/core';
import { BaseService } from '../base.service';
import { SearchService } from '../search.service';

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

  constructor(private base:BaseService, private search:SearchService) { 
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



}
