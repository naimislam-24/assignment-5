import { useState } from "react";
import type { Technology } from "./types/Technology";
import TechCard from "./components/TechCard";
import StackPanel from "./components/StackPanel";
import technologiesData from "./data/technologies.json";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const technologies = technologiesData as Technology[];

const App: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleAdd = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleRemove = (id: string) => {
    setSelectedIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const handleRemoveAll = () => {
    setSelectedIds([]);
  };

  const stack = technologies.filter((t) => selectedIds.includes(t.id));

  return (
    <>
      <Nav />
      <Hero />
      <div className="min-h-screen bg-gray-50 p-6 mt-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Explore the <span className="text-[#D91B7E]">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="flex gap-6 container mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                onAdd={handleAdd}
                isAdded={selectedIds.includes(tech.id)}
              />
            ))}
          </div>
          <StackPanel
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
