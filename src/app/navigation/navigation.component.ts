import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  toggleMenu = false;
  constructor() { }

  ngOnInit(): void {
  }
  close() {
    this.toggleMenu = false;  
  }
}
