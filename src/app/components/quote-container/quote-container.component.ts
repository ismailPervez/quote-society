import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-quote-container',
  templateUrl: './quote-container.component.html',
  styleUrls: ['./quote-container.component.css']
})
export class QuoteContainerComponent implements OnInit {

  @Input() count: number = 0

  tasks: string[] = []

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks()
  }

  onAddCount(value: number) {
    this.count += value
  }

}
