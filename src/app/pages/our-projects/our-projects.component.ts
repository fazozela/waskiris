import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  id: string;
  title: string;
  year: string;
  objective: string;
  achievements: string[];
  impact: string;
  image?: string;
  video?: string;
  logo?: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  color: string;
}

@Component({
  selector: 'app-our-projects',
  imports: [CommonModule, TranslateModule, RouterModule],
  styleUrl: './our-projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!-- Hero Section -->
  <section class="relative bg-[#E71F69] text-white py-20 md:py-32">
    <div class="container mx-auto px-6">
      <div class="text-center">
        <h1 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-6xl font-bold mb-6" translate>projects.hero_title</h1>
        <p #animatedElement data-animation="fadeInUp" class="text-lg md:text-xl max-w-5xl mx-auto leading-relaxed" translate>projects.hero_description</p>
      </div>
    </div>
    <!-- Background decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-20 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-10 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-pink-300 rounded-full opacity-10 blur-xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-5 blur-2xl"></div>
    </div>
  </section>

  <!-- Projects Timeline -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#E71F69] to-[#1A5066] h-full rounded-full hidden md:block"></div>
        
        <!-- Project Cards -->
        <div class="space-y-16">
          <!-- STEM en tus Manos (2024-2025) -->
          <div #animatedElement data-animation="fadeInLeft" class="flex flex-col md:flex-row items-center relative">
            <div class="md:w-1/2 md:pr-12">
              <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#E71F69]">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-[#E71F69] to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    🤟
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-[#012633]" translate>projects.stem_hands_title</h3>
                    <span class="text-sm bg-[#E71F69] text-white px-3 py-1 rounded-full" translate>projects.stem_hands_year</span>
                  </div>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-[#E71F69] mb-2" translate>projects.objective_label</h4>
                  <p class="text-gray-700 leading-relaxed" translate>projects.stem_hands_objective</p>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-[#E71F69] mb-2" translate>projects.achievements_label</h4>
                  <ul class="text-gray-700 space-y-1">
                    <li class="flex items-start" translate><span class="text-[#E71F69] mr-2">•</span>projects.stem_hands_achievement_1</li>
                    <li class="flex items-start" translate><span class="text-[#E71F69] mr-2">•</span>projects.stem_hands_achievement_2</li>
                    <li class="flex items-start" translate><span class="text-[#E71F69] mr-2">•</span>projects.stem_hands_achievement_3</li>
                    <li class="flex items-start" translate><span class="text-[#E71F69] mr-2">•</span>projects.stem_hands_achievement_4</li>
                    <li class="flex items-start" translate><span class="text-[#E71F69] mr-2">•</span>projects.stem_hands_achievement_5</li>
                  </ul>
                </div>
                <div class="p-4 bg-pink-50 rounded-lg">
                  <h4 class="font-semibold text-[#E71F69] mb-2" translate>projects.impact_label</h4>
                  <p class="text-gray-700 italic" translate>projects.stem_hands_impact</p>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <div class="relative">
                <img src="stem.png" alt="STEM en tus Manos" class="w-full h-120 rounded-3xl shadow-lg">
                <div class="absolute inset-0 rounded-3xl"></div>
              </div>
            </div>
            <!-- Timeline dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#E71F69] rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          </div>

          <!-- Mentoras y Aprendices (2024) -->
          <div #animatedElement data-animation="fadeInRight" class="flex flex-col md:flex-row-reverse items-center relative">
            <div class="md:w-1/2 md:pl-12">
              <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#1A5066]">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-[#1A5066] to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    👩‍🏫
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-[#012633]" translate>projects.mentors_title</h3>
                    <span class="text-sm bg-[#1A5066] text-white px-3 py-1 rounded-full" translate>projects.mentors_year</span>
                  </div>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-[#1A5066] mb-2" translate>projects.objective_label</h4>
                  <p class="text-gray-700 leading-relaxed" translate>projects.mentors_objective</p>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-[#1A5066] mb-2" translate>projects.achievements_label</h4>
                  <ul class="text-gray-700 space-y-1">
                    <li class="flex items-start" translate><span class="text-[#1A5066] mr-2">•</span>projects.mentors_achievement_1</li>
                    <li class="flex items-start" translate><span class="text-[#1A5066] mr-2">•</span>projects.mentors_achievement_2</li>
                    <li class="flex items-start" translate><span class="text-[#1A5066] mr-2">•</span>projects.mentors_achievement_3</li>
                  </ul>
                </div>
                <div class="p-4 bg-blue-50 rounded-lg">
                  <h4 class="font-semibold text-[#1A5066] mb-2" translate>projects.impact_label</h4>
                  <p class="text-gray-700 italic" translate>projects.mentors_impact</p>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 md:pr-12 mt-8 md:mt-0">
              <div class="relative">
                <img src="mentoras-y-aprendices.png" alt="Mentoras y Aprendices" class="w-full h-64 object-cover rounded-3xl shadow-lg">
                <div class="absolute inset-0 rounded-3xl"></div>
              </div>
            </div>
            <!-- Timeline dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1A5066] rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          </div>

          <!-- Impulsa STEM (2023) -->
          <div #animatedElement data-animation="fadeInLeft" class="flex flex-col md:flex-row items-center relative">
            <div class="md:w-1/2 md:pr-12">
              <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    🚀
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-[#012633]" translate>projects.impulsa_title</h3>
                    <span class="text-sm bg-purple-500 text-white px-3 py-1 rounded-full" translate>projects.impulsa_year</span>
                  </div>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-purple-500 mb-2" translate>projects.objective_label</h4>
                  <p class="text-gray-700 leading-relaxed" translate>projects.impulsa_objective</p>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-purple-500 mb-2" translate>projects.achievements_label</h4>
                  <ul class="text-gray-700 space-y-1">
                    <li class="flex items-start" translate><span class="text-purple-500 mr-2">•</span>projects.impulsa_achievement_1</li>
                    <li class="flex items-start" translate><span class="text-purple-500 mr-2">•</span>projects.impulsa_achievement_2</li>
                    <li class="flex items-start" translate><span class="text-purple-500 mr-2">•</span>projects.impulsa_achievement_3</li>
                  </ul>
                </div>
                <div class="p-4 bg-purple-50 rounded-lg">
                  <h4 class="font-semibold text-purple-500 mb-2" translate>projects.impact_label</h4>
                  <p class="text-gray-700 italic" translate>projects.impulsa_impact</p>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <div class="relative">
                <img src="cohete.png" alt="Impulsa STEM" class="w-full h-64 object-contain rounded-3xl">
                <div class="absolute inset-0 rounded-3xl"></div>
              </div>
            </div>
            <!-- Timeline dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          </div>

          <!-- Juntucha Waskiri (2021-2022) -->
          <div #animatedElement data-animation="fadeInRight" class="flex flex-col md:flex-row-reverse items-center relative">
            <div class="md:w-1/2 md:pl-12">
              <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    🏕️
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-[#012633]" translate>projects.juntucha_virtual_title</h3>
                    <span class="text-sm bg-green-500 text-white px-3 py-1 rounded-full" translate>projects.juntucha_virtual_year</span>
                  </div>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-green-500 mb-2" translate>projects.objective_label</h4>
                  <p class="text-gray-700 leading-relaxed" translate>projects.juntucha_virtual_objective</p>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-green-500 mb-2" translate>projects.achievements_label</h4>
                  <ul class="text-gray-700 space-y-1">
                    <li class="flex items-start" translate><span class="text-green-500 mr-2">•</span>projects.juntucha_virtual_achievement_1</li>
                    <li class="flex items-start" translate><span class="text-green-500 mr-2">•</span>projects.juntucha_virtual_achievement_2</li>
                    <li class="flex items-start" translate><span class="text-green-500 mr-2">•</span>projects.juntucha_virtual_achievement_3</li>
                  </ul>
                </div>
                <div class="p-4 bg-green-50 rounded-lg">
                  <h4 class="font-semibold text-green-500 mb-2" translate>projects.impact_label</h4>
                  <p class="text-gray-700 italic" translate>projects.juntucha_virtual_impact</p>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 md:pr-12 mt-8 md:mt-0">
              <div class="relative rounded-3xl overflow-hidden shadow-lg">
                <video 
                  class="w-full h-64 object-cover rounded-3xl" 
                  controls 
                  poster="juntucha1.png"
                  preload="metadata">
                  <source src="SpotJuntuchaWaskiris.mp4" type="video/mp4">
                  <p class="text-gray-500 p-4">Tu navegador no soporta videos HTML5. <a href="SpotJuntuchaWaskiris.mp4" class="text-green-500 underline">Descarga el video aquí</a>.</p>
                </video>
              </div>
            </div>
            <!-- Timeline dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          </div>

          <!-- First STEM Camp (2019) -->
          <div #animatedElement data-animation="fadeInLeft" class="flex flex-col md:flex-row items-center relative">
            <div class="md:w-1/2 md:pr-12">
              <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    🌟
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-[#012633]" translate>projects.first_camp_title</h3>
                    <span class="text-sm bg-orange-500 text-white px-3 py-1 rounded-full" translate>projects.first_camp_year</span>
                  </div>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-orange-500 mb-2" translate>projects.objective_label</h4>
                  <p class="text-gray-700 leading-relaxed" translate>projects.first_camp_objective</p>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-orange-500 mb-2" translate>projects.achievements_label</h4>
                  <ul class="text-gray-700 space-y-1">
                    <li class="flex items-start" translate><span class="text-orange-500 mr-2">•</span>projects.first_camp_achievement_1</li>
                    <li class="flex items-start" translate><span class="text-orange-500 mr-2">•</span>projects.first_camp_achievement_2</li>
                  </ul>
                </div>
                <div class="p-4 bg-orange-50 rounded-lg">
                  <h4 class="font-semibold text-orange-500 mb-2" translate>projects.impact_label</h4>
                  <p class="text-gray-700 italic" translate>projects.first_camp_impact</p>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <div class="relative rounded-3xl overflow-hidden shadow-lg">
                <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
                  <iframe 
                    class="absolute top-0 left-0 w-full h-full rounded-3xl"
                    src="https://www.youtube.com/embed/hgA4Ymp5LhI?rel=0&modestbranding=1"
                    title="Primer Campamento STEM Chicas Waskiris 2019"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                  </iframe>
                </div>
                <div class="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <div class="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <p class="text-xs text-gray-800 font-medium" translate>projects.founding_moment</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Timeline dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Statistics Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-center text-[#012633] mb-16" translate>projects.our_impact_numbers</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div #animatedElement data-animation="fadeInUp" class="text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-[#E71F69] to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
            300+
          </div>
          <h3 class="text-xl font-semibold text-[#012633] mb-2" translate>projects.stat_girls_impacted</h3>
          <p class="text-gray-600" translate>projects.stat_girls_description</p>
        </div>
        
        <div #animatedElement data-animation="fadeInUp" class="text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-[#1A5066] to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
            50+
          </div>
          <h3 class="text-xl font-semibold text-[#012633] mb-2" translate>projects.stat_workshops</h3>
          <p class="text-gray-600" translate>projects.stat_workshops_description</p>
        </div>
        
        <div #animatedElement data-animation="fadeInUp" class="text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
            15+
          </div>
          <h3 class="text-xl font-semibold text-[#012633] mb-2" translate>projects.stat_communities</h3>
          <p class="text-gray-600" translate>projects.stat_communities_description</p>
        </div>
        
        <div #animatedElement data-animation="fadeInUp" class="text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
            5
          </div>
          <h3 class="text-xl font-semibold text-[#012633] mb-2" translate>projects.stat_years</h3>
          <p class="text-gray-600" translate>projects.stat_years_description</p>
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
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-white mb-8" translate>projects.cta_title</h2>
      <p #animatedElement data-animation="fadeInUp" class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8" translate>projects.cta_description</p>
      <div #animatedElement data-animation="fadeInUp" class="flex flex-col sm:flex-row gap-4 justify-center">
        <a routerLink="/get-involved" class="bg-[#E71F69] text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition duration-300" translate>projects.cta_get_involved</a>
      </div>
    </div>
  </section>
  `
})
export default class OurProjectsComponent implements AfterViewInit, OnDestroy {
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
