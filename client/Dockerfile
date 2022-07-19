FROM node:16.15.0-alpine as build

WORKDIR /app
COPY . /app

RUN npm install --silent
RUN npm run build


FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/
COPY --from=build app/build /usr/share/nginx/html 
