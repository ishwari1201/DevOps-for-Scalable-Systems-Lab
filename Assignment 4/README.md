# Assignment 4: Dockerization of Student Task Manager

## Aim
To containerize the Student Task Manager web application using Docker so that it runs predictably across different environments.

## Objectives
- Understand Docker images, containers, and isolation.
- Write an optimized `Dockerfile` and `.dockerignore`.
- Build a lightweight Docker image tagged `task-manager:1.0`.
- Run and map ports to host (`3000:3000`).
- Manage container lifecycle operations (start, stop, logs, remove).

## Tools Used
- Docker
- Docker Desktop
- Node.js & npm

## Commands Used
```bash
# Check Docker environment
docker --version
docker info

# Build Docker image
docker build -t task-manager:1.0 .

# Verify image in local registry
docker images

# Run container with port forwarding
docker run -d -p 3000:3000 --name task-manager-container task-manager:1.0

# Verify running container
docker ps

# Inspect logs
docker logs task-manager-container

# Container lifecycle operations
docker stop task-manager-container
docker start task-manager-container
```

## Expected Outcome
The Student Task Manager application is successfully built into an isolated Docker container and accessible at `http://localhost:3000`.

## Evidence & Screenshots
- `Performance-1.png` — Terminal output of `docker build` creating image layers.
- `Performance-2.png` — Output of `docker images` and `docker ps` verifying running container.
- `Performance-3.png` — Web browser verifying application accessibility and terminal container logs.
