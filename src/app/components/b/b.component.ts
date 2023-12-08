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

  inc():void {
    this.conterService.inc()
  }
  dec():void {
    this.conterService.dec()
  }
  reset():void {
    this.conterService.reset()
  }
}
