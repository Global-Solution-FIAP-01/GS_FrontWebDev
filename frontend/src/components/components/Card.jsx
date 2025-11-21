const Card = ({ data, onClick }) => {
  return (
    <div
      className="rounded-xl shadow-md bg-white p-4 w-64 cursor-pointer hover:shadow-lg transition"
      onClick={() => onClick(data.id)}
    >
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          className="rounded-lg mb-3 w-full h-36 object-cover"
        />
      )}
      <h2 className="text-lg font-semibold">{data.title}</h2>
      <p className="text-sm text-gray-600 mt-1">{data.description}</p>
    </div>
  );
};

export default Card;
