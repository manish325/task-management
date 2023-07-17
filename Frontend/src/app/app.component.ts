import { Component } from '@angular/core';
import { UtilityService } from './core/services/Utility/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-manager';

  constructor(private utilityService : UtilityService) {
    utilityService.registerIcons();
    localStorage.clear();
  }
}
