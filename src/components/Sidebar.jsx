import { Link } from "react-router-dom";
export const Sidebar = () => {
    return (
        <div style={{ width: "20%", backgroundColor: '#efeae5ff', height: '100vh' }}>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/employee">Employees</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/add">Add Employee</Link></li>
                <li><Link to="/edit/:id">Edit Employee</Link></li>

            </ul>
        </div>
    );
};