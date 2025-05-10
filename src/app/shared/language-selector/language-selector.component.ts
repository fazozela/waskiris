import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  styleUrls: ['./language-selector.component.css'],
  template: `
  <div class="relative flex justify-center">
    <button (click)="toggleLanguageDropdown()" 
            class="flex items-center space-x-2 focus:outline-none px-3 py-1 rounded-md hover:bg-gray-100">
      <img [src]="'./assets/flags/' + currentLanguage + '.svg'" 
           [alt]="currentLanguage" 
           class="w-5 h-5 rounded-sm object-cover">
      <span class="text-gray-700 font-medium">{{ currentLanguage | uppercase }}</span>
      <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <div *ngIf="isLanguageDropdownOpen" 
         class="absolute top-full mt-2 w-32 bg-white rounded-md shadow-lg z-10 left-1/2 transform -translate-x-1/2">
      <div class="py-1">
        <button (click)="changeLanguage('es')" 
                class="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
          <img src="assets/flags/es.svg" alt="Español" class="w-5 h-5 rounded-sm object-cover">
          <span>Español</span>
        </button>
        <button (click)="changeLanguage('en')" 
                class="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600">
          <img src="assets/flags/en.svg" alt="English" class="w-5 h-5 rounded-sm object-cover">
          <span>English</span>
        </button>
      </div>
    </div>
  </div>
  `
})
export class LanguageSelectorComponent {
  private translate = inject(TranslateService);
  isLanguageDropdownOpen = false;
  currentLanguage = 'es';

  constructor() {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
    this.isLanguageDropdownOpen = false;
  }
}