import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

/* Set the width of the side navigation to 250px */
 openNav() {
   this.isOpen = !this.isOpen;
   if (this.isOpen == true) {
      document.getElementById("mySidenav").style.width = "250px";
    } else {
      document.getElementById("mySidenav").style.width = "0";
   }
}

/* Set the width of the side navigation to 0 */
 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

}
