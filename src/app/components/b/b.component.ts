import {Component} from '@angular/core';
import {ConterService} from "../../services/conter.service";

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  constructor(private conterService: ConterService) {
  }

  inc(): void {
    this.conterService.count.next(this.conterService.count.value + 1)
  }

  dec(): void {
    this.conterService.count.next(this.conterService.count.value - 1)
  }

  reset(): void {
    this.conterService.count.next(0)
  }
}
