import EducationCard from "../Component/EducationCard";

const Education = () => {
  const educationItems = [
    {
      institution: "PUNJABI UNIVERSITY PATIALA",
      degree: "Bachelor of Technology (B.TECH)",
      specialization: "Computer Science Engineering",
      cgpa: "CGPA: 7.7",
      years: "2020 - 2024",
    },
    {
      institution: "SR. SEC. RESIDENTIAL MERITORIOUS SCHOOL, SECTOR-70, SAS NAGAR (MOHAL)",
      degree: "Senior Secondary Education",
      specialization: "Science Stream (Non-Med)",
      percentage: "12th Grade Academic Percentage: 91.55%",
      years: "2019 - 2020",
    },
    {
      institution: "GOVT HIGH SCHOOL DASGRAIN, ROPAR, PUNJAB",
      degree: "Secondary Education",
      percentage: "10th Grade Academic Percentage: 81.07%",
      years: "2017 - 2018",
    },
  ];

  return (
    <div className="w-screen mx-auto px-4 text-white bg-black py-20">
      <h1 className="text-3xl font-bold text-center mb-4">MY EDUCATION</h1>
      <p className="text-xl text-center mb-8">
        My educational journey equips me with the knowledge to tackle various challenges.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationItems.map((item, index) => (
          <EducationCard 
            key={index} 
            institution={item.institution} 
            degree={item.degree} 
            specialization={item.specialization} 
            percentage={item.percentage} 
            cgpa={item.cgpa} 
            years={item.years} 
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
