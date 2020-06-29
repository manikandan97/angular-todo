import { Component, OnInit } from '@angular/core';

import { Todo } from './../../model/Todo';

import { v4 as uuidv4 } from 'uuid';
import { TodoService } from 'src/app/service/todo.service';
import { title } from 'process';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todoTile: String;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  handleAdd() {
    const todo: Todo = {
      id: uuidv4(),
      title: this.todoTile,
      date: new Date(),
      isCompleted: false,
    };

    this.todoService.addTodo(todo);
    this.todoTile = '';
  }
}
