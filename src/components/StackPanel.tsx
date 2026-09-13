import type { Technology } from "../types/Technology";

interface StackPanelProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackPanel: React.FC<StackPanelProps> = ({
  stack,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <div className="border border-dashed border-blue-300 rounded-xl p-5 w-64 shrink-0 self-start">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold text-gray-900">Your Stack</h3>
        {stack.length > 0 && (
          <span className="text-xs text-gray-400">{stack.length}</span>
        )}
      </div>

      {stack.length === 0 ? (
        <>
          <p className="text-sm text-gray-400 mb-3">
            No technologies selected yet.
          </p>
          <div className="border border-dashed border-gray-200 rounded-lg py-8 text-center text-sm text-gray-300">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-2 mt-3">
            {stack.map((tech) => (
              <button
                key={tech.id}
                className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-left hover:bg-gray-50 hover:border-gray-300 transition-colors group"
              >
                <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                <span className="text-sm text-gray-800 flex-1">
                  {tech.name}
                </span>
                <span
                  onClick={() => onRemove(tech.id)}
                  className="text-gray-300 group-hover:text-gray-500 text-xs"
                >
                  ✕
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 border border-red-200 text-red-500 rounded-lg py-2 text-sm font-medium hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default StackPanel;
