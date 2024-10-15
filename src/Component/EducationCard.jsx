
import PropTypes from 'prop-types';

const EducationCard = ({ institution, degree, specialization, percentage, cgpa, years }) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 border flex flex-col justify-between min-h-min w-10/12 mx-auto text-center">
      <h2 className="text-green-500 text-2xl font-semibold">{institution}</h2>
      <h3 className="text-xl">{degree}</h3>
      {specialization && <p>Specialization: {specialization}</p>}
      {cgpa && <p>{cgpa}</p>}
      {percentage && <p>{percentage}</p>}
      <p className="text-sm text-gray-400">{years}</p>
    </div>
  );
};

EducationCard.propTypes = {
  institution: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  specialization: PropTypes.string,
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cgpa: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  years: PropTypes.string.isRequired,
};

export default EducationCard;
