import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface ImpactStat {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

@Component({
  selector: 'app-our-impact',
  imports: [CommonModule, TranslateModule, RouterModule],
  styleUrl: './our-impact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!-- Hero Section -->
  <section class="relative bg-[#E71F69] text-white py-20 md:py-32">
    <div class="container mx-auto px-6">
      <div class="text-center">
        <h1 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-6xl font-bold mb-6" translate>impact.hero_title</h1>
        <p #animatedElement data-animation="fadeInUp" class="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8" translate>impact.hero_subtitle</p>
        <p #animatedElement data-animation="fadeInUp" class="text-base md:text-lg max-w-5xl mx-auto leading-relaxed" translate>impact.hero_description</p>
      </div>
    </div>
    <!-- Background decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-20 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-10 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-pink-300 rounded-full opacity-10 blur-xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-5 blur-2xl"></div>
    </div>
  </section>

  <!-- Statistics Cards -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-center text-[#012633] mb-16" translate>impact.our_numbers_title</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Girls Impacted -->
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-[#E71F69]">
          <div class="flex items-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-[#E71F69] to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
              👩‍🎓
            </div>
            <div>
              <div class="text-4xl font-bold text-[#E71F69] mb-2">+700</div>
              <h3 class="text-lg font-semibold text-[#012633]" translate>impact.stat_girls_title</h3>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed" translate>impact.stat_girls_description</p>
        </div>

        <!-- Scholarships -->
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-[#1A5066]">
          <div class="flex items-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-[#1A5066] to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
              🎓
            </div>
            <div>
              <div class="text-4xl font-bold text-[#1A5066] mb-2">+250</div>
              <h3 class="text-lg font-semibold text-[#012633]" translate>impact.stat_scholarships_title</h3>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed" translate>impact.stat_scholarships_description</p>
        </div>

        <!-- Mentors -->
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-purple-500">
          <div class="flex items-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
              👥
            </div>
            <div>
              <div class="text-4xl font-bold text-purple-500 mb-2">+150</div>
              <h3 class="text-lg font-semibold text-[#012633]" translate>impact.stat_mentors_title</h3>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed" translate>impact.stat_mentors_description</p>
        </div>

        <!-- Teachers -->
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-green-500">
          <div class="flex items-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
              👨‍🏫
            </div>
            <div>
              <div class="text-4xl font-bold text-green-500 mb-2">12</div>
              <h3 class="text-lg font-semibold text-[#012633]" translate>impact.stat_teachers_title</h3>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed" translate>impact.stat_teachers_description</p>
        </div>

        <!-- Deaf Students -->
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-orange-500">
          <div class="flex items-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
              🤟
            </div>
            <div>
              <div class="text-4xl font-bold text-orange-500 mb-2">+25</div>
              <h3 class="text-lg font-semibold text-[#012633]" translate>impact.stat_deaf_title</h3>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed" translate>impact.stat_deaf_description</p>
        </div>

        <!-- Strategic Alliances -->
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-indigo-500">
          <div class="flex items-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
              🤝
            </div>
            <div>
              <div class="text-4xl font-bold text-indigo-500 mb-2">6</div>
              <h3 class="text-lg font-semibold text-[#012633]" translate>impact.stat_alliances_title</h3>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed" translate>impact.stat_alliances_description</p>
        </div>
      </div>

      <!-- Publications Card -->
      <div class="mt-12 max-w-4xl mx-auto">
        <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-r from-[#E71F69] to-pink-500 rounded-3xl p-8 text-white shadow-xl">
          <div class="flex items-center justify-center mb-6">
            <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold mr-6">
              📚
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">3</div>
              <h3 class="text-2xl font-semibold" translate>impact.stat_publications_title</h3>
            </div>
          </div>
          <p class="text-pink-100 leading-relaxed text-center text-lg" translate>impact.stat_publications_description</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Video Showcase -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-center text-[#012633] mb-16" translate>impact.videos_title</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <!-- Juntucha Waskiri Video -->
        <div #animatedElement data-animation="fadeInLeft" class="relative">
          <div class="rounded-3xl overflow-hidden shadow-xl p-2">
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
            <h3 class="text-2xl font-bold text-[#012633] mb-3" translate>impact.video_juntucha_title</h3>
            <p class="text-gray-600 leading-relaxed" translate>impact.video_juntucha_description</p>
          </div>
        </div>

        <!-- First Camp YouTube Video -->
        <div #animatedElement data-animation="fadeInRight" class="relative">
          <div class="rounded-3xl overflow-hidden shadow-xl p-2">
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
            <h3 class="text-2xl font-bold text-[#012633] mb-3" translate>impact.video_first_camp_title</h3>
            <p class="text-gray-600 leading-relaxed" translate>impact.video_first_camp_description</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Impact Stories -->
  <section class="py-20 bg-gray-900 relative">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 left-10 w-32 h-32 bg-[#E71F69] rounded-full opacity-10 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-[#1A5066] rounded-full opacity-10 blur-xl"></div>
    </div>
    
    <div class="relative container mx-auto px-6">
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Inclusion -->
        <div #animatedElement data-animation="fadeInUp" class="text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-[#E71F69] to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            🌈
          </div>
          <h3 class="text-2xl font-bold text-white mb-4" translate>impact.inclusion_title</h3>
          <p class="text-gray-300 leading-relaxed" translate>impact.inclusion_description</p>
        </div>

        <!-- Empowerment -->
        <div #animatedElement data-animation="fadeInUp" class="text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-[#1A5066] to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            💪
          </div>
          <h3 class="text-2xl font-bold text-white mb-4" translate>impact.empowerment_title</h3>
          <p class="text-gray-300 leading-relaxed" translate>impact.empowerment_description</p>
        </div>

        <!-- Future -->
        <div #animatedElement data-animation="fadeInUp" class="text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
            🚀
          </div>
          <h3 class="text-2xl font-bold text-white mb-4" translate>impact.future_title</h3>
          <p class="text-gray-300 leading-relaxed" translate>impact.future_description</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-20 bg-[#E71F69] text-white">
    <div class="container mx-auto px-6 text-center">
      <h2 #animatedElement data-animation="fadeInUp" class="text-3xl md:text-4xl font-bold mb-8" translate>impact.cta_title</h2>
      <p #animatedElement data-animation="fadeInUp" class="text-xl mb-8 max-w-3xl mx-auto" translate>impact.cta_description</p>
      <div #animatedElement data-animation="fadeInUp" class="flex flex-col sm:flex-row gap-4 justify-center">
        <a routerLink="/get-involved" class="bg-white text-[#E71F69] px-8 py-3 rounded-full font-bold hover:bg-pink-100 transition duration-300" translate>impact.cta_join</a>
      </div>
    </div>
  </section>
  `
})
export default class OurImpactComponent implements AfterViewInit, OnDestroy {
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
