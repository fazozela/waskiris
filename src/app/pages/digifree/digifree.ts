import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-digifree',
  imports: [CommonModule, TranslateModule, RouterModule],
  styleUrl: './digifree.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <!-- Sticky Navigation Menu -->
  <nav class="sticky top-0 z-40 bg-white shadow-lg">
    <div class="container mx-auto px-6 py-4">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
        <button (click)="scrollToSection('inicio')" class="nav-button bg-gradient-to-br from-[#E71F69] to-pink-600 hover:shadow-lg transition-all duration-300">
          <span class="font-bold text-white text-sm md:text-base">Inicio</span>
        </button>
        <button (click)="scrollToSection('delitos')" class="nav-button bg-gradient-to-br from-[#FF6B6B] to-[#FF5252] hover:shadow-lg transition-all duration-300">
          <span class="font-bold text-white text-sm md:text-base">Delitos Sexuales</span>
        </button>
        <button (click)="scrollToSection('familias')" class="nav-button bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] hover:shadow-lg transition-all duration-300">
          <span class="font-bold text-white text-sm md:text-base">Guías para Familias</span>
        </button>
        <button (click)="scrollToSection('cuidado')" class="nav-button bg-gradient-to-br from-[#1A5066] to-[#0D3B56] hover:shadow-lg transition-all duration-300">
          <span class="font-bold text-white text-sm md:text-base">Cuidado Digital</span>
        </button>
        <button (click)="scrollToSection('emergencia')" class="nav-button bg-gradient-to-br from-[#FF9F1C] to-[#FFAA3C] hover:shadow-lg transition-all duration-300 md:col-span-1">
          <span class="font-bold text-white text-sm md:text-base">Emergencia</span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="inicio" class="relative bg-gradient-to-br from-[#012633] via-[#1A5066] to-[#0D3B56] text-white py-20 md:py-32">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-4xl mx-auto">
        <div class="mb-8 flex justify-center">
          <img #animatedElement data-animation="fadeInDown" src="digilogo3.png" alt="DigitalMente Libres Logo" class="h-24 md:h-32">
        </div>
        <h1 #animatedElement data-animation="fadeInUp" class="text-5xl md:text-7xl font-bold mb-6">DigitalMente Libres</h1>
        <p #animatedElement data-animation="fadeInUp" class="text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">Prevenir, educar y acompañar para un internet más seguro.</p>
        <div #animatedElement data-animation="fadeInUp" class="flex flex-col sm:flex-row gap-4 justify-center">
          <button (click)="scrollToSection('quienes')" class="bg-[#E71F69] text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition duration-300">
            Conoce más
          </button>
          <button (click)="scrollToSection('emergencia')" class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#012633] transition duration-300">
            Necesito ayuda
          </button>
        </div>
      </div>
    </div>
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div class="absolute top-20 left-10 w-32 h-32 bg-white rounded-full opacity-5 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-[#E71F69] rounded-full opacity-5 blur-xl"></div>
    </div>
  </section>

  <!-- Quiénes Somos Section -->
  <section id="quienes" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-5xl font-bold text-[#012633] mb-8">¿Quiénes somos?</h2>
        <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
            DigitalMente Libres es una iniciativa enfocada en informar y sensibilizar a adolescentes, jóvenes y familias sobre los riesgos del entorno digital. 
            Creemos en la prevención como la herramienta más poderosa, y en el cuidado digital desde el hogar como la base para construir espacios seguros en internet.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Delitos Sexuales Digitales Section -->
  <section id="delitos" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-5xl font-bold text-[#012633] mb-16 text-center">Delitos Sexuales Digitales</h2>
      
      <!-- Qué son los delitos -->
      <div #animatedElement data-animation="fadeInLeft" class="bg-gradient-to-br from-[#FF6B6B] to-[#FF5252] text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg">
        <h3 class="text-3xl font-bold mb-6">¿Qué son los delitos sexuales digitales?</h3>
        <p class="text-lg leading-relaxed">
          Son acciones en internet o mediante dispositivos digitales que buscan manipular, engañar, coaccionar o explotar a una persona con fines sexuales. 
          Estos delitos pueden iniciar con conversaciones aparentemente inocentes que luego se vuelven peligrosas.
        </p>
      </div>

      <!-- Grooming -->
      <div #animatedElement data-animation="fadeInRight" class="bg-gradient-to-br from-[#FF8E72] to-[#FF7A59] text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg">
        <h3 class="text-3xl font-bold mb-6">¿Qué es el Grooming?</h3>
        <p class="text-lg leading-relaxed mb-8">
          Un adulto que engaña a un menor para ganar su confianza con el fin de abusar sexualmente. 
          Incluye halagos, regalos digitales, presión emocional y manipulación.
        </p>
        <div class="bg-black/20 rounded-2xl p-6">
          <h4 class="text-xl font-bold mb-4">Señales de alerta:</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="mr-3">🚨</span>
              <span>Alguien te pide ocultar conversaciones</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3">🚨</span>
              <span>Solicita fotos o información personal</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3">🚨</span>
              <span>Quiere mantener en secreto el contacto contigo</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Sextorsión -->
      <div #animatedElement data-animation="fadeInLeft" class="bg-gradient-to-br from-[#FFB347] to-[#FF9800] text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg">
        <h3 class="text-3xl font-bold mb-6">¿Qué es la Sextorsión?</h3>
        <p class="text-lg leading-relaxed mb-8">
          Cuando una persona amenaza con publicar fotos o videos íntimos si no se cumplen sus exigencias.
        </p>
        <div class="bg-black/20 rounded-2xl p-6">
          <h4 class="text-xl font-bold mb-4">Señales de alerta:</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="mr-3">⚠️</span>
              <span>"Si no haces esto, le mostraré todo a tus amigos"</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3">⚠️</span>
              <span>Chantajes emocionales o económicos</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3">⚠️</span>
              <span>Distribución no consentida de imágenes</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Trata y Reclutamiento -->
      <div #animatedElement data-animation="fadeInRight" class="bg-gradient-to-br from-[#E71F69] to-pink-600 text-white rounded-3xl p-8 md:p-12 shadow-lg">
        <h3 class="text-3xl font-bold mb-6">¿Qué es la Trata y Reclutamiento en Línea?</h3>
        <p class="text-lg leading-relaxed mb-8">
          Grupos o individuos que usan redes sociales o videojuegos para captar adolescentes mediante falsas ofertas, regalos o amistad.
        </p>
        <div class="bg-black/20 rounded-2xl p-6">
          <h4 class="text-xl font-bold mb-4">Cómo actuar:</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="mr-3">✓</span>
              <span>Guarda las evidencias</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3">✓</span>
              <span>No negocies con el agresor</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3">✓</span>
              <span>Bloquea y reporta la cuenta</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3">✓</span>
              <span>Busca ayuda de un adulto o autoridad competente</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Guías para Familias Section -->
  <section id="familias" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-5xl font-bold text-[#012633] mb-16 text-center">Guías para Familias</h2>
      
      <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg">
        <h3 class="text-2xl font-bold mb-6">¿Por qué es importante hablar de seguridad digital?</h3>
        <p class="text-lg leading-relaxed">
          Según organizaciones como UNICEF y ECPAT, el riesgo de que niños, niñas y adolescentes sean contactados por desconocidos o estén expuestos a contenido dañino aumenta cada año. 
          Pero la protección empieza en casa: un diálogo abierto y sin juicios puede prevenir situaciones de riesgo.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div #animatedElement data-animation="fadeInLeft" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center text-white text-2xl mb-4">👂</div>
          <h4 class="text-xl font-bold text-[#012633] mb-4">1. Escucha primero</h4>
          <p class="text-gray-700">Antes de preguntar, escucha. Los jóvenes comparten más cuando no sienten miedo a ser castigados.</p>
        </div>

        <div #animatedElement data-animation="fadeInRight" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center text-white text-2xl mb-4">💬</div>
          <h4 class="text-xl font-bold text-[#012633] mb-4">2. Haz preguntas abiertas</h4>
          <p class="text-gray-700 mb-4">
            • "¿Qué te gusta de internet?"<br>
            • "¿Has visto algo que te haya incomodado?"<br>
            • "¿Cómo respondes cuando alguien desconocido te escribe?"
          </p>
        </div>

        <div #animatedElement data-animation="fadeInLeft" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center text-white text-2xl mb-4">🎮</div>
          <h4 class="text-xl font-bold text-[#012633] mb-4">3. No ridiculices sus intereses</h4>
          <p class="text-gray-700">Los videojuegos, redes sociales y plataformas que usan son importantes para ellos.</p>
        </div>

        <div #animatedElement data-animation="fadeInRight" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center text-white text-2xl mb-4">🗣️</div>
          <h4 class="text-xl font-bold text-[#012633] mb-4">4. Habla sin miedo</h4>
          <p class="text-gray-700">Lo que no se nombra, no se previene. Explica con palabras simples temas como grooming, sextorsión o perfiles falsos.</p>
        </div>

        <div #animatedElement data-animation="fadeInLeft" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center text-white text-2xl mb-4">📋</div>
          <h4 class="text-xl font-bold text-[#012633] mb-4">5. Construyan acuerdos digitales</h4>
          <p class="text-gray-700 mb-4">
            <strong>6–10 años:</strong> tiempo limitado, dispositivos en espacios comunes.<br>
            <strong>11–14 años:</strong> acompañamiento y conversación frecuente.<br>
            <strong>15–18 años:</strong> confianza, pero con límites claros.
          </p>
        </div>

        <div #animatedElement data-animation="fadeInRight" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] rounded-full flex items-center justify-center text-white text-2xl mb-4">🔍</div>
          <h4 class="text-xl font-bold text-[#012633] mb-4">6. Detectá señales de riesgo</h4>
          <p class="text-gray-700 mb-4">
            • Cambios bruscos de humor<br>
            • Aislamiento<br>
            • Miedo al celular o a abrir mensajes<br>
            • Nuevxs "amigxs" misteriosos en redes
          </p>
        </div>
      </div>

      <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-[#44A08D] to-[#3D8B7D] text-white rounded-3xl p-8 md:p-12 mt-12 shadow-lg">
        <h3 class="text-2xl font-bold mb-6">7. Qué hacer si hay sospechas</h3>
        <ul class="space-y-4 text-lg">
          <li class="flex items-start">
            <span class="mr-3">💡</span>
            <span>No culpes a tu hijo.</span>
          </li>
          <li class="flex items-start">
            <span class="mr-3">💡</span>
            <span>Busca comprender, no castigar.</span>
          </li>
          <li class="flex items-start">
            <span class="mr-3">💡</span>
            <span>Contacta a una autoridad si es necesario.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Cuidado Digital en Casa Section -->
  <section id="cuidado" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-5xl font-bold text-[#012633] mb-16 text-center">Cuidado Digital en Casa</h2>
      
      <!-- Downloadable Resources -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div #animatedElement data-animation="fadeInLeft" class="bg-gradient-to-br from-[#1A5066] to-[#0D3B56] text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
          <div class="text-4xl mb-4">📖</div>
          <h3 class="text-xl font-bold mb-3">Aprende a Protegerte</h3>
          <p class="text-sm mb-4">Guía para adolescentes</p>
          <button class="w-full bg-white text-[#1A5066] px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition">Descargar</button>
        </div>

        <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
          <div class="text-4xl mb-4">👨‍👩‍👧‍👦</div>
          <h3 class="text-xl font-bold mb-3">Guías para Padres</h3>
          <p class="text-sm mb-4">Consejos y estrategias</p>
          <button class="w-full bg-white text-[#44A08D] px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition">Descargar</button>
        </div>

        <div #animatedElement data-animation="fadeInRight" class="bg-gradient-to-br from-[#E71F69] to-pink-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
          <div class="text-4xl mb-4">📝</div>
          <h3 class="text-xl font-bold mb-3">Acuerdo Digital Familiar</h3>
          <p class="text-sm mb-4">Documento descargable</p>
          <button class="w-full bg-white text-[#E71F69] px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition">Descargar</button>
        </div>

        <div #animatedElement data-animation="fadeInDown" class="bg-gradient-to-br from-[#FF9F1C] to-[#FFAA3C] text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
          <div class="text-4xl mb-4">⚖️</div>
          <h3 class="text-xl font-bold mb-3">Ley 1636</h3>
          <p class="text-sm mb-4">Marco legal en Bolivia</p>
          <button class="w-full bg-white text-[#FF9F1C] px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition">Leer más</button>
        </div>
      </div>

      <!-- Ley 1636 Section -->
      <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-[#FF9F1C] to-[#FFAA3C] text-white rounded-3xl p-8 md:p-12 shadow-lg">
        <h3 class="text-3xl font-bold mb-8">Ley 1636: Marco Legal en Bolivia</h3>
        
        <div class="mb-8">
          <h4 class="text-xl font-bold mb-4">¿Qué es la Ley 1636?</h4>
          <p class="mb-6 text-lg leading-relaxed">
            En Bolivia, la ley 1636 crea nuevos delitos en el Código Penal relacionados con lo que ocurre en entornos digitales, especialmente cuando se afecta la integridad sexual de niñas, niños y adolescentes.
          </p>
          <div class="bg-black/20 rounded-2xl p-6 space-y-3">
            <p class="flex items-start">
              <span class="mr-3">✔</span>
              <span>Contactar a menores con fines sexuales mediante medios electrónicos</span>
            </p>
            <p class="flex items-start">
              <span class="mr-3">✔</span>
              <span>Abuso sexual digital</span>
            </p>
            <p class="flex items-start">
              <span class="mr-3">✔</span>
              <span>Exposición de menores a contenido sexual</span>
            </p>
            <p class="flex items-start">
              <span class="mr-3">✔</span>
              <span>Producción, posesión y difusión de material sexual infantil</span>
            </p>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-bold mb-4">¿Qué significa esto para los padres?</h4>
          <ul class="space-y-4 text-lg">
            <li class="flex items-start">
              <span class="mr-3">→</span>
              <span>Esta ley le da a las autoridades herramientas legales claras para actuar si una niña, niño o adolescente es víctima de delitos sexuales digitales.</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3">→</span>
              <span>Permite denunciar más fácilmente situaciones de grooming, sextorsión y otros riesgos en línea.</span>
            </li>
            <li class="flex items-start">
              <span class="mr-3">→</span>
              <span>Refuerza la idea de que la protección de los menores en línea es una responsabilidad compartida entre familia y Estado.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Ayuda y Recursos de Emergencia Section -->
  <section id="emergencia" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl md:text-5xl font-bold text-[#012633] mb-16 text-center">Ayuda y Recursos de Emergencia</h2>
      
      <div #animatedElement data-animation="fadeInUp" class="bg-gradient-to-br from-[#FF6B6B] to-[#FF5252] text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg">
        <h3 class="text-2xl font-bold mb-6">Si algo te está pasando, no estás solo/a</h3>
        <p class="text-lg mb-6">Hay pasos claros para actuar. Si estás en peligro o te están extorsionando:</p>
        <ul class="space-y-4 text-lg">
          <li class="flex items-start">
            <span class="mr-3">⚠️</span>
            <span>No respondas ni negocies</span>
          </li>
          <li class="flex items-start">
            <span class="mr-3">⚠️</span>
            <span>Guarda evidencias: capturas, links, perfiles</span>
          </li>
          <li class="flex items-start">
            <span class="mr-3">⚠️</span>
            <span>Bloquea al agresor</span>
          </li>
          <li class="flex items-start">
            <span class="mr-3">⚠️</span>
            <span>Habla con un adulto de confianza</span>
          </li>
          <li class="flex items-start">
            <span class="mr-3">⚠️</span>
            <span>Denuncia en la plataforma (Instagram, TikTok, Facebook)</span>
          </li>
          <li class="flex items-start">
            <span class="mr-3">⚠️</span>
            <span>Busca ayuda profesional o institucional</span>
          </li>
        </ul>
      </div>

      <!-- Cómo guardar evidencia -->
      <div #animatedElement data-animation="fadeInLeft" class="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12 border-l-8 border-[#4ECDC4]">
        <h3 class="text-3xl font-bold text-[#012633] mb-8">Cómo guardar evidencia correctamente</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start">
            <div class="w-10 h-10 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
            <p class="text-gray-700 text-lg">Realiza capturas de pantalla completas</p>
          </div>
          <div class="flex items-start">
            <div class="w-10 h-10 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
            <p class="text-gray-700 text-lg">Guarda el enlace del perfil</p>
          </div>
          <div class="flex items-start">
            <div class="w-10 h-10 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
            <p class="text-gray-700 text-lg">No elimines los mensajes</p>
          </div>
          <div class="flex items-start">
            <div class="w-10 h-10 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
            <p class="text-gray-700 text-lg">Anota la fecha y hora</p>
          </div>
        </div>
        <p class="text-gray-700 text-lg mt-8 pt-8 border-t-2 border-gray-200">
          <strong>Esto puede ser útil para la denuncia.</strong>
        </p>
      </div>

      <!-- Help Resources Grid -->
      <h3 #animatedElement data-animation="fadeInUp" class="text-3xl font-bold text-[#012633] mb-12 text-center">Dónde pedir ayuda</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Emotional Support -->
        <div #animatedElement data-animation="fadeInLeft" class="bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] text-white rounded-3xl p-8 shadow-lg">
          <div class="text-5xl mb-4">💚</div>
          <h4 class="text-2xl font-bold mb-4">Apoyo emocional y Psicológico Gratuito</h4>
          <p class="mb-6 text-lg">DESAHOGATE es una línea gratuita con la que puedes contactar a través de:</p>
          <div class="bg-black/20 rounded-2xl p-6">
            <p class="text-lg font-bold mb-3">📞 Teléfono: 800-11-30-40</p>
            <div class="flex items-center justify-between">
              <p class="text-lg font-bold">📱 WhatsApp: 77797667</p>
              <a href="http://wa.me/59177797667" target="_blank" class="bg-white text-[#25D366] px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Contactar</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Formal Complaint -->
        <div #animatedElement data-animation="fadeInRight" class="bg-gradient-to-br from-[#E71F69] to-pink-600 text-white rounded-3xl p-8 shadow-lg">
          <div class="text-5xl mb-4">⚖️</div>
          <h4 class="text-2xl font-bold mb-4">Realizar una Denuncia Formal</h4>
          <p class="mb-6 text-lg">S.O.S. Digital puede asesorarte y dar el acompañamiento necesario:</p>
          <div class="bg-black/20 rounded-2xl p-6">
            <p class="text-lg font-bold mb-3">📱 S.O.S. Digital: 62342430</p>
            <p class="text-sm mb-4 opacity-90">Disponible en WhatsApp, Signal y Telegram</p>
            <div class="flex items-center justify-end">
              <a href="http://wa.me/59162342430" target="_blank" class="bg-white text-[#E71F69] px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Contactar</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Resources -->
      <div #animatedElement data-animation="fadeInUp" class="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-2 border-[#FF9F1C]">
        <h3 class="text-2xl font-bold text-[#012633] mb-8">Otros recursos disponibles</h3>
        
        <div class="space-y-6">
          <div class="flex items-start pb-6 border-b-2 border-gray-200">
            <div class="text-4xl mr-6">🚔</div>
            <div>
              <h4 class="text-xl font-bold text-[#012633] mb-2">Plataforma de la Policía Boliviana</h4>
              <p class="text-gray-700">Puedes realizar tu denuncia directamente en la plataforma oficial de la Policía Boliviana.</p>
            </div>
          </div>

          <div class="flex items-start pb-6 border-b-2 border-gray-200">
            <div class="text-4xl mr-6">👩‍⚖️</div>
            <div>
              <h4 class="text-xl font-bold text-[#012633] mb-2">Para mujeres: SLIM</h4>
              <p class="text-gray-700">Si eres mujer, puedes recurrir al SLIM (Servicio Legal Integral Municipal) más cercano para recibir apoyo legal gratuito.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="text-4xl mr-6">👧</div>
            <div>
              <h4 class="text-xl font-bold text-[#012633] mb-2">Para menores de edad</h4>
              <p class="text-gray-700">La denuncia se puede realizar en la Defensoría de la Niñez y Adolescencia, que brinda protección especializada para menores.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action Footer -->
  <section class="py-20 bg-gradient-to-br from-[#012633] to-[#1A5066] text-white">
    <div class="container mx-auto px-6 text-center">
      <h2 #animatedElement data-animation="fadeInUp" class="text-4xl font-bold mb-6">Tu seguridad es nuestra prioridad</h2>
      <p #animatedElement data-animation="fadeInUp" class="text-xl mb-8 max-w-2xl mx-auto">
        No estás solo/a. Si necesitas ayuda, hay recursos y personas que te apoyan. El primer paso es hablar.
      </p>
      <div #animatedElement data-animation="fadeInUp" class="flex flex-col sm:flex-row gap-4 justify-center">
        <button (click)="scrollToSection('emergencia')" class="bg-[#E71F69] text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition duration-300">
          Necesito Ayuda Ahora
        </button>
        <button (click)="scrollToSection('familias')" class="bg-[#4ECDC4] text-white px-8 py-3 rounded-full font-bold hover:bg-teal-500 transition duration-300">
          Hablar con Familia
        </button>
      </div>
    </div>
  </section>
  `
})
export default class DigifreeComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  ngOnDestroy() {
    // Clean up any observers if needed
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
