import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/core/nav-bar/nav-bar.component";
import { HomeComponent } from "./components/home/home.component";
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, HomeComponent , CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'Online-Course-UI';
}
