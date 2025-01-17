import { Code } from "lucide-react";

interface DevCardProps {
  devref: React.RefObject<HTMLDivElement | null>; // Type the ref as a div element
}

const DevCard: React.FC<DevCardProps> = ({ devref }) => {
  return (
    <div
      ref={devref}
      className="w-72 h-36 fixed bottom-[5rem] left-12 bg-neutral-800 rounded-lg flex flex-col p-4 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group"
    >
      {/* Header with Dev Info */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-neutral-100 font-semibold">Parther</h3>
            <p className="text-sm text-purple-400">Frontend Developer</p>
          </div>
        </div>
      </div>

      {/* Quick Bio */}
      <p className="text-sm text-neutral-400 flex-grow">
        Crafting pixel-perfect, responsive web experiences with modern technologies
      </p>
    </div>
  );
};

export default DevCard;
