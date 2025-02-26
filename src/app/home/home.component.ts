import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  hatterek: any[] = []

  constructor(private base:BaseService){
    this.getHatterek()
  }

  getHatterek() {
    this.base.getProducts().subscribe((data:any) => {
      this.hatterek = data.hatterek
    })
  }

}
