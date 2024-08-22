import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-banner-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-carousel.component.html',
  styleUrl: './banner-carousel.component.scss',
})
export class BannerCarouselComponent {
  banners: string[] = [
    'https://in.bmscdn.com/webin/best-of-2018/best-of-2018-banner.jpg',
    'https://in.bmscdn.com/showcaseimage/eventimage/jab-we-separated-04-03-2021-11-10-59-372.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg',
    'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/10/27/plane-movie-HD-Posters-and-Stills-6.jpg?fit=820%2C360&quality=80&zoom=1&ssl=1?v=1666833826',
  ];
  currentBanner: string = this.banners[0];
  position: number = 0;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 4300);
  }

  prevSlide(): void {
    this.position =
      this.position === 0 ? this.banners.length - 1 : this.position - 1;
    this.currentBanner = this.banners[this.position];
  }

  nextSlide(): void {
    this.position =
      this.position === this.banners.length - 1 ? 0 : this.position + 1;
    this.currentBanner = this.banners[this.position];
  }
}
