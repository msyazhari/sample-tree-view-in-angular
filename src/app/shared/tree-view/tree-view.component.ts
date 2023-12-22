import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeViewItem } from '../../models/tree-view-item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tree-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css'
})
export class TreeViewComponent {
  @Input() items: TreeViewItem[];
  @Input() parentItemId: number | null = null;
  @Input() multiSelect: boolean = true;
  @Output() itemCheckedChange: EventEmitter<TreeViewItem> = new EventEmitter<TreeViewItem>();
  @Output() valueChange: EventEmitter<number[]> = new EventEmitter<number[]>();

  getChildren(id: number): TreeViewItem[] {
    return this.items.filter((i: TreeViewItem): boolean => i.parentId == id);
  }

  hasChildren(id: number): boolean {
    return !!this.getChildren(id).length;
  }

  getCheckedItems(): TreeViewItem[] {
    return this.items.filter((i: TreeViewItem): boolean => i.isChecked);
  }

  onItemCheckedChange(item: TreeViewItem): void {
    if (!this.multiSelect && item.isChecked) {
      this.items
        .filter((i: TreeViewItem): boolean => i.id != item.id)
        .forEach((i: TreeViewItem): void => {
          i.isChecked = false;
        });
    }

    this.itemCheckedChange.emit(item);
    this.valueChange.emit(this.getCheckedItems().map((i: TreeViewItem): number => i.id));
  }
}
