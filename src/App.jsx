import ApiData from './ApiData';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';

function HomePage() {
    return (<h2 className="text-xl">welcome to home page</h2>);
}

function TasksPage() {
    return (<h2 className="text-xl">welcome to tasks page</h2>);
}

function ApiPage() {
    return (<h2 className="text-xl">welcome to api page</h2>);
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="tasks" element={<TasksPage />} />
              <Route path="api" element={<ApiPage />} />
            </Route>
        </Routes>
    );
}
import TaskManager from './Taskmanager';
function OldTasksPage() {
    return <TaskManager />;
}