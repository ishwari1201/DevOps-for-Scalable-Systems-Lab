# Assignment 8: Grafana Dashboard Visualization

## Aim
To visualize application and infrastructure telemetry collected by Prometheus on interactive Grafana dashboards.

## Objectives
- Connect Grafana to the Prometheus data source.
- Build interactive panels for request volume, error rates, and system memory.
- Configure time-range aggregations and dashboard auto-refresh.
- Verify real-time metric visualization under live user traffic.

## Tools Used
- Grafana
- Prometheus
- Node.js Application

## Procedure
1. Launched Grafana server on `http://localhost:3000` (or configured port).
2. Navigated to **Connections** > **Data Sources** > Added **Prometheus**.
3. Set Prometheus Server URL to `http://localhost:9090` and clicked **Save & Test**.
4. Created a new Dashboard: "Student Task Manager Observability".
5. Added Panel 1: Total HTTP Request Count (`sum(http_requests_total)`).
6. Added Panel 2: Memory Usage (`process_resident_memory_bytes`).
7. Added Panel 3: Request Rate per second (`rate(http_requests_total[1m])`).
8. Sent simulated requests and verified live graph updates.

## Expected Outcome
Real-time visual monitoring of application traffic and system performance on a responsive Grafana dashboard.

## Evidence & Screenshots
- `grafana-datasource.png` — Grafana Prometheus data source showing "Data source is working" green status banner.
- `grafana-dashboard.png` — Completed Grafana dashboard displaying time-series graphs for request throughput and resource utilization.
