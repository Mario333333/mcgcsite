import React from "react";
import "./VocationalTrainingCard.css";
interface VocationalTrainingCardProps {
  title: string;
  developmentSkils: Array<String>;
}

const VocationalTrainingCard: React.FC<VocationalTrainingCardProps> = ({
  title,
  developmentSkils,
}) => {
  return (
    <div className="card">
      <h2 className="text-xl font-serif font-semibold mb-3 mt-5">{title}</h2>
      <ol className="font-serif">
        {developmentSkils.map((skill, index) => (
          <li key={index} className="my-1">{skill}</li>
        ))}
      </ol>
    </div>
  );
};

export default VocationalTrainingCard;
