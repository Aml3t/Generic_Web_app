import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'the-shop',
  standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl:"app.component.html",
  styles: [],
})
export class AppComponent {
  title = 'Dutch Treat Shop';
}
