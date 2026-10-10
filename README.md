# Proyecto Lobia - Soluciones de Software

Sitio web oficial de **Lobia**, desarrollado con **Astro** y **React**.

## Estructura del Proyecto

Dentro del proyecto, encontrarás las siguientes carpetas y archivos principales:

```text
/
├── public/          # Archivos estáticos (imágenes, favicons, etc.)
├── src/
│   ├── components/  # Componentes React (.tsx) y Astro (.astro)
│   ├── layouts/     # Plantillas base para las páginas
│   ├── pages/       # Páginas y rutas del sitio
│   └── styles/      # Estilos globales y temas
└── package.json     # Dependencias y scripts del proyecto
```

Astro utiliza el directorio `src/pages/` para generar las rutas automáticamente basándose en los nombres de los archivos.

## 🧞 Comandos Principales

Todos los comandos deben ejecutarse desde la raíz del proyecto en una terminal:

| Comando                   | Acción                                               |
| :------------------------ | :--------------------------------------------------- |
| `npm install`             | Instala las dependencias necesarias                  |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Compila el sitio para producción en `./dist/`       |
| `npm run preview`         | Vista previa local de la compilación de producción   |
| `npm run astro -- --help` | Obtiene ayuda sobre la CLI de Astro                  |

## ⚖️ Créditos

- **Autor Técnico:** Stefano Soto
- **Desarrollado para:** Lobia
