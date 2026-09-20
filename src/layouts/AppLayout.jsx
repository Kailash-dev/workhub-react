import { Dashboard } from "../pages/Dashboard"
import { Sidebar } from "../components/Sidebar"
import { Routes, Route, Navigate } from 'react-router-dom';
import { Tasks } from "../pages/Tasks";
import { Projects } from "../pages/Projects";
import { Employee } from "../pages/Employee";
import { NotFound } from "../pages/NotFound";
import { AddEmployee } from "../pages/AddEmployee";
import { EditEmployee } from "../pages/EditEmployee";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export const AppLayout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100">

            <Header />

            <div className="flex flex-1">

                <Sidebar />

                <main className="flex-1 overflow-auto p-6">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/dashboard" replace />}
                        />

                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/employee"
                            element={<Employee />}
                        />

                        <Route
                            path="/projects"
                            element={<Projects />}
                        />

                        <Route
                            path="/tasks"
                            element={<Tasks />}
                        />

                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                        <Route
                            path="/ "
                            element={<AddEmployee />}
                        />
                        <Route
                            path="/edit/:id"
                            element={<EditEmployee />}
                        />
                    </Routes>
                </main>

            </div>

            <Footer />

        </div>
    )
}