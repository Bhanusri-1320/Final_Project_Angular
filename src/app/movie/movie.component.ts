import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConformDialogComponent } from '../conform-dialog/conform-dialog.component';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  @Input() movie: any;
  @Input() id!: string;

  // @Input() movie = {
  //   movieId: '1',
  //   title: 'Double iSmart ',
  //   genre: ['Action', 'Thriller'],
  //   director: 'Puri Jagannadh',
  //   cast: [
  //     {
  //       actorId: 'a1',
  //       name: 'Ram Pothineni',
  //       profilePic:
  //         'https://pbs.twimg.com/profile_images/1771092342956519424/0K3K_NEV_400x400.jpg',
  //     },
  //     {
  //       actorId: 'a2',
  //       name: 'Shruti Haasan',
  //       profilePic:
  //         'https://pbs.twimg.com/profile_images/1771092342956519424/0K3K_NEV_400x400.jpg',
  //     },
  //     {
  //       actorId: 'a3',
  //       name: 'Jagapathi Babu',
  //       profilePic:
  //         'https://pbs.twimg.com/profile_images/1771092342956519424/0K3K_NEV_400x400.jpg',
  //     },
  //   ],
  //   releaseDate: '2024-08-12',
  //   duration: '2h 36m',
  //   language: 'Telugu',
  //   synopsis:
  //     'A sequel to iSmart Shankar, Double iSmart stars Ram Pothineni and Sanjay Dutt in prominent roles. It is written and directed by Puri Jagannadh.',
  //   poster:
  //     'https://cdn.gulte.com/wp-content/uploads/2024/05/Double-ISMART.jpeg',
  //   ratings: '7/10',
  //   trailer: 'https://youtube.com/trailer1',
  // };
  @Output() deleteMovieEvent = new EventEmitter<any>();
  @Output() editMovieEvent = new EventEmitter<any>();
  @Input() roleId: any;
  // roleId = localStorage.getItem('roleId');
  constructor(
    private dialog: MatDialog,
    private router: Router,
    public loginService: LoginService
  ) {}
  ngOnInit() {
    this.roleId = localStorage.getItem('roleId');
    console.log(this.roleId);
  }
  openConfirmDialog(message: string): Promise<boolean> {
    const dialogRef = this.dialog.open(ConformDialogComponent, {
      width: '250px',
      data: { message },
    });

    return dialogRef.afterClosed().toPromise();
  }
  async deleteMovie() {
    const confirmed = await this.openConfirmDialog(
      'Are you sure you want to delete?'
    );
    if (confirmed) {
      this.deleteMovieEvent.emit(this.movie);
    }
  }
  editMovie() {
    console.log('edit');
    console.log(this.roleId);
    this.editMovieEvent.emit(this.movie);
  }
}
