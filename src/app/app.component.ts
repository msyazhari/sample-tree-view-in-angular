import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TreeViewItem } from './models/tree-view-item';
import { TreeViewComponent } from "./shared/tree-view/tree-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TreeViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: TreeViewItem[] = [
    { id: 1, isChecked: false, isExpanded: false, parentId: null, title: 'Math' },
    { id: 2, isChecked: false, isExpanded: false, parentId: null, title: 'History' },
    { id: 3, isChecked: false, isExpanded: false, parentId: 2, title: "Iran's History" },
    { id: 4, isChecked: false, isExpanded: false, parentId: null, title: 'Accounting' },
    { id: 5, isChecked: false, isExpanded: false, parentId: null, title: 'Programing' },
    { id: 6, isChecked: false, isExpanded: false, parentId: 5, title: 'Web' },
    { id: 7, isChecked: false, isExpanded: false, parentId: 6, title: 'Back-End' },
    { id: 8, isChecked: false, isExpanded: false, parentId: 5, title: 'Mobile' },
  ];

  onTreeViewItemCheckedChange(item: TreeViewItem): void {
    console.log(item);
  }

  onTreeViewValueChange(value: number[]): void {
    console.log(value);
  }
}
