const Card = ({ data, onClick }) => {
  return (
    <div
      onClick={() => onClick(data.id)}
      className="bg-card text-card-foreground rounded-2xl shadow-lg border border-border p-5 w-64 cursor-pointer transition-all duration-200 hover:shadow-xl hover:border-primary hover:-translate-y-1">
      {data.foto && (
        <img
          src={data.foto}
          alt={data.title}
          className="w-full h-36 object-cover rounded-xl mb-4 transition-all duration-200 group-hover:scale-105"
        />
      )}

      <h2 className="text-xl font-semibold tracking-tight text-primary">
        {data.title}
      </h2>

      <p className="text-sm mt-1 text-muted-foreground">
        {data.cargo}
      </p>

      <p className="text-xs mt-1 text-muted-foreground opacity-80">
        {data.localizacao}
      </p>
    </div>
  );
};

export default Card;
