
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Mínimo Privilegio
FROM node:18-alpine
WORKDIR /app

# Creo un usuario de sistema para no usar root (Seguridad IE2)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser


COPY --from=build /app .

EXPOSE 3001
CMD ["npm", "start"]