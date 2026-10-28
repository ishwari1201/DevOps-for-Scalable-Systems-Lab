# Assignment 5: Kubernetes Deployment & Services

## Aim
To deploy the containerized Student Task Manager application onto a local Kubernetes cluster (Minikube) using declarative Deployment and Service manifests.

## Objectives
- Understand Kubernetes architecture (Pods, Deployments, Services).
- Create a declarative `deployment.yaml` with health probes.
- Create a NodePort `service.yaml` to expose the application.
- Deploy and verify running pods and service endpoints on Minikube.

## Tools Used
- Kubernetes (`kubectl`)
- Minikube
- Docker

## Manifests Used
- [`deployment.yaml`](./deployment.yaml)
- [`service.yaml`](./service.yaml)

## Commands Executed
```bash
# Start Minikube cluster
minikube start

# Apply Kubernetes manifests
kubectl apply -f "Assignment 5/deployment.yaml"
kubectl apply -f "Assignment 5/service.yaml"

# Verify resources
kubectl get deployments
kubectl get pods -o wide
kubectl get services

# Access application in browser via Minikube
minikube service student-task-manager-service
```

## Expected Outcome
The Student Task Manager application runs across Kubernetes Pods managed by a Deployment and is reliably accessible via a NodePort Service.

## Evidence & Screenshots
- `k8s-deployment.png` — Deployment creation and pod status showing `Running`.
- `k8s-service.png` — Service mapping with NodePort and application accessible in the browser.
