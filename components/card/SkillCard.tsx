const SkillCard: React.FC<{ category: string; techs: string[] }> = ({
    category,
    techs,
  }) => (
    <div className="bg-[#2a2a2a] rounded-sm p-4 border border-purple-500/15">
      <h4 className="text-lg text-purple-400 mb-4">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-[#333333] text-gray-300 rounded-sm hover:shadow hover:shadow-purple-400 transition-all duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

export default SkillCard;