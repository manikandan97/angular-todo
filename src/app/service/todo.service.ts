import { Injectable } from '@angular/core';
import { of, asapScheduler } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '1',
        title: 'test',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '2',
        title: 'test',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '3',
        title: 'test',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );

    this.todos.splice(indexofTodo, 1);
  }
}
