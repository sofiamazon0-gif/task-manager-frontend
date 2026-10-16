import { AppHeader } from "./components/AppHeader";
import { TaskForm } from "./components/TaskForm";
import { TaskFilters } from "./components/TaskFilters";
import { TaskSummary } from "./components/TaskSummary";
import { TaskList } from "./components/TaskList";
import { AppFooter } from "./components/AppFooter";

function App() {
  return (
    <>
      <AppHeader title="Administrador de tareas" />
      <TaskForm />
      <TaskFilters />
      <TaskSummary total={3} completed={1} />
      <TaskList />
      <AppFooter course="Diseño Frontend con Frameworks" />
    </>
  );
}

export default App;
