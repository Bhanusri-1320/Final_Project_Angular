import { Component } from '@angular/core';
import { ConformDialogComponent } from '../conform-dialog/conform-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [ConformDialogComponent],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    public loginService: LoginService
  ) {}
  openConfirmDialog(message: string): Promise<boolean> {
    const dialogRef = this.dialog.open(ConformDialogComponent, {
      width: '250px',
      data: { message },
    });

    return dialogRef.afterClosed().toPromise();
  }
  async ngOnInit() {
    const confirmed = await this.openConfirmDialog(
      'Are you sure you want to logout?'
    );
    if (confirmed) {
      console.log('logging out...');
      // localStorage.setItem("token",'');
      // localStorage.setItem("roleId",'');
      this.loginService.loginSuccess = false;

      localStorage.clear();
      this.router.navigate([`/`]);
    } else {
      this.router.navigate(['/movies']);
    }
  }
}
