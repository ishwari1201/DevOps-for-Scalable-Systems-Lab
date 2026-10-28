# Assignment 6: Kubernetes Scaling and Self-Healing

## Aim
To demonstrate horizontal pod scaling and automatic self-healing capabilities of Kubernetes for the Student Task Manager application.

## Objectives
- Scale deployment replicas up and down using `kubectl scale`.
- Monitor pod lifecycle during scaling operations.
- Test Kubernetes self-healing by manually terminating a running pod.
- Verify automatic pod replacement by the ReplicaSet controller.

## Tools Used
- Kubernetes (`kubectl`)
- Minikube

## Commands Used
```bash
# 1. Scale Replicas Up to 5
kubectl scale deployment/student-task-manager --replicas=5
kubectl get pods -w

# 2. Verify all 5 replicas are running
kubectl get pods -o wide

# 3. Test Self-Healing (Delete one active pod)
kubectl get pods
kubectl delete pod <pod-name-from-above>

# 4. Immediately check pods - verify Kubernetes auto-created a new pod
kubectl get pods

# 5. Scale back to 2 replicas
kubectl scale deployment/student-task-manager --replicas=2
kubectl get pods
```

## Expected Outcome
The application successfully scales to 5 replicas to handle load, and automatically replaces terminated pods within seconds, demonstrating high availability and self-healing.

## Evidence & Screenshots
- `scaling-replicas.png` — Output showing 5 active running replicas.
- `self-healing.png` — Terminal demonstrating pod deletion and immediate automatic recreation by Kubernetes.
