import { Dashboard } from "../pages/Dashboard"
import { Sidebar } from "../components/Sidebar"
import { Routes, Route, Navigate } from 'react-router-dom';
import { Tasks } from "../pages/Tasks";
import { Projects } from "../pages/Projects";
import { Employee } from "../pages/Employee";
import { NotFound } from "../pages/NotFound";
export const AppLayout = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    )
}