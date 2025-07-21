# Dockerfile
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build --prod

# Etapa final: usar Nginx para servir la app Angular
FROM nginx:alpine
COPY --from=build /app/dist/angular-crud /usr/share/nginx/html

# Copiar configuración personalizada de Nginx si la tienes (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf
