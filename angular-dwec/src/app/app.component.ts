import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter : number = 100; 

  aumentar():void {
    this.counter += 1;
  }

  restar():void {
    this.counter -= 1;
  }

  reiniciar():void{
    this.counter = 100;
  }
}

