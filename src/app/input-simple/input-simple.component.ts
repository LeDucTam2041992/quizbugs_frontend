import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-input-simple',
  templateUrl: './input-simple.component.html',
  styleUrls: ['./input-simple.component.css']
})
export class InputSimpleComponent implements OnInit {
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
