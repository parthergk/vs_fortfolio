const InfoCard: React.FC<{ title: string; Icon: React.FC; description: string }> = ({
    title,
    // Icon,
    description,
  }) => (
    <div className="bg-[#2a2a2a] rounded-sm p-4 border border-purple-500/15 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-md hover:shadow-purple-400">
      <div className="flex items-center gap-2 mb-3">
        {/* <Icon className="text-purple-400" /> */}
        <h4 className="text-lg text-white">{title}</h4>
      </div>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );

  export default InfoCard