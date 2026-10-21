import Link from "next/link";

// Header da página
const Header = () => {
  return (
    <header className="bg-gray-900 border border-gray-700 rounded p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">Agentes</h1>
      <Link
        href="/"
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Início
      </Link>
    </header>
  );
};

export default Header;