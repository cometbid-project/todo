import { Component } from '@angular/core';
import { Model, TodoItem } from "./model";

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoText: string;
  model = new Model();

  getName() {
    return this.model.user;
  }

  setTodoItem(newItem) {
    if (newItem != "") {
      this.todoText = newItem;
    }   
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem) {
    if (!this.model.items.find(item => this.todoText == item.action)) {
      this.model.items.push(new TodoItem(this.todoText, false));
      this.todoText = "";
    }    
  }
}
