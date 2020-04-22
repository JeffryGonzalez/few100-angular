import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title = 'Super-Rad Angular App!';
  constructor() { }

  ngOnInit(): void {
  }

  cheatCode() {
    this.title = this.title.toUpperCase();
  }
}
