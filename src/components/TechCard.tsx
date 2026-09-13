import type { Technology } from "../types/Technology";

interface TechCardProps {
  tech: Technology;
  onAdd: (id: string) => void;
  isAdded: boolean;
}

const TechCard: React.FC<TechCardProps> = ({ tech, onAdd, isAdded }) => {
  return (
    <div
      className={`border rounded-xl p-5 flex flex-col justify-between bg-white transition-colors ${
        isAdded ? "border-green-400" : "border-gray-200"
      }`}
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
            {tech.badge}
          </span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-1.5 text-base">
          {tech.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
          {tech.description}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 flex-wrap">
          <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-600">
            {tech.category}
          </span>
          <span>{tech.difficulty}</span>
          <span className="flex items-center gap-0.5">
            <span className="text-amber-400">★</span> {tech.rating}
          </span>
        </div>
      </div>
      <button
        onClick={() => onAdd(tech.id)}
        disabled={isAdded}
        className={`w-full rounded-lg py-2.5 text-sm font-medium transition-colors ${
          isAdded
            ? "bg-green-50 text-green-600 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "Added ✓" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
