import { Component, OnInit } from '@angular/core';
import { IStudent, students } from '../students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: IStudent[] = students;

  constructor(){};

  ngOnInit(): void {
      
  }
}
