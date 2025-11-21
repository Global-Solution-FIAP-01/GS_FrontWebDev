import { User } from "lucide-react";

const Card = ({ data, onClick }) => {
  return (
    <div
      onClick={() => onClick(data.id)}
      className="bg-card text-card-foreground rounded-2xl shadow-lg border border-border p-5 w-64 cursor-pointer transition-all duration-200 hover:shadow-xl hover:border-primary hover:-translate-y-1"
    >
      <div className="w-full h-36 rounded-xl mb-4 flex items-center justify-center bg-muted">
        <User className="text-muted-foreground opacity-70 w-14 h-14" />
      </div>

      <h2 className="text-xl font-semibold tracking-tight text-primary">
        {data.nome || data.title}
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
