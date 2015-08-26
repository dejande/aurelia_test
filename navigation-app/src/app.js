import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia Test';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title:'2Welcome' },
      { route: 'users', name: 'users', moduleId: 'users', nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}