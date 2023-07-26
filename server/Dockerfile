# Используем базовый образ node:latest
FROM node:latest

# Устанавливаем зависимости
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копируем исходный код
COPY . .

ENV SERVER_URL=http://backend:5000

EXPOSE 5000 27017

# Запускаем приложение
CMD ["npm", "run", "dev"]