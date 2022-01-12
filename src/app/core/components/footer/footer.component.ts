import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public designDate: Date = new Date("2022-01-12");  

  constructor() { }

  ngOnInit(): void {
  }

}
