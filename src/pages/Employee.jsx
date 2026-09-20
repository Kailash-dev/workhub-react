import { useEffect, useState } from 'react';
import { employees } from '../data/employee';
import { EmployeeCard } from '../components/EmployeeCard';

export const Employee = () => {

    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc')
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;


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
        <div style={{ width: "80%", backgroundColor: 'lightgray', height: '100vh' }}>
            <div >
                <input type='text' placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />

            </div>
            <div>
                <button onClick={changeSortOder}> Sort By Salary </button>
            </div>
            {paginatedEmployees.map((el) => (
                <EmployeeCard
                    key={el.id}
                    name={el.name}
                    role={el.role}
                    salary={el.salary}
                />
            ))}
            <div>
                <button onClick={previous} disabled={currentPage === 1}>
                    Previous
                </button>

                Page {currentPage} of {totalPages}

                <button onClick={next} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div >

        </div >



    )
        ;
};