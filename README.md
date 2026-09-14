# CAPKA3D

Sitio web estático de CAPKA3D, un estudio de impresión 3D por encargo en PLA, con catálogo de piezas disponibles y cotización directa por WhatsApp.

## Características

- Landing responsive con estética premium.
- Catálogo de figuras, secamate y soportes para PlayStation y celular.
- Imágenes optimizadas en formato WebP.
- Formulario de cotización que prepara un mensaje para WhatsApp.
- Navegación de una sola página, sin dependencias ni compilación.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla

## Ejecutar localmente

No requiere instalación. Abrí `index.html` en el navegador.

Para desarrollo, podés utilizar la extensión **Live Server** de VS Code para servir el proyecto localmente.

## Estructura

```text
.
├── assets/
│   ├── webp/          # Imágenes optimizadas usadas por el sitio
│   ├── figuras/       # Fotos originales de figuras
│   └── logo-mark.svg  # Logo del sitio
├── index.html         # Página principal
├── styles.css         # Estilos y responsive design
├── script.js          # Menú y flujo de cotización por WhatsApp
├── LICENSE            # Licencia MIT
└── README.md
```

## Catálogo actual

- Bustos y figuras decorativas en PLA.
- Secamate.
- Soporte geométrico para joystick de PlayStation 4 / 5.
- Soporte PlayStation clásico para joystick de PlayStation 4 / 5.
- Soporte plegable para celular.

Los colores, medidas, stock y precios se confirman por mensaje.

## Configuración de WhatsApp

El número de contacto se define en `script.js`:

```js
const WHATSAPP_NUMBER = "59892467494";
```

Reemplazalo por el número que corresponda, en formato internacional y sin `+`, espacios ni guiones.

## Publicar en GitHub Pages

1. Subí el proyecto al repositorio.
2. En GitHub, abrí **Settings → Pages**.
3. En **Build and deployment**, elegí **Deploy from a branch**.
4. Seleccioná la rama principal y la carpeta `/ (root)`.
5. Guardá los cambios.

GitHub Pages publicará automáticamente `index.html` como página de inicio.

## Licencia

Este proyecto se distribuye bajo la [licencia MIT](LICENSE).
