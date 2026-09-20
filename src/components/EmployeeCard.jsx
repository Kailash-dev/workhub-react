export const EmployeeCard = ({ name, role, salary, email, department }) => {
    return <div>

        <div>
            <h1>{name}</h1>
            <p>{role}</p>
            <p>{email}</p>
            <p>{department}</p>
            <span>{salary}/Month</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
}