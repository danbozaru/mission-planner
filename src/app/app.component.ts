import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatButtonModule, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appTitle = 'Mission Planner';
  projectGitUrl = 'https://github.com/danbozaru/mission-planner';
  sidenavVisible = false;

  toggleSidenav = (): void => {
    this.sidenavVisible = !this.sidenavVisible;
  };

  closeSidenav = (): void => {
    this.sidenavVisible = false;
  };
}
