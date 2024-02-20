import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatTableModule, ReactiveFormsModule]
})
export class PlannerComponent implements OnInit {
  addForm!: FormGroup;
  displayedColumns: string[] = ['index', 'name', 'x', 'y'];
  dataSource = new MatTableDataSource();

  constructor(private formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      x: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      y: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  ngOnInit() {
    this.setData();
  }

  private setData(): void {
    const waypointsData = localStorage.getItem('waypointsData');
    if (waypointsData) {
      this.dataSource.data = JSON.parse(waypointsData).waypoints.reverse();
    }
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const name = form.get('name')?.value;
      const x = form.get('x')?.value;
      const y = form.get('y')?.value;

      const parsedStoredObject = JSON.parse(localStorage.getItem('waypointsData') || JSON.stringify({ waypoints: [] }));
      parsedStoredObject.waypoints.push({ name, x, y });
      localStorage.setItem('waypointsData', JSON.stringify(parsedStoredObject));

      this.setData();

      form.reset();
    }
  }
}
