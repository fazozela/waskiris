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
        routerLinkActive="text-pink-600"
        [routerLinkActiveOptions]="{exact: true}"
        class="text-gray-700 hover:text-pink-600 font-medium">{{ 'nav.home' | translate }}</a>
        <a routerLink="/about-us"
        routerLinkActive="text-pink-600"
        class="text-gray-700 hover:text-pink-600 font-medium">{{ 'nav.about_us' | translate }}</a>
        <a routerLink="/our-projects"
        routerLinkActive="text-pink-600"
        class="text-gray-700 hover:text-pink-600 font-medium">{{ 'nav.our_projects' | translate }}</a>
        <a routerLink="/our-impact" 
        routerLinkActive="text-pink-600"
        class="text-gray-700 hover:text-pink-600 font-medium">{{ 'nav.our_impact' | translate }}</a>
        <a routerLink="/get-involved" 
        routerLinkActive="text-pink-600"
        class="text-gray-700 hover:text-pink-600 font-medium">{{ 'nav.get_involved' | translate }}</a>
        <a routerLink="/donate-now" 
        routerLinkActive="text-pink-600"
        class="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300 font-medium">{{ 'shared.donate_now' | translate }}</a>

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
        routerLinkActive="text-pink-600" 
        [routerLinkActiveOptions]="{exact: true}" 
        class="text-gray-700 hover:text-pink-600 font-medium">{{ 'nav.home' | translate }}</a>
        <a routerLink="/about-us" 
        routerLinkActive="text-pink-600" 
        class="text-gray-700 hover:text-pink-600 font-medium">{{ 'nav.about_us' | translate }}</a>
        <a routerLink="/our-projects" 
        routerLinkActive="text-pink-600"
        class="text-gray-700 hover:text-pink-600 font-medium">{{ 'nav.our_projects' | translate }}</a>
        <a routerLink="/our-impact" 
        routerLinkActive="text-pink-600"
        class="text-gray-700 hover:text-pink-600 font-medium">{{ 'nav.our_impact' | translate }}</a>
        <a routerLink="/get-involved" 
        routerLinkActive="text-pink-600"
        class="text-gray-700 hover:text-pink-600 font-medium">{{ 'nav.get_involved' | translate }}</a>
        <a routerLink="/donate-now" 
        routerLinkActive="text-pink-600"
        class="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300 font-medium text-center">{{ 'shared.donate_now' | translate }}</a>

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
