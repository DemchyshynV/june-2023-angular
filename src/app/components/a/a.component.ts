import {Component, OnInit} from '@angular/core';
import {ConterService} from "../../services/conter.service";

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent implements OnInit {
  count: number

  constructor(private conterService: ConterService) {
  }

  ngOnInit(): void {
    this.conterService.count.subscribe(value => this.count = value)
  }
}
