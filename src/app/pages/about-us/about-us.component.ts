import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, TranslateModule],
  styleUrl: './about-us.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!-- Hero Section -->
  <section class="relative bg-[#E71F69] text-white py-20 md:py-32">
    <div class="container mx-auto px-6">
      <div class="text-center">
        <h1 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-6xl font-bold mb-6" translate>about.who_we_are_title</h1>
        <p #animatedElement data-animation="fadeInUp" class="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" translate>about.who_we_are_description</p>
      </div>
    </div>
    <!-- Background decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-20 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-10 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-pink-300 rounded-full opacity-10 blur-xl"></div>
    </div>
  </section>

  <!-- Mission & Vision Cards -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Mission Card -->
        <div #animatedElement data-animation="fadeInLeft" class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#E71F69]">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-[#E71F69] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
              🎯
            </div>
            <h3 class="text-2xl font-bold text-[#012633]" translate>about.our_vision_title</h3>
          </div>
          <p class="text-gray-700 leading-relaxed text-lg" translate>about.our_vision_description</p>
        </div>

        <!-- Vision Card -->
        <div #animatedElement data-animation="fadeInRight" class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#1A5066]">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-[#1A5066] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
              🔬
            </div>
            <h3 class="text-2xl font-bold text-[#012633]" translate>about.our_mission_title</h3>
          </div>
          <p class="text-gray-700 leading-relaxed text-lg" translate>about.our_mission_description</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Values Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-center text-[#012633] mb-16" translate>about.our_values_title</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Innovation -->
        <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-[#E71F69] to-pink-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-6">
            💡
          </div>
          <h4 class="text-xl font-bold mb-4" translate>about.value_innovation_title</h4>
          <p class="text-pink-100 leading-relaxed" translate>about.value_innovation_description</p>
        </div>

        <!-- Inclusion -->
        <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-[#1A5066] to-blue-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-6">
            🤝
          </div>
          <h4 class="text-xl font-bold mb-4" translate>about.value_inclusion_title</h4>
          <p class="text-blue-100 leading-relaxed" translate>about.value_inclusion_description</p>
        </div>

        <!-- Collaboration -->
        <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-6">
            🌐
          </div>
          <h4 class="text-xl font-bold mb-4" translate>about.value_collaboration_title</h4>
          <p class="text-purple-100 leading-relaxed" translate>about.value_collaboration_description</p>
        </div>

        <!-- Integrity -->
        <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-6">
            ⚖️
          </div>
          <h4 class="text-xl font-bold mb-4" translate>about.value_integrity_title</h4>
          <p class="text-green-100 leading-relaxed" translate>about.value_integrity_description</p>
        </div>

        <!-- Scientific Curiosity -->
        <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-6">
            🔍
          </div>
          <h4 class="text-xl font-bold mb-4" translate>about.value_curiosity_title</h4>
          <p class="text-orange-100 leading-relaxed" translate>about.value_curiosity_description</p>
        </div>

        <!-- Educational Excellence -->
        <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-6">
            🎓
          </div>
          <h4 class="text-xl font-bold mb-4" translate>about.value_excellence_title</h4>
          <p class="text-indigo-100 leading-relaxed" translate>about.value_excellence_description</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Commitment Section -->
  <section class="py-20 bg-gray-900 relative">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 left-10 w-32 h-32 bg-[#E71F69] rounded-full opacity-10 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-[#1A5066] rounded-full opacity-10 blur-xl"></div>
    </div>
    
    <div class="relative container mx-auto px-6 text-center">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-white mb-8" translate>about.our_commitment_title</h2>
      <p #animatedElement data-animation="fadeInUp" class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" translate>about.our_commitment_description</p>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-center text-[#012633] mb-4" translate>about.coordination_title</h2>
      <p #animatedElement data-animation="fadeInUp" class="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto" translate>about.coordination_subtitle</p>
      
      <div class="max-w-4xl mx-auto">
        <!-- Cecilia Gonzalez Card -->
        <div #animatedElement data-animation="fadeInLeft" class="bg-gradient-to-r from-[#E71F69] to-pink-500 rounded-3xl p-8 mb-8 text-white shadow-2xl">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold flex-shrink-0">
              CG
            </div>
            <div class="text-center md:text-left">
              <h3 class="text-2xl font-bold mb-2" translate>about.cecilia_name</h3>
              <p class="text-pink-100 text-lg mb-4" translate>about.cecilia_role</p>
            </div>
          </div>
        </div>

        <!-- Casiana Quispe Card -->
        <div #animatedElement data-animation="fadeInRight" class="bg-gradient-to-r from-[#1A5066] to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold flex-shrink-0">
              CQ
            </div>
            <div class="text-center md:text-left">
              <h3 class="text-2xl font-bold mb-2" translate>about.casiana_name</h3>
              <p class="text-blue-100 text-lg mb-4" translate>about.casiana_role</p>
              <p class="text-blue-200 leading-relaxed" translate>about.casiana_description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-20 bg-[#E71F69] text-white">
    <div class="container mx-auto px-6 text-center">
      <h2 #animatedElement data-animation="fadeInUp" class="text-3xl md:text-4xl font-bold mb-8" translate>about.cta_title</h2>
      <p #animatedElement data-animation="fadeInUp" class="text-xl mb-8 max-w-3xl mx-auto" translate>about.cta_description</p>
      <div #animatedElement data-animation="fadeInUp" class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/get-involved" class="bg-white text-[#E71F69] px-8 py-3 rounded-full font-bold hover:bg-pink-100 transition duration-300" translate>about.cta_get_involved</a>
      </div>
    </div>
  </section>
  `
})
export default class AboutUsComponent implements AfterViewInit, OnDestroy {
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
