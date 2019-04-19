import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CollapseModule } from 'ngx-bootstrap';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('detailsPanel') details;
  @ViewChild('displayDetails') displayDetails;
  isCollapsed1 = false;
  isCollapsed2 = false;

  todo = data.list1;
  done = data.list2;

  // Need to access this data from a json file
  title = 'dragNdrop';

  elementDetails = "";

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  showDetails(text) {
    this.elementDetails = text;
  }
}
