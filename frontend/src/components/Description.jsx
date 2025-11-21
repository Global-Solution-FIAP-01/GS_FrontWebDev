import { Briefcase, Users, MessageSquare } from "lucide-react";
import { DESCRIPTION_DATA } from "../mocks/texts";

const ICONS = {
  Users: Users,
  Briefcase: Briefcase,
  MessageSquare: MessageSquare,
};

export default function Descricao() {
  return (
    <section
      id="descricao"
      className="bg-surface text-surface-foreground py-20 px-6 md:px-16 lg:px-32 transition-colors duration-300">
      <div className="w-full mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
          {DESCRIPTION_DATA.title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          {DESCRIPTION_DATA.text}
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {DESCRIPTION_DATA.items.map(({ icon, title, description }) => {
            const IconComponent = ICONS[icon];
            return (
              <div
                key={title}
                className="bg-card text-card-foreground p-6 rounded-2xl shadow-md hover:shadow-lg border border-border transition"
              >
                <IconComponent className="mx-auto text-accent w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14">
          <a
            href={DESCRIPTION_DATA.button.href}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-secondary-foreground transition"
          >
            {DESCRIPTION_DATA.button.label}
          </a>
        </div>
      </div>
    </section>
  );
}
