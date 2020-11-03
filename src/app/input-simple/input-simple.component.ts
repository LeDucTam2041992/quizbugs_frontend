import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-input-simple',
  templateUrl: './input-simple.component.html',
  styleUrls: ['./input-simple.component.css']
})
export class InputSimpleComponent implements OnInit {
  user: User = {
    id: -1,
    email: '',
    password: '',
    country: '',
    age: -1,
    gender: 'none',
    phone: ''
  };
  product: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.product = this.fb.group({
      name: ['', Validators.required]
    });
  }
  submit(): void {
    console.log(this.product.get('name').value);
  }
}
