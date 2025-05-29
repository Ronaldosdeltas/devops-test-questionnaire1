# Estágio de build
FROM node:22 AS build
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run build

# Estágio de produção
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]