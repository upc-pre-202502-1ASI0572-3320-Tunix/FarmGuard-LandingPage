# 🐄 FarmGuard MVP

> Monitoreo inteligente para granjas modernas

## 📋 Descripción

FarmGuard es una landing page para un sistema de monitoreo de ganado en tiempo real. Este MVP presenta los beneficios, planes y características principales del producto de manera atractiva y profesional.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones
- **📱 Responsive**: Adaptado para desktop, tablet y móvil
- **🚀 Optimizado**: Carga rápida con CSS y JavaScript puros
- **🎯 UX Amigable**: Navegación suave y menú hamburguesa para móviles
- **💫 Interactivo**: Efectos hover, animaciones y formularios funcionales

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS y flexbox/grid
- **JavaScript**: Interactividad y funcionalidades del cliente
- **Font Awesome**: Iconos sociales
- **Google Fonts**: Tipografía Inter

## 📁 Estructura del Proyecto

```
farmguard-mvp/
│
├── index.html          # Archivo principal HTML
├── assets/
│   ├── images/
│   │   └── garden.png  # Imagen hero
│   └── styles/
│       └── styles.css  # Estilos CSS (opcional)
└── README.md
```

## 🚀 Instalación y Uso

### Opción 1: Descarga Directa
1. Descarga el archivo HTML
2. Asegúrate de tener la imagen `garden.png` en `./assets/garden.png`
3. Abre `index.html` en tu navegador

### Opción 2: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (usando npx)
npx serve .

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000`

## 📱 Secciones Incluidas

- **🏠 Hero**: Mensaje principal y call-to-action
- **✅ Beneficios**: 6 beneficios clave del producto
- **💰 Planes**: 3 opciones de precios (Free, Platinum, Gold)
- **🎥 Nosotros**: Videos del equipo y producto
- **📧 Contacto**: Newsletter y información de contacto

## 🎨 Personalización

### Colores Principales
```css
--primary-green: #22c55e    /* Verde principal */
--dark-green: #16a34a       /* Verde oscuro */
--accent-blue: #3b82f6      /* Azul acento */
--dark-bg: #0f172a          /* Fondo oscuro */
```

### Imágenes Requeridas
- `./assets/garden.png` - Imagen principal del hero (500x400px recomendado)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Mobile**: ≤ 768px

## 🌟 Funcionalidades JavaScript

- Menú hamburguesa móvil
- Navegación suave entre secciones
- Header dinámico al hacer scroll
- Animaciones de entrada con Intersection Observer
- Validación básica de formularios

## 🔧 Personalización Rápida

### Cambiar Textos
Edita directamente en el HTML los textos de:
- Título principal en `.hero-title`
- Beneficios en `.benefit-card`
- Precios en `.plan-price`

### Cambiar Videos
Reemplaza los enlaces de YouTube en:
```html
<iframe src="https://www.youtube.com/embed/TU_VIDEO_ID"></iframe>
```

### Cambiar Colores
Modifica las variables CSS en `:root` dentro del `<style>`

## 📞 Soporte

Para consultas sobre este MVP, puedes:
- Revisar el código fuente
- Adaptar según tus necesidades
- Escalar a una aplicación completa

## 📝 Notas del MVP

- **Formularios**: Solo validación front-end (no hay backend)
- **Videos**: Enlaces a YouTube de ejemplo
- **Imágenes**: Usa placeholders o tus propias imágenes
- **Datos**: Contenido de muestra para demostración

## 🚀 Próximos Pasos

Para convertir en aplicación completa:
1. Agregar backend (Node.js, PHP, Python)
2. Integrar base de datos
3. Sistema de autenticación
4. Dashboard de usuario
5. API para dispositivos IoT

---

**FarmGuard MVP v1.0** - Desarrollado con ❤️ para la gestión ganadera moderna