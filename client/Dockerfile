# Используем базовый образ node:latest
FROM node:latest

# Устанавливаем зависимости
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копируем исходный код
COPY . .

ENV SERVER_URL=http://backend:5000

EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]