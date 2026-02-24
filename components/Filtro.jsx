export default function Filtro({ setBusqueda }) {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      className="border p-2 mb-4 w-full rounded"
      onChange={(e) => setBusqueda(e.target.value)}
    />
  );
}