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
    'https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2017/10/bookmyshow-flipkart-ecommerce-online-ticketing.jpg',
    'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/kalki-2898-ad-et00352941-1718275859.jpg',
    'https://bsmedia.business-standard.com/_media/bs/img/article/2017-04/28/full/1493364600-4637.jpg?im=FeatureCrop,size=(826,465)',
    'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202309/ezgif-sixteen_nine_42.jpg?size=948:533',
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change image every 5 seconds
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }
}
