import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslateModule, RouterModule],
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!-- banner -->
  <section class="relative bg-[#E71F69] text-white py-20 md:py-32">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-5xl font-bold mb-4" translate>home.home_title</h1>
        <p #animatedElement data-animation="fadeInUp" class="text-xl mb-8" translate>home.home_subtitle</p>
        <div #animatedElement data-animation="fadeInDown" class="flex flex-col sm:flex-row gap-4">
          <a routerLink="/our-projects" class="bg-white text-[#E71F69] px-8 py-3 rounded-full font-bold text-center hover:bg-pink-100 transition duration-300" translate>home.programs</a>
          <a routerLink="/our-impact" class="bg-white text-[#E71F69] px-8 py-3 rounded-full font-bold text-center hover:bg-pink-100 transition duration-300" translate>home.results</a>
          <a routerLink="/get-involved" class="bg-white text-[#E71F69] px-8 py-3 rounded-full font-bold text-center hover:bg-pink-100 transition duration-300" translate>home.volunteering</a>
        </div>
      </div>

      <div class="md:w-1/2 w-full px-4 md:px-0">
        <div class="relative rounded-xl overflow-hidden shadow-2xl">
          <!-- Carousel container -->
          <div class="relative w-full"
               (touchstart)="onTouchStart($event)"
               (touchmove)="onTouchMove($event)"
               (touchend)="onTouchEnd()">
            <!-- Images container with animation -->
            <div class="flex transition-transform duration-500 ease-in-out w-full"
                 [style.transform]="'translateX(-' + (currentImageIndex * 100) + '%)'">
              <!-- First image -->
              <div class="w-full flex-shrink-0">
                <img #animatedElement
                     data-animation="fadeInRight"
                     class="bg-white w-full h-[300px] md:h-[400px] object-contain"
                     src="waskirisLogo.png"
                     alt="logo">
              </div>
              <!-- Second image -->
              <div class="w-full flex-shrink-0">
                <img #animatedElement
                     data-animation="fadeInRight"
                     class="bg-white w-full h-[300px] md:h-[400px] object-cover"
                     src="photoGroup.png"
                     alt="logo">
              </div>
            </div>

            <!-- Navigation buttons - now visible on all screens -->
            <button
              (click)="previousImage()"
              class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              (click)="nextImage()"
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- community-stats.component.html -->
  <section class="w-full bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 #animatedElement data-animation="fadeInUp" class="text-3xl font-bold text-[#012633] text-center" translate>home.our_community</h2>

      <section class="py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <!-- Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="rounded-3xl p-8 flex items-center gap-6 shadow-lg" style="background-color: rgba(231, 31, 105, 1);">
              <div #animatedElement data-animation="fadeInDown" class="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl lg:text-5xl font-bold flex-shrink-0" style="background-color: #E71F69;">
                  +5
              </div>
              <div class="flex-1">
                <h3 #animatedElement data-animation="fadeInUp" class="text-lg text-white font-semibold leading-relaxed" translate>
                  home.years_working
                </h3>
              </div>
            </div>
            <!-- Card 2 -->
            <div class="rounded-3xl p-8 flex items-center gap-6 shadow-lg" style="background-color: rgba(131, 146, 187, 1);">
              <div #animatedElement data-animation="fadeInDown" class="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl lg:text-5xl font-bold flex-shrink-0" style="background-color: #8392BB;">
                +500
              </div>
              <div class="flex-1">
                <h3 #animatedElement data-animation="fadeInUp" class="text-lg text-white font-semibold leading-relaxed" translate>
                  home.scholarships
                </h3>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="rounded-3xl p-8 flex items-center gap-6 md:col-span-2 lg:col-span-1 shadow-lg" style="background-color: rgba(235, 91, 37, 1);">
              <div #animatedElement data-animation="fadeInDown" class="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl lg:text-5xl font-bold flex-shrink-0" style="background-color: #EB5B25;">
                +75%
              </div>
              <div class="flex-1">
                <h3 #animatedElement data-animation="fadeInUp" class="text-lg text-white font-semibold leading-relaxed" translate>
                  home.perception
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>

<!--  Proyectos -->
  <section class="py-16 px-4 sm:px-6 lg:px-8" style="background-color: rgba(79, 102, 140, 0.08);">
    <div class="max-w-7xl mx-auto">
      <h2 #animatedElement data-animation="fadeInUp" class="text-3xl font-bold text-[#012633] text-center" translate>home.projects</h2>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
        <div
          *ngFor="let card of cardsData"
          (click)="openModal(card)"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
        >
          <div class="flex items-center p-6">
            <div class="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 mr-6">
              <img
                [src]="card.image"
                [alt]="card.title"
                class="w-full h-full object-contain"
              />
            </div>
            <div class="flex-1">
              <h3 #animatedElement data-animation="fadeInUp" class="text-xl font-bold mb-2" style="color: #E71F69;">
                {{ card.title }}
              </h3>
              <p #animatedElement data-animation="fadeInDown" class="text-gray-600 leading-relaxed">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        *ngIf="selectedCard"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        (click)="closeModal()"
      >
        <div
          class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          (click)="$event.stopPropagation()"
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b">
            <h3 class="text-2xl font-bold">
              {{ selectedCard.title }}
            </h3>
            <button
              (click)="closeModal()"
              class="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                class="w-6 h-6"
                style="color: #8392BB;"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="p-6">
            <!-- Image -->
            <div class="w-full h-64 rounded-xl overflow-hidden mb-6">
              <img
                [src]="selectedCard.image"
                [alt]="selectedCard.title"
                class="w-full h-full object-contain"
              />
            </div>

            <!-- Description -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-3" style="color: #E71F69;">
                Descripción del Programa
              </h4>
              <p class="text-gray-700 leading-relaxed">
                {{ selectedCard.detailedInfo }}
              </p>
              <a class="pt-6 text-[#E71F69] flex justify-end" routerLink="/our-projects" translate>home.home_see_more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!--  Tesimonials-->
  <section class="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 left-10 w-32 h-32 bg-[#1A5066] rounded-full opacity-10 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-[#1A5066] rounded-full opacity-10 blur-xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-white mb-4">Testimonios</h2>
      </div>

      <!-- Carousel container -->
      <div #animatedElement data-animation="fadeInUp" class="relative">
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            [style.transform]="'translateX(-' + (currentIndex * 100) + '%)'">

            <!-- Testimonial slides -->
            <div
              *ngFor="let testimonial of testimonials; let i = index"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-[#1A5066] hover:bg-gray-750 max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                <!-- Client info left -->
                <div class="flex flex-col items-center md:items-start w-full md:w-1/3">
                  <img
                    [src]="testimonial.avatar"
                    [alt]="testimonial.name"
                    class="w-32 h-32 rounded-full object-cover border-4 border-[#1A5066] mb-4"
                  />
                  <div class="text-center md:text-left">
                    <h4 class="text-white font-semibold text-2xl">{{ testimonial.name }}</h4>
                    <p class="text-[#1A5066] font-medium text-lg">{{ testimonial.role }}</p>
                    <p class="text-gray-400 text-base">{{ testimonial.company }}</p>
                  </div>
                </div>
                <!-- Testimonial right -->
                <div class="flex-1 flex flex-col justify-center items-center md:items-start">
                  <!-- Quote icon -->
                  <div class="flex justify-center md:justify-start mb-4">
                    <svg class="w-12 h-12 text-[#E71F69] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <!-- Testimonial text -->
                  <blockquote class="text-gray-300 text-lg leading-relaxed mb-6 text-center md:text-left italic">
                    "{{ testimonial.testimonial }}"
                  </blockquote>
                  <!-- Lab matraces (flasks) instead of stars -->
                  <div class="flex justify-center md:justify-start mb-2">
                    <ng-container *ngFor="let flask of [1,2,3,4,5]">
                      <img
                        src="matraz.png"
                        alt="matraz"
                        class="w-8 h-8 mx-1 inline"
                        [ngClass]="flask <= testimonial.rating ? 'opacity-100' : 'opacity-30 grayscale'"
                      />
                    </ng-container>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <!-- Navigation dots -->
        <div class="flex justify-center space-x-2 mt-8">
          <button
            *ngFor="let testimonial of testimonials; let i = index"
            (click)="goToSlide(i)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            [class.bg-[#1A5066]]="i === currentIndex"
            [class.bg-gray-600]="i !== currentIndex">
          </button>
        </div>

        <!-- Navigation arrows -->
        <button
          (click)="previousSlide()"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-[#1A5066] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
          (click)="nextSlide()"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-[#1A5066] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="py-16 bg-white relative">
    <div class="container mx-auto px-6 relative z-10">
      <h2 #animatedElement data-animation="fadeInUp" class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4" translate>home.WHY_CHOOSE_US</h2>
      <p #animatedElement data-animation="fadeInDown" class="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto" translate>home.WHY_CHOOSE_US_SUBTITLE</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Card 1 -->
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-xl shadow-lg hover:shadow-xl">
          <div class="h-40 bg-gradient-to-r from-[#E71F69] to-[#EB5B25] flex items-center justify-center">
            <img src="cohet.png" alt="Programas innovadores" class="w-full h-full object-contain opacity-90">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3" translate>home.WHY_CHOOSE_1_TITLE</h3>
            <p class="text-gray-600" translate>home.WHY_CHOOSE_1_DESC</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-xl shadow-lg hover:shadow-xl">
          <div class="h-40 bg-gradient-to-r from-[#4F668C] to-[#1A5066] flex items-center justify-center">
            <img src="nina_amarilla_4.png" alt="Comunidad de apoyo" class="w-full h-full object-contain opacity-90">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3" translate>home.WHY_CHOOSE_2_TITLE</h3>
            <p class="text-gray-600" translate>home.WHY_CHOOSE_2_DESC</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-xl shadow-lg hover:shadow-xl">
          <div class="h-40 bg-gradient-to-r from-[#E71F69] to-[#EB5B25] flex items-center justify-center">
            <img src="hands.png" alt="Proyectos inclusivos" class="w-full h-full object-contain opacity-90">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3" translate>home.WHY_CHOOSE_4_TITLE</h3>
            <p class="text-gray-600" translate>home.WHY_CHOOSE_4_DESC</p>
          </div>
        </div>

        <!-- Card 4 -->
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-xl shadow-lg hover:shadow-xl">
          <div class="h-40 bg-gradient-to-r from-[#4F668C] to-[#1A5066] flex items-center justify-center">
            <img src="nina_rosa_2.png" alt="Enfoque integral" class="w-full h-full object-contain opacity-90">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3" translate>home.WHY_CHOOSE_3_TITLE</h3>
            <p class="text-gray-600" translate>home.WHY_CHOOSE_3_DESC</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <h3 #animatedElement data-animation="fadeInDown" class="text-3xl font-bold text-gray-800 mb-6" translate>home.WHY_CHOOSE_CTA_TITLE</h3>
        <div #animatedElement data-animation="fadeInUp" class="flex justify-center items-center py-4">
          <img src="hashtag.png" alt="cohete" class="mx-auto w-xl">
        </div>
        <a #animatedElement data-animation="fadeInDown" routerLink="/" class="inline-block bg-[#E71F69] text-white px-8 py-5 mt-6 rounded-full font-bold hover:shadow-lg" translate>home.make_donation</a>
      </div>
    </div>
  </section>

<!--  Companies section-->
<section class="py-16 bg-gray-900">
  <div class="container mx-auto px-4">

    <!-- Nuestros aliados -->
    <div class="mb-16">
      <h2 #animatedElement data-animation="fadeInUp" class="text-3xl font-bold text-center mb-8 text-white" translate>
        home.allies
      </h2>
      <div #alliesScroller class="flex gap-6 overflow-x-auto scrollbar-hide py-2 justify-center">
        <div *ngFor="let ally of allies" class="flex-shrink-0 w-28 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
          <img [src]="ally.logo" [alt]="ally.name" class="max-h-12 max-w-full object-contain p-2">
        </div>
      </div>
    </div>

    <!-- Nuestros financiadores -->
    <div>
      <h2 #animatedElement data-animation="fadeInDown" class="text-3xl font-bold text-center mb-8 text-white" translate>
        home.sponsors
      </h2>
      <div #fundersScroller class="flex gap-6 overflow-x-auto scrollbar-hide py-2 justify-center">
        <div *ngFor="let funder of funders" class="flex-shrink-0 w-28 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
          <img [src]="funder.logo" [alt]="funder.name" class="max-h-12 max-w-full object-contain p-2">
        </div>
      </div>
    </div>
    
  </div>
</section>

<!--  Media-->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Main Title -->
      <h2 #animatedElement data-animation="fadeInDown" class="text-4xl font-bold text-center mb-12 text-gray-800">
        Media
      </h2>

      <div class="flex justify-center">
        <img #animatedElement data-animation="fadeInDown" class="w-120" src="astronauta.png" alt="astronauta">
      </div>

      <div class="flex justify-center">
        <a #animatedElement data-animation="fadeInUp" routerLink="/media" class="inline-block bg-[#E71F69] text-white px-8 py-5 mt-6 rounded-full font-bold hover:shadow-lg" translate>home.go_to_media</a>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 #animatedElement data-animation="fadeInUp" class="text-3xl font-bold mb-4" translate>home.contact_us</h2>
        <p #animatedElement data-animation="fadeInUp" class="text-gray-300 text-lg max-w-2xl mx-auto" translate>
          home.here_to_help
        </p>
      </div>

      <div class="text-center max-w-3xl mx-auto">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 #animatedElement data-animation="fadeInDown" class="text-xl font-semibold mb-4" translate>home.contact_info</h3>
            <div #animatedElement data-animation="fadeInDown" class="flex justify-center">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:chicaswaskiris@gmail.com" class="text-gray-300 hover:text-white transition-colors">
                  chicaswaskiris&#64;gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 #animatedElement data-animation="fadeInUp" class="text-xl font-semibold mb-4" translate>home.follow_us</h3>
            <div #animatedElement data-animation="fadeInUp" class="flex justify-center space-x-6">
              <!-- Facebook -->
              <a href="https://www.facebook.com/ChicasWaskiris" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-pink-500 transition-colors">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <!-- Instagram -->
              <a href="https://www.instagram.com/chicaswaskiris/" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-pink-500 transition-colors">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </a>

              <!-- TikTok -->
              <a href="https://www.tiktok.com/@chicas_waskiris" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-red-500 transition-colors">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>

              <!-- YouTube -->
              <a href="https://www.youtube.com/@chicaswaskiris2737" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-red-600 transition-colors">
                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->

  <footer class="bg-black text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <p #animatedElement data-animation="fadeInUp" class="text-gray-400" translate><span>&copy; </span>{{ 'home.all_rights' | translate }}</p>
          </div>
          <div class="flex space-x-6 text-sm">
            <a #animatedElement data-animation="fadeInUp" href="#" (click)="openLegalModal($event)" class="text-gray-400 hover:text-white transition-colors" translate>
              {{ 'home.privacy_terms' | translate }}
            </a>
          </div>
        </div>
      </div>

      <div
        *ngIf="showLegalModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
        (click)="closeLegalModal()"
      >
        <div
          class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
          (click)="$event.stopPropagation()"
        >
          <button
            (click)="closeLegalModal()"
            class="absolute top-4 right-4 text-gray-500 hover:text-[#E71F69] text-2xl font-bold"
            aria-label="Cerrar"
          >&times;</button>

          <h2 class="text-2xl font-bold mb-4 text-[#E71F69]">{{ 'home.terms_title' | translate }}</h2>
          <p class="text-xs text-gray-500 mb-2">{{ 'home.terms_last_updated' | translate }}</p>
          <p class="mb-4 text-gray-500">{{ 'home.terms_welcome' | translate }}</p>

          <ol class="list-decimal pl-5 mb-4 space-y-2 text-sm text-gray-500">
            <li>
              <strong>{{ 'home.terms_content_ownership' | translate }}</strong><br>
              {{ 'home.terms_content_text' | translate }}<br>
              {{ 'home.terms_minors_content' | translate }}
            </li>
            <li>
              <strong>{{ 'home.terms_use_materials' | translate }}</strong><br>
              {{ 'home.terms_use_materials_text' | translate }}<br>
              {{ 'home.terms_citation_required' | translate }}<br>
              {{ 'home.terms_no_commercial' | translate }}<br>
              {{ 'home.terms_no_modification' | translate }}
            </li>
            <li>
              <strong>{{ 'home.terms_improper_use' | translate }}</strong><br>
              {{ 'home.terms_improper_use_text' | translate }}
            </li>
            <li>
              <strong>{{ 'home.terms_minors_protection' | translate }}</strong><br>
              {{ 'home.terms_minors_protection_text' | translate }}
            </li>
            <li>
              <strong>{{ 'home.terms_modifications' | translate }}</strong><br>
              {{ 'home.terms_modifications_text' | translate }}
            </li>
          </ol>

          <h2 class="text-2xl font-bold mb-4 text-[#E71F69] mt-8">{{ 'home.privacy_title' | translate }}</h2>
          <p class="text-xs text-gray-500 mb-2">{{ 'home.privacy_last_updated' | translate }}</p>

          <ol class="list-decimal pl-5 mb-4 space-y-2 text-sm text-gray-500">
            <li>
              <strong>{{ 'home.privacy_no_cookies' | translate }}</strong><br>
              {{ 'home.privacy_no_cookies_text' | translate }}
            </li>
            <li>
              <strong>{{ 'home.privacy_info_collected' | translate }}</strong><br>
              {{ 'home.privacy_no_auto_collect' | translate }}<br>
              {{ 'home.privacy_voluntary_info' | translate }}<br>
              {{ 'home.privacy_info_use' | translate }}
            </li>
            <li>
              <strong>{{ 'home.privacy_minors_protection' | translate }}</strong><br>
              {{ 'home.privacy_minors_text' | translate }}
            </li>
            <li>
              <strong>{{ 'home.privacy_third_party' | translate }}</strong><br>
              {{ 'home.privacy_third_party_text' | translate }}
            </li>
            <li>
              <strong>{{ 'home.privacy_intellectual_rights' | translate }}</strong><br>
              {{ 'home.privacy_intellectual_text' | translate }}<br>
              {{ 'home.privacy_reuse_conditions' | translate }}
            </li>
            <li>
              <strong>{{ 'home.privacy_policy_changes' | translate }}</strong><br>
              {{ 'home.privacy_policy_changes_text' | translate }}
            </li>
            <li>
              <strong>{{ 'home.privacy_contact' | translate }}</strong><br>
              {{ 'home.privacy_contact_text' | translate }} <a href="mailto:chicaswaskiris@gmail.com" class="text-[#E71F69] underline">chicaswaskiris&#64;gmail.com</a>
            </li>
          </ol>
        </div>
      </div>

    </footer>
  `
})

export default class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;
  @ViewChildren('alliesScroller') alliesScroller!: QueryList<ElementRef>;
  @ViewChildren('fundersScroller') fundersScroller!: QueryList<ElementRef>;

  selectedCard: Card | null = null;
  currentIndex = 0;
  autoSlideInterval: any;
  currentImageIndex = 0;
  touchStartX = 0;
  touchEndX = 0;
  showLegalModal = false;

  private alliesScrollInterval: any;
  private fundersScrollInterval: any;

  cardsData: Card[] = [
    {
      id: 1,
      title: "STEM EN TUS MANOS",
      description: "Promover la inclusión de adolescentes sordos en la educación STEM.",
      image: "stem.png",
      detailedInfo: "Promover la inclusión de adolescentes sordos en la educación STEM, adaptando materiales educativos y talleres a la Lengua de Señas Boliviana (LSB) y generando experiencias accesibles y transformadoras."
    },
    {
      id: 2,
      title: "IMPULSA STEM",
      description: "Motivar a adolescentes de municipios y/o ciudades alejadas de la ciudad de La Paz.",
      image: "cohete.png",
      detailedInfo: "Motivar a adolescentes de municipios y/o ciudades alejadas de la ciudad de La Paz a optar por carreras STEM, reduciendo la brecha de género y generando oportunidades desde sus propias comunidades."
    },
    {
      id: 3,
      title: "Juntucha waskiri",
      description: "Brindar a adolescentes bolivianas una experiencia práctica y vivencial.",
      image: "juntucha1.png",
      detailedInfo: "Sumérgete en el mundo de la inteligencia artificial y descubre cómo esta tecnología está transformando nuestra sociedad. Nuestro programa cubre desde conceptos básicos hasta aplicaciones avanzadas, incluyendo machine learning, procesamiento de lenguaje natural y visión por computadora, todo explicado de manera accesible y práctica."
    },
    {
      id: 4,
      title: "Juntucha Waskiri 2.0",
      description: "Brindar a adolescentes bolivianas una experiencia práctica y vivencial.",
      image: "juntucha2.png",
      detailedInfo: "Sumérgete en el mundo de la inteligencia artificial y descubre cómo esta tecnología está transformando nuestra sociedad. Nuestro programa cubre desde conceptos básicos hasta aplicaciones avanzadas, incluyendo machine learning, procesamiento de lenguaje natural y visión por computadora, todo explicado de manera accesible y práctica."
    },
    {
      id: 5,
      title: "Primer Campamento STEM de Chicas Waskiris",
      description: "Brindar a adolescentes bolivianas una experiencia práctica y vivencial.",
      image: "primer-campamento.jpeg",
      detailedInfo: "Brindar a adolescentes bolivianas una experiencia práctica y vivencial en ciencia, tecnología, ingeniería y matemáticas."
    }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      testimonial: "Working with this team has been absolutely transformative for our business. Their attention to detail and innovative approach exceeded all our expectations. The results speak for themselves.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c8e6c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateLab",
      testimonial: "The level of professionalism and expertise demonstrated throughout our project was remarkable. They delivered exactly what we needed, on time and within budget. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Solutions",
      testimonial: "From concept to execution, every step of the process was handled with such care and precision. The team's creativity and technical skills are unmatched. Our ROI has increased by 300%!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder",
      company: "GrowthCorp",
      testimonial: "I've worked with many agencies over the years, but none have delivered the quality and service we received here. The team truly understands what it takes to build something exceptional.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Product Manager",
      company: "NextGen Apps",
      testimonial: "The collaboration was seamless and the final product exceeded our wildest expectations. Their innovative approach and commitment to excellence is truly inspiring. We couldn't be happier!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 5
    }
  ];

  allies = [
    {
      name: 'OWSD Bolivia',
      logo: 'allies/owsd-bolivia.png'
    },
    {
      name: 'Juntucha Waskiri 1',
      logo: 'allies/juntuchawaskiri1.png'
    },
    {
      name: 'STEAM Stars',
      logo: 'allies/waskiris-2019.jpeg'
    },
    {
      name: 'Nos Gusta la Ciencia',
      logo: 'allies/nos-gusta-la-ciencia.jpeg'
    },
    {
      name: 'Project Suma',
      logo: 'allies/projectsuma.jpeg'
    },
    {
      name: 'Rotaract',
      logo: 'allies/rotarac-la-paz.png'
    },
    {
      name: 'Ampuy',
      logo: 'allies/ampuy.png'
    },
    {
      name: 'FIAB',
      logo: 'allies/fiab.jpeg'
    }
  ];

  funders = [
    {
      name: 'Chevening',
      logo: 'allies/chevening.jpeg'
    },
    {
      name: 'Giz',
      logo: 'allies/giz.jpg'
    },
    {
      name: 'FREE FUND STEM',
      logo: 'allies/free.jpeg'
    },
    {
      name: 'Women WIN',
      logo: 'allies/woman-win.png'
    },
    {
      name: 'Chevening',
      logo: 'allies/chevening.jpeg'
    },
    {
      name: 'Giz',
      logo: 'allies/giz.jpg'
    },
    {
      name: 'FREE FUND STEM',
      logo: 'allies/free.jpeg'
    },
    {
      name: 'Women WIN',
      logo: 'allies/woman-win.png'
    }
  ];

  videos = [
    {
      title: 'Video Corporativo 1',
      description: 'Descubre nuestra misión y valores a través de este contenido audiovisual que muestra el compromiso de nuestra organización.',
      originalUrl: 'https://www.youtube.com/watch?v=UzVplNaU_Yg&t=10s',
      embedUrl: 'https://www.youtube.com/embed/UzVplNaU_Yg?start=10&autoplay=1',
      thumbnail: 'https://img.youtube.com/vi/UzVplNaU_Yg/maxresdefault.jpg',
      duration: '5:30',
      isPlaying: false
    },
    {
      title: 'Testimonios de Clientes',
      description: 'Conoce las experiencias de nuestros clientes y cómo hemos logrado impactar positivamente en sus proyectos y objetivos.',
      originalUrl: 'https://www.youtube.com/watch?v=TVvikQHrLtg',
      embedUrl: 'https://www.youtube.com/embed/TVvikQHrLtg?autoplay=1',
      thumbnail: 'https://img.youtube.com/vi/TVvikQHrLtg/maxresdefault.jpg',
      duration: '8:15',
      isPlaying: false
    },
    {
      title: 'Innovación y Tecnología',
      description: 'Explora las últimas innovaciones tecnológicas que implementamos para ofrecer soluciones de vanguardia a nuestros usuarios.',
      originalUrl: 'https://www.youtube.com/watch?v=imiKtsbJ9AM',
      embedUrl: 'https://www.youtube.com/embed/imiKtsbJ9AM?autoplay=1',
      thumbnail: 'https://img.youtube.com/vi/imiKtsbJ9AM/maxresdefault.jpg',
      duration: '6:45',
      isPlaying: false
    },
    {
      title: 'Impacto Social',
      description: 'Conoce cómo nuestras iniciativas generan un impacto positivo en la comunidad y contribuyen al desarrollo sostenible.',
      originalUrl: 'https://www.youtube.com/watch?v=Qp475uYnx9Y',
      embedUrl: 'https://www.youtube.com/embed/Qp475uYnx9Y?autoplay=1',
      thumbnail: 'https://img.youtube.com/vi/Qp475uYnx9Y/maxresdefault.jpg',
      duration: '4:20',
      isPlaying: false
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngAfterViewInit() {
    this.setupScrollAnimations();
    setTimeout(() => this.startLogoAutoScroll(), 500); // Wait for view to render
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) clearInterval(this.autoSlideInterval);
    if (this.alliesScrollInterval) clearInterval(this.alliesScrollInterval);
    if (this.fundersScrollInterval) clearInterval(this.fundersScrollInterval);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds

    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % 2;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  previousSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    // Restart auto-slide timer when user manually navigates
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide();
    }
  }

  openModal(card: Card): void {
    this.selectedCard = card;
  }

  closeModal(): void {
    this.selectedCard = null;
  }

  playVideo(video: any) {
    // Only load iframe when user clicks to play
    video.isPlaying = true;
  }

  previousImage() {
    this.currentImageIndex = this.currentImageIndex === 0 ? 1 : 0;
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide();
    }
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide();
    }
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationType = entry.target.getAttribute('data-animation') || 'fadeInUp';
          entry.target.classList.add('animate__animated', `animate__${animationType}`);
          // @ts-ignore
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    this.animatedElements.forEach(el => {
      observer.observe(el.nativeElement);
    });
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    const swipeThreshold = 50; // minimum distance for swipe
    const difference = this.touchStartX - this.touchEndX;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        // Swipe left
        this.nextImage();
      } else {
        // Swipe right
        this.previousImage();
      }
    }

    // Reset values inside the method
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  openLegalModal(event: Event) {
    event.preventDefault();
    this.showLegalModal = true;
  }

  closeLegalModal() {
    this.showLegalModal = false;
  }

  startLogoAutoScroll() {
    // Allies
    const alliesDiv = this.alliesScroller.first?.nativeElement;
    if (alliesDiv) {
      this.alliesScrollInterval = setInterval(() => {
        alliesDiv.scrollLeft += 1;
        // Reset if at end
        if (alliesDiv.scrollLeft + alliesDiv.clientWidth >= alliesDiv.scrollWidth - 1) {
          alliesDiv.scrollLeft = 0;
        }
      }, 30);
    }
    // Funders
    const fundersDiv = this.fundersScroller.first?.nativeElement;
    if (fundersDiv) {
      this.fundersScrollInterval = setInterval(() => {
        fundersDiv.scrollLeft += 2;
        if (fundersDiv.scrollLeft + fundersDiv.clientWidth >= fundersDiv.scrollWidth - 2) {
          fundersDiv.scrollLeft = 0;
        }
      }, 30);
    }
  }

}

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  detailedInfo: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
  rating: number;
}

