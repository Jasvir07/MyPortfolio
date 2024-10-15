import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ExperienceItem = ({ date, title, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white p-4 mt-4 rounded-lg w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
            <div className="flex items-center">
                <div className="bg-green-500 text-white py-1 px-3 rounded">{date}</div>
                <FontAwesomeIcon
                    icon={isOpen ? faMinus : faPlus}
                    className="ml-auto cursor-pointer text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <h2 className="text-lg font-bold mt-2">{title}</h2>
            {isOpen && (
                <div>
                    <p className="mt-2">{details.description}</p>
                    <ul className="list-disc list-inside mt-2">
                        {details.points.map((point, index) => (
                            <li key={index} className="text-base">{point}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

ExperienceItem.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.shape({
        description: PropTypes.string.isRequired,
        points: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ExperienceItem;
