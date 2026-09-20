import { useState } from "react"

export const EditEmployee = () => {
    const [employeeForm,setEmployeeForm] = useState({name:"" ,email:"" ,department:"" ,role:"" ,salary:0})
    const handleChange = (e) => {
        setEmployeeForm({...employeeForm,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(employeeForm)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={employeeForm.name} placeholder="Enter name" />
                <input type="email" name="email" onChange={handleChange} value={employeeForm.email} placeholder="Enter email" />
                <input type="text" name="department" onChange={handleChange} value={employeeForm.department} placeholder="Enter department" />
                <input type="text" name="role" onChange={handleChange} value={employeeForm.role} placeholder="Enter role" />
                <input type="number" name="salary" onChange={handleChange} value={employeeForm.salary} placeholder="Enter salary" />
                <button type="submit">Update Employee</button>
            </form>
        </div>
    )
}