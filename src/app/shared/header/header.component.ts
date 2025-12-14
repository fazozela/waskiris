import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from "../language-selector/language-selector.component";
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, RouterLink, RouterLinkActive, LanguageSelectorComponent, TranslateModule, CommonModule],
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="bg-white shadow-md">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="waskirisLogo.png" alt="Chicas Waskiris Logo" class="h-12">
        </div>

        <!-- navegación para desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <a routerLink="/"
             routerLinkActive="text-[#E71F69]"
             [routerLinkActiveOptions]="{exact: true}"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.home' | translate }}</a>
          <a routerLink="/about-us"
             routerLinkActive="text-[#E71F69]"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.about_us' | translate }}</a>
          <a routerLink="/our-projects"
             routerLinkActive="text-[#E71F69]"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.our_projects' | translate }}</a>
          <a routerLink="/our-impact"
             routerLinkActive="text-[#E71F69]"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.impact' | translate }}</a>
          <a routerLink="/media"
             routerLinkActive="text-[#E71F69]"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.media' | translate }}</a>
          <a routerLink="/get-involved"
             routerLinkActive="text-[#E71F69]"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.get_involved' | translate }}</a>
          <!-- <a routerLink="/"
             routerLinkActive="text-[#E71F69]"
             class="bg-[#4F668C] text-white px-6 py-2 rounded-full hover:bg-[#8392BB] transition duration-300 font-medium cursor-not-allowed flex items-center gap-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17a2 2 0 002-2v-2a2 2 0 00-4 0v2a2 2 0 002 2zm6-6V9a6 6 0 10-12 0v2a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2z" />
            </svg>
            {{ 'nav.mentorStem' | translate }}
          </a> -->
          <a routerLink="/digifree"
             routerLinkActive="text-[#E71F69]"
             class="bg-[#E71F69] text-white px-6 py-2 rounded-full hover:bg-[#d11b5e] transition duration-300 font-medium flex items-center gap-2 justify-center">
            Digitalmente Libres
          </a>

          <!-- Selector de idiomas -->
          <app-language-selector></app-language-selector>
        </div>

        <!-- Menú móvil -->
        <div class="md:hidden">
          <button (click)="toggleMenu()" class="text-gray-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Menú móvil desplegable -->
      <div *ngIf="isMenuOpen" class="md:hidden bg-white py-2 px-4 shadow-lg">
        <div class="flex flex-col space-y-3">
          <a routerLink="/"
             routerLinkActive="text-[#E71F69]"
             [routerLinkActiveOptions]="{exact: true}"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.home' | translate }}</a>
          <a routerLink="/about-us"
             routerLinkActive="text-[#E71F69]"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.about_us' | translate }}</a>
          <a routerLink="/our-projects"
             routerLinkActive="text-[#E71F69]"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.our_projects' | translate }}</a>
          <a routerLink="/our-impact"
             routerLinkActive="text-[#E71F69]"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.impact' | translate }}</a>
          <a routerLink="/media"
             routerLinkActive="text-[#E71F69]"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.media' | translate }}</a>
          <a routerLink="/get-involved"
             routerLinkActive="text-[#E71F69]"
             class="text-[#4D4C46] hover:text-[#E71F69] font-medium">{{ 'nav.get_involved' | translate }}</a>
          <a routerLink="/digifree"
             routerLinkActive="text-[#E71F69]"
             class="bg-[#E71F69] text-white px-6 py-2 rounded-full hover:bg-[#d11b5e] transition duration-300 font-medium text-center flex items-center gap-2 justify-center">
            Digitalmente Libres
          </a>
          <!-- <a routerLink="/digifree"
             routerLinkActive="text-[#E71F69]"
             class="bg-[#4F668C] text-white px-6 py-2 rounded-full hover:bg-[#8392BB] transition duration-300 font-medium text-center cursor-not-allowed flex items-center gap-2 justify-center">
            {{ 'nav.mentorStem' | translate }}
          </a> -->
          <div class="pt-2">
            <app-language-selector></app-language-selector>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
