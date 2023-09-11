FROM node:18.16.0
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npx playwright install-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm","run","start"]