# Verificador de Stock de Zapatillas

Este proyecto consiste en un backend desarrollado en Express que tiene como objetivo verificar el stock de zapatillas en línea. Se utiliza Playwright para realizar scraping a una página web específica y obtener información actualizada sobre la disponibilidad de un producto.

## Características Destacadas

- **Scraping de Stock:** El backend utiliza Playwright para realizar scraping en la página web de la tienda de zapatillas y extraer datos precisos sobre el stock actual de productos.

- **API de Verificación:** Se expone un endpoint en la API que me permite verificar el stock de zapatillas en tiempo real. Cada vez que se llama al endpoint, se verifica la disponibilidad.

- **Automatización:** Además de la llamada manual a la API, se desplegó una función Lambda en AWS que realiza llamadas periódicas al endpoint de la API, permitiendo una verificación constante del stock cada 30 minutos, entre las 9:00 a.m. y las 10:00 p.m., todos los días.

## Tecnologías Utilizadas

- **Express:** Framework de Node.js para construir la infraestructura del backend y manejar las rutas de la API.

- **Playwright:** Librería para automatizar navegadores y realizar scraping.

- **AWS Lambda:** Plataforma de cómputo sin servidor utilizada para ejecutar la función que verifica automáticamente el stock.
