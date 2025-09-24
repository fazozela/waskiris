import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface Publication {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  project: string;
  sponsor: string;
  downloadUrl?: string;
  color: string;
}

@Component({
  selector: 'app-media',
  imports: [CommonModule, TranslateModule, RouterModule],
  styleUrl: './media.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!-- Hero Section -->
  <section class="relative bg-[#E71F69] text-white py-20 md:py-32">
    <div class="container mx-auto px-6">
      <div class="text-center">
        <h1 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-6xl font-bold mb-6" translate>MEDIA.hero_title</h1>
        <p #animatedElement data-animation="fadeInUp" class="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" translate>MEDIA.hero_description</p>
      </div>
    </div>
    <!-- Background decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-20 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-10 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-pink-300 rounded-full opacity-10 blur-xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-5 blur-2xl"></div>
    </div>
  </section>

  <!-- Publications Section -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-center text-[#012633] mb-4" translate>MEDIA.publications_title</h2>
      <p #animatedElement data-animation="fadeInUp" class="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto" translate>MEDIA.publications_subtitle</p>
      
      <div class="space-y-16 max-w-7xl mx-auto">
        <!-- Manual de experimentos para maestros de estudiantes sordos -->
        <div #animatedElement data-animation="fadeInLeft" class="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div class="lg:w-1/2 p-2">
            <img src="media1.jpg" alt="Manual de experimentos para maestros de estudiantes sordos" class="w-full h-80 object-contain rounded-2xl bg-gray-100">
          </div>
          <div class="lg:w-1/2 p-8 lg:p-12">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-[#E71F69] to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                🤟
              </div>
              <span class="text-sm bg-[#E71F69] text-white px-3 py-1 rounded-full">2023</span>
            </div>
            <h3 class="text-3xl font-bold text-[#012633] mb-4" translate>MEDIA.publication_1_title</h3>
            <p class="text-gray-700 leading-relaxed mb-6" translate>MEDIA.publication_1_description</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-[#E71F69] text-white px-6 py-3 rounded-full font-bold hover:bg-pink-600 transition duration-300 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span translate>MEDIA.download</span>
              </button>
              <div class="text-sm text-gray-500">
                <p>Proyecto: Manual para Maestros</p>
                <p>Financiado por: Programa de Inclusión</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Guía después del cole -->
        <div #animatedElement data-animation="fadeInRight" class="flex flex-col lg:flex-row-reverse items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div class="lg:w-1/2 p-2">
            <img src="media2.png" alt="Guía después del cole" class="w-full h-80 object-contain rounded-2xl bg-gray-100">
          </div>
          <div class="lg:w-1/2 p-8 lg:p-12">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-[#1A5066] to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                🎓
              </div>
              <span class="text-sm bg-[#1A5066] text-white px-3 py-1 rounded-full">2022</span>
            </div>
            <h3 class="text-3xl font-bold text-[#012633] mb-4" translate>MEDIA.publication_2_title</h3>
            <p class="text-gray-700 leading-relaxed mb-6" translate>MEDIA.publication_2_description</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-[#1A5066] text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span translate>MEDIA.download</span>
              </button>
              <div class="text-sm text-gray-500">
                <p>Proyecto: Guía Educativa</p>
                <p>Financiado por: Ministerio de Educación</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Manual de Experimentos STEM -->
        <div #animatedElement data-animation="fadeInLeft" class="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div class="lg:w-1/2 p-2">
            <img src="media3.png" alt="Manual de Experimentos STEM" class="w-full h-80 object-contain rounded-2xl bg-gray-100">
          </div>
          <div class="lg:w-1/2 p-8 lg:p-12">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                🧪
              </div>
              <span class="text-sm bg-purple-500 text-white px-3 py-1 rounded-full">2021</span>
            </div>
            <h3 class="text-3xl font-bold text-[#012633] mb-4" translate>MEDIA.publication_3_title</h3>
            <p class="text-gray-700 leading-relaxed mb-6" translate>MEDIA.publication_3_description</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-purple-500 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition duration-300 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span translate>MEDIA.download</span>
              </button>
              <div class="text-sm text-gray-500">
                <p>Proyecto: Manual STEM</p>
                <p>Financiado por: Fundación Educativa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Video Gallery -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-center text-[#012633] mb-16" translate>MEDIA.video_gallery_title</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <!-- Juntucha Waskiri Video -->
        <div #animatedElement data-animation="fadeInLeft" class="relative">
          <div class="rounded-3xl overflow-hidden shadow-xl">
            <div class="relative w-full rounded-2xl overflow-hidden" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
              <video 
                class="absolute top-0 left-0 w-full h-full object-cover"
                controls 
                poster="juntucha1.png"
                preload="metadata">
                <source src="SpotJuntuchaWaskiris.mp4" type="video/mp4">
                <p class="text-gray-500 p-4">Tu navegador no soporta videos HTML5. <a href="SpotJuntuchaWaskiris.mp4" class="text-green-500 underline">Descarga el video aquí</a>.</p>
              </video>
            </div>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold text-[#012633] mb-3" translate>MEDIA.video_local_title</h3>
            <p class="text-gray-600 leading-relaxed" translate>MEDIA.video_local_description</p>
          </div>
        </div>

        <!-- First Camp YouTube Video -->
        <div #animatedElement data-animation="fadeInRight" class="relative">
          <div class="rounded-3xl overflow-hidden shadow-xl">
            <div class="relative w-full rounded-2xl overflow-hidden" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
              <iframe 
                class="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/hgA4Ymp5LhI?rel=0&modestbranding=1"
                title="Primer Campamento STEM Chicas Waskiris 2019"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
            </div>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold text-[#012633] mb-3" translate>MEDIA.video_youtube_title</h3>
            <p class="text-gray-600 leading-relaxed" translate>MEDIA.video_youtube_description</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-20 bg-gray-900 relative">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 left-10 w-32 h-32 bg-[#E71F69] rounded-full opacity-10 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-[#1A5066] rounded-full opacity-10 blur-xl"></div>
    </div>
    
    <div class="relative container mx-auto px-6 text-center">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-white mb-8" translate>MEDIA.cta_title</h2>
      <p #animatedElement data-animation="fadeInUp" class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8" translate>MEDIA.cta_description</p>
      <div #animatedElement data-animation="fadeInUp" class="flex flex-col sm:flex-row gap-4 justify-center">
        <a routerLink="/get-involved" class="bg-[#E71F69] text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition duration-300" translate>MEDIA.cta_share</a>
      </div>
    </div>
  </section>
  `
})
export default class MediaComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  ngOnDestroy() {
    // Clean up any observers or intervals if needed
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animation = element.getAttribute('data-animation');

          if (animation) {
            element.classList.add('animate-' + animation);
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    this.animatedElements.forEach((element) => {
      observer.observe(element.nativeElement);
    });
  }
}
