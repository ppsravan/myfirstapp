import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test App';
  public breadcrumbs: Array<any> = [];

  constructor(titleService: Title, router: Router, activatedRoute: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = [];
        this.getBreadcrumbs(router.routerState, router.routerState.root);
        const title = this.getTitle();
        titleService.setTitle(`${this.title} - ${title}`);
      }
    });
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
