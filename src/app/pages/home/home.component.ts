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
          <a routerLink="/our-impact" class="bg-white text-[#E71F69] px-8 py-3 rounded-full font-bold text-center hover:bg-pink-100 transition duration-300" >Voluntariado</a>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="relative rounded-xl overflow-hidden shadow-2xl">
          <img #animatedElement data-animation="fadeInRight" class="bg-white" src="waskirisLogo.png" alt="logo">
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
            <div class="rounded-3xl p-8 flex items-center gap-6 shadow-lg" style="background-color: rgba(231, 31, 105, 0.9);">
              <div #animatedElement data-animation="fadeInDown" class="w-20 h-20 rounded-full shadow-lg flex items-center justify-center text-white text-2xl font-bold flex-shrink-0" style="background-color: #E71F69;">
                +5
              </div>
              <div class="flex-1">
                <h3 #animatedElement data-animation="fadeInUp" class="text-lg text-white font-semibold leading-relaxed" translate>
                  home.years_working
                </h3>
              </div>
            </div>
            <!-- Card 2 -->
            <div class="rounded-3xl p-8 flex items-center gap-6 shadow-lg" style="background-color: rgba(131, 146, 187, 0.9);">
              <div #animatedElement data-animation="fadeInDown" class="rounded-full px-6 py-4 shadow-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0" style="background-color: #8392BB;">
                +500
              </div>
              <div class="flex-1">
                <h3 #animatedElement data-animation="fadeInUp" class="text-lg text-white font-semibold leading-relaxed" translate>
                  home.scholarships
                </h3>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="rounded-3xl p-8 flex items-center gap-6 md:col-span-2 lg:col-span-1 shadow-lg" style="background-color: rgba(235, 91, 37, 0.9);">
              <div #animatedElement data-animation="fadeInDown" class="rounded-full px-6 py-4 flex shadow-lg items-center justify-center text-white text-xl font-bold flex-shrink-0" style="background-color: #EB5B25;">
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
                class="w-full h-full object-cover"
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
                class="w-full h-full object-cover"
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
              class="w-full flex-shrink-0 px-4">

              <div class="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-[#1A5066] hover:bg-gray-750 max-w-4xl mx-auto">

                <!-- Quote icon -->
                <div class="flex justify-center mb-6">
                  <svg class="w-12 h-12 text-[#1A5066] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <!-- Testimonial text -->
                <blockquote class="text-gray-300 text-lg leading-relaxed mb-8 text-center italic">
                  "{{ testimonial.testimonial }}"
                </blockquote>

                <!-- Rating stars -->
                <div class="flex justify-center mb-6">
                  <div class="flex space-x-1">
                    <svg
                      *ngFor="let star of [1,2,3,4,5]"
                      class="w-5 h-5"
                      [class.text-yellow-400]="star <= testimonial.rating"
                      [class.text-gray-600]="star > testimonial.rating"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>

                <!-- Client info -->
                <div class="flex items-center justify-center space-x-4">
                  <img
                    [src]="testimonial.avatar"
                    [alt]="testimonial.name"
                    class="w-16 h-16 rounded-full object-cover border-2 border-[#1A5066]">
                  <div class="text-center">
                    <h4 class="text-white font-semibold text-lg">{{ testimonial.name }}</h4>
                    <p class="text-[#1A5066] font-medium">{{ testimonial.role }}</p>
                    <p class="text-gray-400 text-sm">{{ testimonial.company }}</p>
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
            <img src="matraz.png" alt="Programas innovadores" class="w-full h-full object-contain opacity-90">
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
        <div #animatedElement data-animation="fadeInDown" class="flex justify-center items-center py-2">
          <img src="cohete.png" alt="cohete" class="mx-auto w-xl">
        </div>
        <a #animatedElement data-animation="fadeInUp" routerLink="/" class="inline-block bg-[#E71F69] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg" translate>home.make_donation</a>
      </div>
    </div>
  </section>

<!--  Companies section-->
  <section class="py-16 bg-gray-900">
    <div class="container mx-auto px-4">

      <!-- Nuestros aliados -->
      <div class="mb-16">
        <h2 #animatedElement data-animation="fadeInUp" class="text-3xl font-bold text-center mb-8 text-white">
          Nuestros aliados
        </h2>
        <div class="relative overflow-hidden">
          <div class="flex animate-scroll-left">
            <div class="flex space-x-8 min-w-full">
              <div *ngFor="let ally of allies" class="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
                <img [src]="ally.logo" [alt]="ally.name" class="max-w-full max-h-full object-contain p-2">
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="flex space-x-8 min-w-full">
              <div *ngFor="let ally of allies" class="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
                <img [src]="ally.logo" [alt]="ally.name" class="max-w-full max-h-full object-contain p-2">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nuestros financiadores -->
      <div>
        <h2 #animatedElement data-animation="fadeInDown" class="text-3xl font-bold text-center mb-8 text-white">
          Nuestros financiadores
        </h2>
        <div class="relative overflow-hidden">
          <div class="flex animate-scroll-left-slow">
            <div class="flex space-x-8 min-w-full">
              <div *ngFor="let funder of funders" class="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
                <img [src]="funder.logo" [alt]="funder.name" class="max-w-full max-h-full object-contain p-2">
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="flex space-x-8 min-w-full">
              <div *ngFor="let funder of funders" class="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
                <img [src]="funder.logo" [alt]="funder.name" class="max-w-full max-h-full object-contain p-2">
              </div>
            </div>
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

      <!-- Video Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <!-- Video Card -->
        <div #animatedElement data-animation="fadeInUp" *ngFor="let video of videos" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">

          <!-- Video Thumbnail or iframe -->
          <div class="relative w-full h-0 pb-[56.25%] bg-gray-100 cursor-pointer"
               (click)="playVideo(video)"
               [class.pointer-events-none]="video.isPlaying">

            <!-- Thumbnail View -->
            <div *ngIf="!video.isPlaying" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-30 transition-all duration-300">
              <img
                [src]="video.thumbnail"
                [alt]="video.title"
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy">

              <!-- Play Button Overlay -->
              <div class="relative z-10 flex items-center justify-center w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-200 hover:scale-110 transform">
                <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z"/>
                </svg>
              </div>
            </div>

            <!-- iframe View (only loads when clicked) -->
            <iframe
              *ngIf="video.isPlaying"
              [src]="video.embedUrl"
              [title]="video.title"
              class="absolute top-0 left-0 w-full h-full rounded-t-lg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              autoplay>
            </iframe>
          </div>

          <!-- Card Content Below Video -->
          <div class="p-4 bg-white">
            <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
              {{ video.title }}
            </h3>
            <p class="text-sm text-gray-600 mb-3 line-clamp-3">
              {{ video.description }}
            </p>
            <div class="flex items-center justify-between">
                <span class="text-xs text-gray-500 font-medium">
                  {{ video.duration }}
                </span>
              <a
                [href]="video.originalUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full hover:bg-red-700 transition-colors duration-200">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                </svg>
                Ver en YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 #animatedElement data-animation="fadeInUp" class="text-3xl font-bold mb-4">Contáctanos</h2>
        <p #animatedElement data-animation="fadeInUp" class="text-gray-300 text-lg max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de nuestros canales.
        </p>
      </div>

      <div class="text-center max-w-3xl mx-auto">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 #animatedElement data-animation="fadeInDown" class="text-xl font-semibold mb-4">Información de Contacto</h3>
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
            <h3 #animatedElement data-animation="fadeInUp" class="text-xl font-semibold mb-4">Síguenos</h3>
            <div #animatedElement data-animation="fadeInUp" class="flex justify-center space-x-6">
              <!-- Facebook -->
              <a href="https://www.facebook.com/ChicasWaskiris" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-blue-500 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <!-- Instagram -->
              <a href="https://www.instagram.com/chicaswaskiris/" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-pink-500 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541zm7.519 0c-2.508 0-4.541-2.033-4.541-4.541s2.033-4.541 4.541-4.541 4.541 2.033 4.541 4.541-2.033 4.541-4.541 4.541z"/>
                </svg>
              </a>

              <!-- TikTok -->
              <a href="https://www.tiktok.com/@chicas_waskiris" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-red-500 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>

              <!-- YouTube -->
              <a href="https://www.youtube.com/@chicaswaskiris2737" target="_blank" rel="noopener noreferrer"
                 class="text-gray-400 hover:text-red-600 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
          <p #animatedElement data-animation="fadeInUp" class="text-gray-400">&copy; 2025 Chicas Waskiris. Todos los derechos reservados.</p>
        </div>
        <div class="flex space-x-6 text-sm">
          <a #animatedElement data-animation="fadeInUp" href="#privacy-policy" class="text-gray-400 hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a #animatedElement data-animation="fadeInUp" href="#terms-conditions" class="text-gray-400 hover:text-white transition-colors">
            Términos y Condiciones
          </a>
        </div>
      </div>
    </div>
  </footer>
  `
})

export default class HomeComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  selectedCard: Card | null = null;
  currentIndex = 0;
  autoSlideInterval: any;

  cardsData: Card[] = [
    {
      id: 1,
      title: "Robótica",
      description: "Robótica educativa para mentes jóvenes",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
      detailedInfo: "Nuestro programa de robótica educativa está diseñado específicamente para inspirar y educar a las mentes jóvenes en el fascinante mundo de la tecnología. A través de actividades prácticas y proyectos innovadores, los estudiantes aprenden conceptos fundamentales de programación, ingeniería y pensamiento computacional mientras construyen y programan sus propios robots.",
      features: ["Programación visual", "Construcción de robots", "Trabajo en equipo", "Resolución de problemas"]
    },
    {
      id: 2,
      title: "Apps",
      description: "Desarrollo de apps con impacto social",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
      detailedInfo: "Nuestro programa de desarrollo de aplicaciones se enfoca en crear soluciones tecnológicas que generen un impacto positivo en la sociedad. Los participantes aprenden a diseñar, desarrollar y lanzar aplicaciones móviles que aborden problemas reales de sus comunidades, combinando habilidades técnicas con conciencia social.",
      features: ["Desarrollo móvil", "Diseño UX/UI", "Impacto social", "Metodologías ágiles"]
    },
    {
      id: 3,
      title: "IA",
      description: "Exploración de la inteligencia artificial",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
      detailedInfo: "Sumérgete en el mundo de la inteligencia artificial y descubre cómo esta tecnología está transformando nuestra sociedad. Nuestro programa cubre desde conceptos básicos hasta aplicaciones avanzadas, incluyendo machine learning, procesamiento de lenguaje natural y visión por computadora, todo explicado de manera accesible y práctica.",
      features: ["Machine Learning", "Procesamiento de lenguaje", "Visión artificial", "Ética en IA"]
    },
    {
      id: 4,
      title: "Ciencia",
      description: "Proyectos de ciencia con mentoría",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop",
      detailedInfo: "Nuestro programa de ciencia conecta a estudiantes apasionados con mentores expertos para desarrollar proyectos de investigación innovadores. Los participantes exploran diversas áreas científicas, desde biología y química hasta física y ciencias ambientales, mientras aprenden metodología científica y desarrollan habilidades de investigación.",
      features: ["Investigación científica", "Mentoría personalizada", "Metodología científica", "Presentación de resultados"]
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
      name: 'Tech Corp',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiM0RjQ2RTUiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRFQ0ggQ09SUDwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Global Solutions',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiM3QzNBRUQiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdMT0JBTCBTT0w8L3RleHQ+PC9zdmc+'
    },
    {
      name: 'Innovation Hub',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwNTk2NjkiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklOTk9WIEhVQjwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Digital Partners',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiNEQzI2MjYiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRJR0lUQUwgUDwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Future Labs',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiNFQTU4MEMiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZVVFVSRSBMQUI8L3RleHQ+PC9zdmc+'
    },
    {
      name: 'Smart Systems',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMjg0QzciLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNNQVJUIFNZUzwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Next Gen',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiNCRTE4NUQiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5FWFQgR0VOPC90ZXh0Pjwvc3ZnPg=='
    },
    {
      name: 'Advanced Tech',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwRjc2NkUiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFEViBURUNIPC90ZXh0Pjwvc3ZnPg=='
    },
    {
      name: 'Pro Solutions',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiM5MzMzRUEiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBSTyBTT0w8L3RleHQ+PC9zdmc+'
    },
    {
      name: 'Elite Partners',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiNDMjQxMEMiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVMSVRFIFBBUjwvdGV4dD48L3N2Zz4='
    }
  ];

  funders = [
    {
      name: 'Capital Ventures',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiMxRTQwQUYiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNBUElUQUwgVjwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Investment Group',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiNCOTFDMUMiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklOVkVTVCBHPC90ZXh0Pjwvc3ZnPg=='
    },
    {
      name: 'Finance Partners',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiMxNjY1MzQiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZJTkFOQ0UgUDwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Growth Capital',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiM5MjQwMEUiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdST1dUSCBDPC90ZXh0Pjwvc3ZnPg=='
    },
    {
      name: 'Strategic Fund',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiM3RTIyQ0UiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNUUkFUIEZVTkQ8L3RleHQ+PC9zdmc+'
    },
    {
      name: 'Angel Investors',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiNCRTEyM0MiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFOR0VMIElOVjwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Venture Capital',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwRTc0OTAiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlZFTlRVUkUgQzwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Private Equity',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiNBMjFDQUYiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBSSVZBVEUgRTwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Funding Corp',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwNTkyMTIiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZVTkRJTkcgQzwvdGV4dD48L3N2Zz4='
    },
    {
      name: 'Investment Bank',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9IiNEQzI2MjYiLz48dGV4dCB4PSI2MCIgeT0iMzciIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklOVkVTVCBCPC90ZXh0Pjwvc3ZnPg=='
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
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
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

  onEnroll(card: Card): void {
    console.log('Enrolling in:', card.title);
    // Add your enrollment logic here
  }

  onMoreInfo(card: Card): void {
    console.log('More info for:', card.title);
    // Add your more info logic here
  }

  playVideo(video: any) {
    // Only load iframe when user clicks to play
    video.isPlaying = true;
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
}

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  detailedInfo: string;
  features: string[];
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

