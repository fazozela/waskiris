import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-get-involved',
  imports: [CommonModule, TranslateModule, RouterModule],
  styleUrl: './get-involved.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!-- Hero Section -->
  <section class="relative bg-[#E71F69] text-white py-20 md:py-32">
    <div class="container mx-auto px-6">
      <div class="text-center">
        <h1 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-6xl font-bold mb-6" translate>GET_INVOLVED.hero_title</h1>
        <p #animatedElement data-animation="fadeInUp" class="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" translate>GET_INVOLVED.hero_description</p>
      </div>
    </div>
    <!-- Background decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-20 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-10 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-pink-300 rounded-full opacity-10 blur-xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-5 blur-2xl"></div>
    </div>
  </section>

  <!-- Inspirational Stories Section -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-4xl mx-auto">
        <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-[#012633] mb-8" translate>GET_INVOLVED.stories_title</h2>
        <p #animatedElement data-animation="fadeInUp" class="text-lg text-gray-700 leading-relaxed mb-8" translate>GET_INVOLVED.stories_description</p>
        <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-r from-[#E71F69] to-[#1A5066] text-white p-8 rounded-3xl shadow-xl">
          <p class="text-xl font-semibold" translate>GET_INVOLVED.stories_cta</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Photo Gallery Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold text-[#012633] mb-6" translate>GET_INVOLVED.gallery_title</h2>
        <p #animatedElement data-animation="fadeInUp" class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8" translate>GET_INVOLVED.gallery_subtitle</p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="md:w-1/2">
              <div class="relative">
                <img src="photoGroup.png" alt="Grupo de participantes" class="w-full h-80 object-cover rounded-2xl shadow-lg">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div class="md:w-1/2 text-center md:text-left">
              <h3 class="text-3xl font-bold text-[#012633] mb-4" translate>GET_INVOLVED.gallery_cta_title</h3>
              <p class="text-gray-700 leading-relaxed mb-6" translate>GET_INVOLVED.gallery_cta_description</p>
              <a href="https://www.facebook.com/photo/?fbid=941538771327572&set=a.439092384905549" 
                 target="_blank" 
                 class="bg-[#1A5066] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300 inline-flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <span translate>GET_INVOLVED.gallery_view_button</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Donation Section -->
  <section class="py-20 bg-gradient-to-br from-[#012633] to-[#1A5066] text-white">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-4xl mx-auto">
        <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold mb-8" translate>GET_INVOLVED.donation_title</h2>
        <p #animatedElement data-animation="fadeInUp" class="text-xl leading-relaxed mb-12" translate>GET_INVOLVED.donation_description</p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- QR Code Section -->
          <div #animatedElement data-animation="fadeInLeft" class="text-center">
            <div class="bg-white rounded-3xl p-8 shadow-2xl inline-block">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://chicaswaskiris.org/donate" 
                   alt="QR Code para donaciones" 
                   class="w-48 h-48 mx-auto mb-4">
              <p class="text-gray-600 font-semibold" translate>GET_INVOLVED.qr_scan_text</p>
            </div>
          </div>
          
          <!-- Donation Info -->
          <div #animatedElement data-animation="fadeInRight" class="text-center lg:text-left">
            <div class="mt-8 flex justify-center lg:justify-start">
              <a href="https://wa.me/59162736621?text=Hola,%20me%20gustaría%20hacer%20una%20donación%20a%20Chicas%20Waskiris" 
                 target="_blank" 
                 class="bg-[#E71F69] text-white px-8 py-4 rounded-full font-bold hover:bg-pink-600 transition duration-300 inline-flex items-center text-lg">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span translate>GET_INVOLVED.donate_now_button</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
})
export default class GetInvolvedComponent implements AfterViewInit, OnDestroy {
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
