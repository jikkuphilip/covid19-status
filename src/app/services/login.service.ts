import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private toast: ToastrService, private route: Router) {}

  userLogin(data) {
    if (data.username == 'fingent' && data.password == 'fingent') {
      this.toast.success('Login Success');
      this.route.navigateByUrl('dashboard');
      // setting a sample token for auth check
      localStorage.setItem(
        'token',
        JSON.stringify(
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        )
      );
    } else this.toast.warning('Invalid username or password');
  }
}
