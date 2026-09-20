export const Header = () => {
    return (
        <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
                WorkHub
            </h1>

            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                    Kailash
                </span>

                <button className="rounded-full bg-gray-200 px-3 py-2 text-sm">
                    Profile
                </button>
            </div>
        </header>
    );
};