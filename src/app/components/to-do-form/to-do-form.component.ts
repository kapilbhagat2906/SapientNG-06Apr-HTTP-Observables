import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { ToDoModel } from '../../type/toDoModel';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  toDoList: Array<ToDoModel>;
  toDoTitle: string;

  constructor(
    private toDoService: ToDoService,
    public messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.toDoService.inCompleteToDoList()
      .subscribe((data) => {
        this.toDoList = data;
      });
  }

  updateToDoHandler (toDo: ToDoModel) {
    this.toDoService.update(toDo)
      .subscribe((isToDoUpdated) => {
        if (isToDoUpdated) {
          this.toDoService.inCompleteToDoList()
            .subscribe((data) => {
              this.toDoList = data;
            });
        }
      });
  }

  saveToDo () {
    if (this.toDoTitle) {
      this.toDoService.save(new ToDoModel(this.toDoTitle, false))
        .subscribe((isToDoSaved) => {
          if (isToDoSaved) {
            this.toDoTitle = '';
            this.toDoService.inCompleteToDoList()
              .subscribe((data) => {
                this.toDoList = data;
              });
          }
        });
    }
  }

  // async refreshToDos () {
  //   this.toDoList = await this.toDoService.inCompleteToDoList();
  // }

}
