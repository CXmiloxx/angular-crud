# Dockerfile
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build --prod

# Etapa final: usar Nginx para servir la app Angular
FROM nginx:alpine
COPY --from=build /app/dist/angular-crud /usr/share/nginx/html
