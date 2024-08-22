import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-conform-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogModule, MatButtonModule],
  templateUrl: './conform-dialog.component.html',
  styleUrl: './conform-dialog.component.scss',
})
export class ConformDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConformDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }
  onCancel(): void {
    this.dialogRef.close(false);
  }
}
