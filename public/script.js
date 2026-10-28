document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskTitle = document.getElementById('taskTitle');
  const taskPriority = document.getElementById('taskPriority');
  const taskList = document.getElementById('taskList');
  const taskCount = document.getElementById('taskCount');

  // Fetch tasks
  async function loadTasks() {
    try {
      const res = await fetch('/api/tasks');
      const data = await res.json();
      if (data.success) {
        renderTasks(data.data);
      }
    } catch (err) {
      console.error('Failed to load tasks:', err);
    }
  }

  function renderTasks(tasks) {
    taskCount.textContent = `${tasks.length} Tasks`;
    taskList.innerHTML = '';

    if (tasks.length === 0) {
      taskList.innerHTML = '<p style="text-align:center; color:#94a3b8; padding:20px;">No tasks available.</p>';
      return;
    }

    tasks.forEach(task => {
      const priorityClass = `tag-${task.priority.toLowerCase()}`;
      const statusClass = `status-${task.status.toLowerCase().replace(' ', '')}`;

      const card = document.createElement('div');
      card.className = 'task-card';
      card.innerHTML = `
        <div class="task-details">
          <h3>${escapeHtml(task.title)}</h3>
          <div>
            <span class="tag ${priorityClass}">${task.priority}</span>
            <span class="status-badge ${statusClass}">${task.status}</span>
          </div>
        </div>
        <div class="task-actions">
          ${task.status !== 'Completed' ? `<button class="btn-sm btn-complete" data-id="${task.id}">Mark Done</button>` : ''}
          <button class="btn-sm btn-delete" data-id="${task.id}">Delete</button>
        </div>
      `;
      taskList.appendChild(card);
    });
  }

  // Add task
  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = taskTitle.value.trim();
    const priority = taskPriority.value;
    if (!title) return;

    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, priority })
      });
      if (res.ok) {
        taskTitle.value = '';
        loadTasks();
      }
    } catch (err) {
      console.error('Failed to add task:', err);
    }
  });

  // Action clicks (Complete / Delete)
  taskList.addEventListener('click', async (e) => {
    const id = e.target.getAttribute('data-id');
    if (!id) return;

    if (e.target.classList.contains('btn-complete')) {
      await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Completed' })
      });
      loadTasks();
    } else if (e.target.classList.contains('btn-delete')) {
      await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
      loadTasks();
    }
  });

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  loadTasks();
});
