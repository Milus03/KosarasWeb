import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-termekek',
  standalone: false,
  templateUrl: './termekek.component.html',
  styleUrl: './termekek.component.css'
})
export class TermekekComponent {

  cipok: any[] = []

  constructor(private base:BaseService) { 
    this.getCipok()
  }

  getCipok() {
    this.base.getProducts().subscribe((data:any) => 
    this.cipok = data.cipok)
  }

}
