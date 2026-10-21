"use client";

// Campo de busca
const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar por nome..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-black text-white border border-gray-600 rounded px-3 py-2"
    />
  );
};

export default SearchBar;