import React from 'react';
import './JobCard.css';
interface CardProps {
    title: string;
    description: string;
    activities: string;
    duration: string;
}

const Card: React.FC<CardProps> = ({ title, description, activities, duration }) => {
    return (
        <div className="card">
            <h2 className='text-xl font-bold h-10 mb-5'>{title}</h2>
            <p className='font-serif font-semibold mb-2'>{description}</p>
            <p>{activities}</p>
            <p className='duration font-extralight '>{duration}</p>
        </div>
    );
};

export default Card;