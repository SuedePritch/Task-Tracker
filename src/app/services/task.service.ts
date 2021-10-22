import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs';
import { TaskTemplate } from 'src/app/TaskTemplate';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable <TaskTemplate[]>{
    return this.http.get<TaskTemplate[]>(this.apiUrl)
  }
  deleteTask(task:TaskTemplate): Observable<TaskTemplate>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskTemplate>(url);
  }
  updateTaskReminder(task: TaskTemplate): Observable<TaskTemplate> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskTemplate>(url, task, httpOptions);

  }
  addTask(task: TaskTemplate): Observable<TaskTemplate>{
    return this.http.post<TaskTemplate>(this.apiUrl, task, httpOptions)
  }
}
