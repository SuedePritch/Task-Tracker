import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskTemplate } from 'src/app/TaskTemplate';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: TaskTemplate[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> (this.tasks = tasks));
  }

  deleteTask(task: TaskTemplate){
    this.taskService
      .deleteTask(task)
      .subscribe(
        //removes deleted task from view
        ()=> (this.tasks = this.tasks.filter((t) => t.id!== task.id)));
  }

  toggleReminder(task: TaskTemplate){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
    
  }

  addTask(task: TaskTemplate){
    this.taskService
      .addTask(task)
      .subscribe((task) => this.tasks.push(task));
  
  }

}
