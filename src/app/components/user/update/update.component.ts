import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent implements OnInit {
  userForm: FormGroup;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.userId) {
      this.usersService.getUserById(this.userId).subscribe((user) => {
        this.userForm.patchValue({
          name: user.name,
          email: user.email,
          username: user.username,
        });
      });
    }
  }

  onSubmit() { 
    if (this.userForm.valid && this.userId) {
      
      this.usersService
        .updateUser(this.userId, this.userForm.value)
        .subscribe(() => {
          this.router.navigate(['/usuarios']);
        });
    }
  }
}
