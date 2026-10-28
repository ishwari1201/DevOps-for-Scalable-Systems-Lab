const express = require('express');
const path = require('path');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 3000;

// Prometheus metrics configuration
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests handled',
  labelNames: ['method', 'route', 'status']
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory data store for tasks
let tasks = [
  { id: 1, title: 'Setup Git Repository & Branches', priority: 'High', status: 'Completed' },
  { id: 2, title: 'Configure Jenkins CI/CD Pipeline', priority: 'Medium', status: 'In Progress' },
  { id: 3, title: 'Dockerize Student Task Manager', priority: 'High', status: 'Pending' },
  { id: 4, title: 'Deploy on Kubernetes Cluster', priority: 'Urgent', status: 'Pending' },
  { id: 5, title: 'Setup Prometheus & Grafana Monitoring', priority: 'Medium', status: 'Pending' }
];

// Routes
app.get('/api/tasks', (req, res) => {
  httpRequestCounter.inc({ method: 'GET', route: '/api/tasks', status: '200' });
  res.json({ success: true, count: tasks.length, data: tasks });
});

app.post('/api/tasks', (req, res) => {
  const { title, priority } = req.body;
  if (!title) {
    httpRequestCounter.inc({ method: 'POST', route: '/api/tasks', status: '400' });
    return res.status(400).json({ success: false, message: 'Task title is required' });
  }

  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title,
    priority: priority || 'Normal',
    status: 'Pending'
  };

  tasks.push(newTask);
  httpRequestCounter.inc({ method: 'POST', route: '/api/tasks', status: '201' });
  res.status(201).json({ success: true, data: newTask });
});

app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    httpRequestCounter.inc({ method: 'PUT', route: '/api/tasks/:id', status: '404' });
    return res.status(404).json({ success: false, message: 'Task not found' });
  }

  if (req.body.status) task.status = req.body.status;
  if (req.body.title) task.title = req.body.title;
  if (req.body.priority) task.priority = req.body.priority;

  httpRequestCounter.inc({ method: 'PUT', route: '/api/tasks/:id', status: '200' });
  res.json({ success: true, data: task });
});

app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== taskId);

  if (tasks.length === initialLength) {
    httpRequestCounter.inc({ method: 'DELETE', route: '/api/tasks/:id', status: '404' });
    return res.status(404).json({ success: false, message: 'Task not found' });
  }

  httpRequestCounter.inc({ method: 'DELETE', route: '/api/tasks/:id', status: '200' });
  res.json({ success: true, message: `Task ${taskId} deleted successfully` });
});

// Health check endpoint for Kubernetes probes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } catch (ex) {
    res.status(500).end(ex);
  }
});

app.listen(PORT, () => {
  console.log(`[INFO] Student Task Manager server running on http://localhost:${PORT}`);
  console.log(`[INFO] Metrics available at http://localhost:${PORT}/metrics`);
});
