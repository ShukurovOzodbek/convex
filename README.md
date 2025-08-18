```
tg-bot-constructor/
├─ apps/
│  ├─ admin/                     # Next.js 15 (App Router) — UI/конструктор/дашборды
│  │  ├─ app/                    # маршруты, layout, серверные actions
│  │  ├─ components/             # UI-компоненты
│  │  ├─ features/               # фичи: editor, billing, auth, analytics
│  │  ├─ libs/                   # запросы (SDK), хелперы, hooks
│  │  ├─ public/
│  │  ├─ styles/
│  │  └─ next.config.ts
│  │
│  ├─ gateway/                   # NestJS — Auth/RBAC, Tenants, Bots, Flows, Billing API
│  │  ├─ src/
│  │  │  ├─ main.ts
│  │  │  ├─ app.module.ts
│  │  │  ├─ modules/
│  │  │  │  ├─ auth/
│  │  │  │  ├─ tenants/
│  │  │  │  ├─ bots/
│  │  │  │  ├─ flows/            # валидация/версии DSL
│  │  │  │  ├─ billing/
│  │  │  │  └─ analytics-read/   # отдача агрегатов в UI
│  │  │  ├─ common/              # guards, pipes, interceptors, filters
│  │  │  ├─ infra/               # pg/redis/amqp клиенты
│  │  │  └─ config/              # env-схемы, конфиги
│  │  └─ openapi/                # генерация SDK в packages/sdk
│  │
│  ├─ webhook/                   # NestJS — приём Telegram webhooks → RabbitMQ(updates)
│  │  └─ src/
│  │     ├─ main.ts
│  │     ├─ app.module.ts
│  │     ├─ modules/webhook/
│  │     └─ infra/               # подпись, дедуп, idempotency
│  │
│  ├─ fsm/                       # NestJS — FSM evaluator v1 (можно вынести в Go позже)
│  │  └─ src/
│  │     ├─ main.ts
│  │     ├─ app.module.ts
│  │     ├─ modules/fsm/         # шаги, переменные, ветвления, таймауты
│  │     └─ infra/redis/pg/
│  │
│  ├─ router-go/                 # Go — Runtime Router (шардинг bot_id/user_id)
│  │  ├─ cmd/router/             # main.go
│  │  ├─ internal/
│  │  │  ├─ amqp/                # consumers/producers
│  │  │  ├─ partition/           # consistent hashing
│  │  │  ├─ fsmclient/           # gRPC/HTTP вызовы FSM
│  │  │  └─ rate/                # throttling
│  │  └─ pkg/
│  │
│  ├─ dispatcher-go/             # Go — отправка в Telegram API, retry/backoff, DLQ
│  │  ├─ cmd/dispatcher/
│  │  ├─ internal/{amqp,tg,metrics,backoff}
│  │  └─ pkg/
│  │
│  ├─ analytics-go/              # Go — приём events → агрегаты (ClickHouse/PG)
│  │  ├─ cmd/analytics/
│  │  ├─ internal/{amqp,store,aggregations,api}
│  │  └─ pkg/
│  │
│  ├─ integrations-py/           # Python — FastAPI + Celery (HTTP/CRM/Sheets/AI)
│  │  ├─ app/
│  │  │  ├─ main.py              # FastAPI роуты (health, admin)
│  │  │  ├─ jobs/                # Celery tasks: http, sheets, notion, ml
│  │  │  ├─ adapters/            # клиенты внешних API
│  │  │  └─ core/                # конфиг, логгинг, schemas
│  │  └─ worker.py               # celery worker
│  │
│  └─ docs/                      # маркетинг/доки (можно как Nextra/Content)
│
├─ packages/
│  ├─ ui/                        # общие UI-компоненты (shadcn, design system)
│  ├─ types/                     # TS типы (DTO, события AMQP) + JSON-Schema
│  ├─ sdk/                       # автоген OpenAPI SDK для admin и сервисов
│  ├─ dsl/                       # схема DSL узлов/рёбер, линтер, валидатор
│  ├─ messaging/                 # обёртки над RabbitMQ (publisher/consumer)
│  ├─ telemetry/                 # OpenTelemetry, логгеры, middlewares
│  ├─ config/                    # @scope/config: zod-схемы env, общие конфиги
│  ├─ eslint-config/             # единый ESLint/Prettier
│  └─ tsconfig/                  # базовые tsconfig.*.json
│
├─ infra/
│  ├─ docker/                    # Dockerfile'ы для всех сервисов
│  ├─ compose/                   # docker-compose.dev.yml (pg, redis, rabbit, minio, traefik)
│  ├─ k8s/                       # манифесты Helm/Raw (prod)
│  ├─ migrations/                # SQL миграции (PG) — dbmate/tern/knex/drizzle
│  └─ scripts/                   # утилиты CI/CD
│
├─ .env.example                  # шаблон переменных среды
├─ package.json                  # турбо-скрипты, workspace
├─ turbo.json                    # пайплайны сборок/линта/тестов
└─ README.md
```