import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos : Todo [];

  constructor() {

    this.todos = [ {
    id: '111',
    title: 'Complete Java course',
    isComplete: false,
    date : new Date(),

    } ]

    this.todos = [ {
      id : '222',
      title : 'Complete JavaScript course',
      isComplete : false,
      date : new Date(),
  
      } ]

      this.todos = [ {
        id : '333',
        title : 'Complete React course',
        isComplete : true,
        date : new Date(),
    
        } ]

   }

   //Defining CRUD operations

   //1. READ
   getTodos () {    
     return of(this.todos);
   }

   //2. Create
   addTodo (todo : Todo) {
    this.todos.push(todo);
   }

   //3. Update
   changeStatus (todo : Todo){
     this.todos.map( (singleTodo) => {
       if(todo.id === singleTodo.id){
         todo.isComplete = !todo.isComplete;
       }
     })
   }

   //4. Delete
   deleteTodo (todo : Todo) {
     const todoIndex = this.todos.findIndex(
       (currentObj) => currentObj.id === todo.id
     )
     this.todos.splice(todoIndex, 1);
   }

}
