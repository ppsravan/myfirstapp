import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test App';
  public breadcrumbs: Array<any> = [];

  constructor(titleService: Title, private router: Router, activatedRoute: ActivatedRoute, private service: RegisterService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = [];
        this.getBreadcrumbs(router.routerState, router.routerState.root);
        const title = this.getTitle();
        titleService.setTitle(`${this.title} - ${title}`);
      }
    });
  }

  public getUserName(): string {
    return this.service.userName;
  }

  public isLogged() {
    return this.service.isLogged;
  }

  public logout() {
    this.service.logout();
    this.router.navigate(['./login']);
  }

  getTitle() {
    return this.breadcrumbs.reduce((title, item) => title + item.title, '');
  }

  getBreadcrumbs(state, parent: ActivatedRoute): void {
    // const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      this.breadcrumbs.push({ title: parent.snapshot.data.title, url: parent.snapshot.url, params: parent.snapshot.params });
    }

    if (state && parent) {
      this.getBreadcrumbs(state, state.firstChild(parent));
    }
  }
}
