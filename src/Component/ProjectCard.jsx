import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ image, name, description }) {
    return (
        <div className="bg-black rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 border flex flex-col justify-between min-h-min w-10/12 mx-auto">
            <img src={image} alt={name} className="project-image w-full h-44 object-cover" />
            <div className="flex flex-col justify-center flex-grow p-4">
                <h2 className="project-name text-green-400 text-xl font-bold text-center">{name}</h2>
                <p className="project-description text-gray-400 text-base text-center mb-2">{description}</p>
            </div>
            <div className="project-link flex justify-center items-center text-green-400 text-3xl mb-4">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
        </div>
    );
}
ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ProjectCard;
