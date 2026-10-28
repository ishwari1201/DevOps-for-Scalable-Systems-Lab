# Assignment 7: Prometheus Monitoring and Metrics Collection

## Aim
To instrument the Student Task Manager application with Prometheus metrics and configure Prometheus to scrape application telemetry.

## Objectives
- Integrate `prom-client` into Node.js application.
- Expose application telemetry on the `/metrics` endpoint.
- Configure `prometheus.yml` scrape configuration.
- Execute PromQL queries to analyze request rates and latency.

## Tools Used
- Prometheus
- Node.js (`prom-client`)
- Express.js

## Configuration (`prometheus.yml`)
```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'student-task-manager'
    static_configs:
      - targets: ['localhost:3000']
```

## Commands Used
```bash
# Start Prometheus server pointing to config
prometheus --config.file="Assignment 7/prometheus.yml"

# Generate traffic for metrics
curl http://localhost:3000/api/tasks
curl -X POST -H "Content-Type: application/json" -d "{\"title\":\"Test Metric Task\"}" http://localhost:3000/api/tasks

# Inspect metrics endpoint
curl http://localhost:3000/metrics
```

## Expected Outcome
Prometheus successfully scrapes metrics from the Student Task Manager `/metrics` endpoint, showing the target as `UP` and allowing PromQL queries like `http_requests_total`.

## Evidence & Screenshots
- `metrics-targets.png` — Prometheus Web UI (`Status -> Targets`) showing `student-task-manager` as `UP`.
- `promql-query.png` — PromQL graph execution for `http_requests_total` reflecting user traffic.
