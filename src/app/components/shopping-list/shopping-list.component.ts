import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from '../../models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  currentId = 3;
  list: ShoppingListItem[] = [
    { id: '1', description: 'Beer', purchased: false },
    { id: '2', description: 'Shampoo', purchased: true }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: HTMLInputElement) {
    const itemToAdd: ShoppingListItem = {
      id: (this.currentId++).toString(),
      description: item.value,
      purchased: false
    };
    this.list = [itemToAdd, ...this.list];
    item.value = '';
    item.focus();
  }

  markPurchased(item: ShoppingListItem) {
    item.purchased = true;
  }

  clearPurchased() {
    this.list = this.list.filter(item => item.purchased === false);
  }
}
