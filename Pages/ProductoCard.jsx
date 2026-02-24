export default function ProductoCard({ producto }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={producto.image}
        alt={producto.title}
        className="h-40 mx-auto object-contain"
      />

      <h2 className="font-bold mt-3">{producto.title}</h2>
      <p className="text-gray-600">${producto.price}</p>
    </div>
  );
}