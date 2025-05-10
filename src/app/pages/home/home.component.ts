import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslateModule, RouterModule],
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!-- banner -->
  <section class="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 md:py-32">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4" translate>home.home_title</h1>
        <p class="text-xl mb-8" translate>home.home_subtitle</p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a routerLink="/donate-now" class="bg-white text-pink-600 px-8 py-3 rounded-full font-bold text-center hover:bg-pink-100 transition duration-300" translate>shared.donate_now</a>
          <a routerLink="/get-involved" class="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold text-center hover:bg-white hover:text-pink-600 transition duration-300" translate>home.join_us</a>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="relative rounded-xl overflow-hidden shadow-2xl">
          <video class="w-full" autoplay loop muted playsinline>
            <source src="intro_waskiris.mp4" type="video/mp4">
            Tu navegador no soporta este video.
          </video>
        </div>
      </div>
    </div>
  </section>

  <!-- About Summary -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-6" translate>home.home_about_title</h2>
        <p class="text-lg text-gray-600 mb-8" translate>home.home_about_description</p>
        <a routerLink="/about-us" class="text-pink-600 font-bold hover:text-pink-800 transition duration-300" translate>home.learn_more</a>
      </div>
    </div>
  </section>

  <!-- STEM Program Highlight -->
  <section class="py-16 bg-pink-50">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h2 class="text-3xl font-bold text-gray-800 mb-6" translate>home.home_stem_title</h2>
          <p class="text-lg text-gray-600 mb-6" translate>home.home_stem_description</p>
          <a routerLink="/our-projects" class="inline-block bg-pink-600 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-700 transition duration-300" translate>home.discover_program</a>
        </div>
        <div class="md:w-1/2">
          <div class="grid grid-cols-2 gap-4">
            <img src="assets/images/stem1.jpg" alt="STEM Workshop" class="rounded-lg shadow-md hover:scale-105 transition duration-300">
            <img src="assets/images/stem2.jpg" alt="Girls Learning" class="rounded-lg shadow-md hover:scale-105 transition duration-300">
            <img src="assets/images/stem3.jpg" alt="Hands-on Activity" class="rounded-lg shadow-md hover:scale-105 transition duration-300">
            <img src="assets/images/stem4.jpg" alt="Team Project" class="rounded-lg shadow-md hover:scale-105 transition duration-300">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="py-16 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-full h-full opacity-10">
      <div class="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-400 mix-blend-multiply filter blur-xl"></div>
      <div class="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pink-400 mix-blend-multiply filter blur-xl"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <h2 #animatedElement class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4" translate>home.WHY_CHOOSE_US</h2>
      <p #animatedElement class="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto" translate>home.WHY_CHOOSE_US_SUBTITLE</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Card 1 -->
        <div #animatedElement class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden opacity-0 [animation-delay:100ms]">
          <div class="h-40 bg-gradient-to-r from-pink-400 to-pink-700 flex items-center justify-center">
            <img src="nina_azul_1.png" alt="Programas innovadores" class="w-full h-full object-contain opacity-90">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3" translate>home.WHY_CHOOSE_1_TITLE</h3>
            <p class="text-gray-600" translate>home.WHY_CHOOSE_1_DESC</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div #animatedElement class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden opacity-0 [animation-delay:200ms]">
          <div class="h-40 bg-gradient-to-r from-purple-400 to-pink-700 flex items-center justify-center">
            <img src="nina_amarilla_4.png" alt="Comunidad de apoyo" class="w-full h-full object-contain opacity-90">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3" translate>home.WHY_CHOOSE_2_TITLE</h3>
            <p class="text-gray-600" translate>home.WHY_CHOOSE_2_DESC</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div #animatedElement class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden opacity-0 [animation-delay:300ms]">
          <div class="h-40 bg-gradient-to-r from-blue-400 to-pink-700 flex items-center justify-center">
            <img src="nina_rosa_2.png" alt="Enfoque integral" class="w-full h-full object-contain opacity-90">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3" translate>home.WHY_CHOOSE_3_TITLE</h3>
            <p class="text-gray-600" translate>home.WHY_CHOOSE_3_DESC</p>
          </div>
        </div>

        <!-- Card 4 -->
        <div #animatedElement class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden opacity-0 [animation-delay:400ms]">
          <div class="h-40 bg-gradient-to-r from-pink-400 to-pink-700 flex items-center justify-center">
            <img src="nina_azul_3.png" alt="Proyectos inclusivos" class="w-full h-full object-contain opacity-90">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3" translate>home.WHY_CHOOSE_4_TITLE</h3>
            <p class="text-gray-600" translate>home.WHY_CHOOSE_4_DESC</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div #animatedElement class="text-center mt-12 opacity-0 [animation-delay:600ms]">
        <h3 class="text-2xl font-bold text-gray-800 mb-6" translate>home.WHY_CHOOSE_CTA_TITLE</h3>
        <a routerLink="/get-involved" class="inline-block bg-gradient-to-r bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300" translate>home.JOIN_NOW</a>
      </div>
    </div>
  </section>

  <!-- Impact Stats -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12" translate>home.home_impact_title</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div *ngFor="let stat of stats" class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-pink-600 mb-2">{{stat.value}}+</div>
          <div class="text-lg text-gray-600" translate>{{stat.label}}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12" translate>home.home_testimonials_title</h2>
      <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div class="text-center">
          <p class="text-xl italic mb-6" translate>{{testimonials[currentTestimonial].quote}}</p>
          <div class="font-bold text-pink-600" translate>{{testimonials[currentTestimonial].author}}</div>
          <div class="text-gray-500" translate>{{testimonials[currentTestimonial].role}}</div>
        </div>
        <div class="flex justify-center mt-8 space-x-2">
          <button *ngFor="let item of testimonials; let index = index"
                  (click)="currentTestimonial = index"
                  class="w-3 h-3 rounded-full bg-pink-300 hover:bg-pink-600 transition duration-300"
                  [class.bg-pink-600]="currentTestimonial === index"></button>
        </div>
      </div>
    </div>
  </section>

  <!-- How to Help -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12" translate>home.home_help_title</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-pink-50 p-8 rounded-xl text-center hover:shadow-lg transition duration-300">
          <div class="text-pink-600 mb-4">
            <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4" translate>home.home_help_donate</h3>
          <p class="text-gray-600 mb-4" translate>home.home_help_donate_desc</p>
          <a routerLink="/donate-now" class="text-pink-600 font-bold hover:text-pink-800 transition duration-300" translate>home.learn_how</a>
        </div>

        <div class="bg-pink-50 p-8 rounded-xl text-center hover:shadow-lg transition duration-300">
          <div class="text-pink-600 mb-4">
            <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4" translate>home.home_help_volunteer</h3>
          <p class="text-gray-600 mb-4" translate>home.home_help_volunteer_desc</p>
          <a routerLink="/get-involved" class="text-pink-600 font-bold hover:text-pink-800 transition duration-300" translate>home.join_team</a>
        </div>

        <div class="bg-pink-50 p-8 rounded-xl text-center hover:shadow-lg transition duration-300">
          <div class="text-pink-600 mb-4">
            <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4" translate>home.home_help_partner</h3>
          <p class="text-gray-600 mb-4" translate>home.home_help_partner_desc</p>
          <a routerLink="/contact" class="text-pink-600 font-bold hover:text-pink-800 transition duration-300" translate>home.contact_us</a>
        </div>
      </div>
    </div>
  </section>

  <!-- News & Events -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12" translate>home.home_news_title</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <div class="text-pink-600 font-bold mb-2" translate>home.home_news_event</div>
          <h3 class="text-xl font-bold mb-2" translate>home.home_news_event_title</h3>
          <p class="text-gray-600 mb-4" translate>home.home_news_event_desc</p>
          <a href="#" class="text-pink-600 font-bold hover:text-pink-800 transition duration-300" translate>home.read_more</a>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <div class="text-pink-600 font-bold mb-2" translate>home.home_news_blog</div>
          <h3 class="text-xl font-bold mb-2" translate>home.home_news_blog_title</h3>
          <p class="text-gray-600 mb-4" translate>home.home_news_blog_desc</p>
          <a href="#" class="text-pink-600 font-bold hover:text-pink-800 transition duration-300" translate>home.read_more</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12" translate>home.home_partners_title</h2>
      <div class="flex flex-wrap justify-center gap-8 md:gap-16">
        <img src="assets/images/partner1.png" alt="Partner Logo" class="h-12 md:h-16 grayscale hover:grayscale-0 transition duration-300">
        <img src="assets/images/partner2.png" alt="Partner Logo" class="h-12 md:h-16 grayscale hover:grayscale-0 transition duration-300">
        <img src="assets/images/partner3.png" alt="Partner Logo" class="h-12 md:h-16 grayscale hover:grayscale-0 transition duration-300">
        <img src="assets/images/partner4.png" alt="Partner Logo" class="h-12 md:h-16 grayscale hover:grayscale-0 transition duration-300">
      </div>
    </div>
  </section>
  `
})
export default class HomeComponent {
  stats = [
    { value: 1500, label: 'home.home_stats.girls_impacted' },
    { value: 85, label: 'home.home_stats.workshops' },
    { value: 12, label: 'home.home_stats.communities' },
    { value: 30, label: 'home.home_stats.schools' }
  ];

  testimonials = [
    {
      quote: 'home.home_testimonials.quote_1',
      author: 'home.home_testimonials.author_1',
      role: 'home.home_testimonials.role_1'
    },
    {
      quote: 'home.home_testimonials.quote_2',
      author: 'home.home_testimonials.author_2',
      role: 'home.home_testimonials.role_2'
    }
  ];

  currentTestimonial = 0;

  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    this.animatedElements.forEach(el => {
      observer.observe(el.nativeElement);
    });
  }
}
