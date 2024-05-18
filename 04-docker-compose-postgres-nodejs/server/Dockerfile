# Используем образ Node.js
FROM node

# Создаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .

# Открываем порт
EXPOSE 3000

# Команда для запуска сервера
CMD ["node", "index.js"]