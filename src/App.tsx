import { AppHeader } from './components/AppHeader';
import { TaskForm } from './components/TaskForm';
import { TaskFilters } from './components/TaskFilters';
import { TaskSummary } from './components/TaskSummary';
import { TaskList } from './components/TaskList';
import { tasks } from './data/tasks';

export default function App() {
  return (
    <div className="app-shell">
      <AppHeader title="Administrador de tareas" />
      <main className="app-main">
        <TaskForm />
        <TaskFilters />
        <TaskSummary tasks={tasks} />
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}
