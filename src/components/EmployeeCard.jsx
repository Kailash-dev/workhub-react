export const EmployeeCard = ({
    name,
    role,
    salary,
    email,
    department,
}) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        {name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {role}
                    </p>
                </div>

                <span className="whitespace-nowrap text-lg font-semibold text-green-600">
                    ₹{salary.toLocaleString('en-IN')}
                </span>
            </div>

            {/* Employee Details */}
            <div className="mt-5 space-y-2 border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">Email:</span>{' '}
                    {email}
                </p>

                <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">Department:</span>{' '}
                    {department}
                </p>
            </div>

            {/* Actions */}
            <div className="mt-5 flex gap-2 border-t border-gray-100 pt-4">
                <button
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                    Edit
                </button>

                <button
                    className="rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};