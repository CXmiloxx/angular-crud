# Etapa 1: build de Angular
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build --prod

# Etapa 2: nginx
FROM nginx:alpine

# Eliminar contenido por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar el build de Angular al servidor Nginx
COPY --from=build /app/dist/angular-crud/browser /usr/share/nginx/html

EXPOSE 80
