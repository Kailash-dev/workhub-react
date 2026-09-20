import { useState } from "react"

export const AddEmployee = () => {
    const [employeeForm,setEmployeeForm] = useState({name:"" ,email:"" ,department:"" ,role:"" ,salary:0})
    const handleChange = (e) => {
        setEmployeeForm({...employeeForm,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
            e.preventDefault()
        console.log(employeeForm)
        localStorage.setItem("employees",JSON.stringify(JSON.parse([...employeeForm])))
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" onChange={handleChange} value={employeeForm.name} placeholder="Enter name" />
                </div>
                <div>
                    <input type="email" name="email" onChange={handleChange} value={employeeForm.email} placeholder="Enter email" />
                </div>
                <div>
                    <input type="text" name="department" onChange={handleChange} value={employeeForm.department} placeholder="Enter department" />
                </div>
                <div>
                    <input type="text" name="role" onChange={handleChange} value={employeeForm.role} placeholder="Enter role" />
                </div>
                <div>
                    <input type="number" name="salary" onChange={handleChange} value={employeeForm.salary} placeholder="Enter salary" />
                </div>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    )
}