import { Link } from "react-router-dom";
import { Button } from "components/button";

export const AppShell = ({ children }) => {
    return (
        <>
            <header className="md:sticky md:top-0 bg-white md:z-10">
                <div className="px-4">
                    <div className="flex justify-between items-center py-2 max-w-7xl mx-auto border-b border-gray-200">
                        <nav className="flex items-center">
                            <Link to="/" className="text-xl inline-block mr-4 font-bold text-blue-700 hover:text-blue-900">
                                Steam Games Sale App
                            </Link>
                            <Link to="/bookmarks">
                                <Button
                                type="button"
                                variant="primary"
                                >
                                    Your Favorites
                                </Button>   
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                { children }
            </main>
        </>
    )
}