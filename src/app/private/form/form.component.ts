import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser, UserBuilder } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;
  firstNameMaxLength: number = 50;
  lastNameMaxLength: number = 80;
  cellPhoneMaxLength: number = 10;
  homePhoneMaxLength: number = 10;
  addressHomeMaxLength: number = 250;
  professionMaxLength: number = 80;
  incomesMaxLength: number = 20;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      cellPhone: new FormControl(null, [Validators.required]),
      homePhone: new FormControl(null, [Validators.required]),
      addressHome: new FormControl(null, [Validators.required]),
      profession: new FormControl(null, [Validators.required]),
      incomes: new FormControl(null, [Validators.required]),
    });
  }

  saveUser() {
    if (this.userForm.valid) {
      const user: IUser = new UserBuilder()
        .firstName(this.userForm.controls['firstName'].value)
        .lastName(this.userForm.controls['lastName'].value)
        .birthday(this.userForm.controls['birthday'].value)
        .gender(this.userForm.controls['gender'].value)
        .cellPhone(this.userForm.controls['cellPhone'].value)
        .homePhone(this.userForm.controls['homePhone'].value)
        .addressHome(this.userForm.controls['addressHome'].value)
        .profession(this.userForm.controls['profession'].value)
        .incomes(this.userForm.controls['incomes'].value)
        .build();

      this.userService.setUser(user);
      this.userForm.reset();
      this.showAlert('Usuario agregado exitosamente');
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  showAlert(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
