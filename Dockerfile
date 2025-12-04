# Stage 1: Install dependencies
FROM node:20 AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci


# Stage 2: Build Next.js
FROM node:20 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


# Stage 3: Runtime
FROM node:20 AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY package.json package-lock.json ./

RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
