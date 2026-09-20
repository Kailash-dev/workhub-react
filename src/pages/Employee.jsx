import { useEffect, useState } from 'react';
import { employees } from '../data/employee';
import { EmployeeCard } from '../components/EmployeeCard';
import { useNavigate } from 'react-router-dom';

export const Employee = () => {

    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc')
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query)
        }, 500);

        return () => clearTimeout(timer)

    }, [query])



    const changeSortOder = () => {
        if (sortOrder === 'asc') {
            setSortOrder('desc')
        } else {
            setSortOrder('asc')
        }
        console.log('sort order', sortOrder)
    }

    const filteredEmployees = employees.filter((emp) =>
        emp.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        emp.role.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        emp.email.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        emp.department.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    const sortedEmployees = [...filteredEmployees].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.salary - b.salary
        } else {
            return b.salary - a.salary
        }
    })
    const paginatedEmployees = sortedEmployees.slice(start, end);
    const totalPages = Math.ceil(sortedEmployees.length / itemsPerPage);
    const previous = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    }

    const next = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    }



    return (
        <div className="p-6">
            <div className='flex justify-between'>
                <span>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Employees
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage your organization's employees
                    </p>
                </span>

                <button className="mb-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" onClick={()=>{navigate('/add')}}>+Add Employee</button>
            </div>

            <div className="mb-6 flex justify-between">
                <input
                    type="text"
                    placeholder="Search employees..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500"
                />
                <div>
                    <button
                        onClick={changeSortOder}
                        className="mb-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Sort By Salary
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {paginatedEmployees.map((el) => (
                    <EmployeeCard
                        key={el.id}
                        name={el.name}
                        role={el.role}
                        salary={el.salary}
                        email={el.email}
                        department={el.department}
                    />
                ))}
            </div>
            <div className="mt-6 flex items-center gap-4">
                <button
                    onClick={previous}
                    disabled={currentPage === 1}
                    className="rounded-lg bg-gray-800 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Previous
                </button>

                <span className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={next}
                    disabled={currentPage === totalPages}
                    className="rounded-lg bg-gray-800 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Next
                </button>
            </div>

        </div >



    )
        ;
};