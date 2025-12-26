# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
# Menambahkan libc6-compat sering diperlukan untuk library tertentu di Alpine
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm ci

# Stage 2: Build Next.js
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Runtime (Ini yang bikin ringan!)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Hanya ambil yang bener-bener butuh buat running
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]