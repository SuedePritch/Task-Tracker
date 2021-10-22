import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskTemplate } from 'src/app/TaskTemplate';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:TaskTemplate;
  @Output() onDeleteTask: EventEmitter<TaskTemplate>= new EventEmitter;
  @Output() onToggleReminder: EventEmitter<TaskTemplate>= new EventEmitter;

  faTimes= faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: any){
    this.onDeleteTask.emit(this.task);
  }
  onToggle(task: any){
    this.onToggleReminder.emit(this.task);
  }

}
