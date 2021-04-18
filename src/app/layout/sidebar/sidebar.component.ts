import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  toggle: boolean = true;
  url: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.url = this.router.url;
    this.router.events.subscribe((val) => {
      this.url = this.router.url;
    });
  }

  redirect(url) {
    if (url == 'logout') {
      localStorage.clear();
      this.router.navigateByUrl('login');
    } else {
      this.router.navigateByUrl(url);
    }
  }
}
