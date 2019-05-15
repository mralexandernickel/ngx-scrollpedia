import { Component } from '@angular/core';
import { ScrollInformationService } from '@mralexandernickel/ngx-scrollpedia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'ngx-scrollpedia';

  constructor(protected scrollInformationService: ScrollInformationService) {
    this.scrollInformationService.get().subscribe(console.log);
  }
}
