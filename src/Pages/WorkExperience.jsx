import ExperienceItem from "../Component/ExperienceItem";

const WorkExperience = () => {
    const experiences = [
        {
            date: "Jul-Aug 2022",
            title: "PYTHON TRAINING AT SOLITAIRE INFOSYS",
            details: {
                description: "6 Weeks Internship Program in Python:",
                points: [
                    "During my training at SOLITAIRE INFOSYS, I immersed myself in the world of Python programming, gaining invaluable skills and knowledge in one of the most versatile and widely-used programming languages.",
                    "I learned fundamentals of Python syntax, data types, and control structures.",
                    "I learned object-oriented programming principles and design patterns.",
                    "Handling and manipulating data using libraries such as NumPy and Pandas.",
                    "I earned a certification in Python programming, validating my proficiency and commitment to mastering this powerful language."
                ]
            }
        },
        {
            date: "Jan - Jun 2024",
            title: "JAVAEE TRAINING AT EXCELLENCE TECHNOLOGY",
            details: {
                description: "6 Months Industrial Training:",
                points: [
                    "I recently completed an intensive training program on Java Enterprise Edition (JavaEE) at Excellence Technology, a renowned institution known for its quality technical education. With a passion for software development and a desire to delve deeper into enterprise-level Java applications, I embarked on this journey to enhance my skills and expertise in JavaEE.",
                    "The JavaEE training program at Excellence Technology covered fundamental concepts to advanced techniques, including in-depth modules on JavaEE architecture, servlets, JavaServer Pages (JSP), Enterprise JavaBeans (EJB), Spring, Spring Boot, Spring JDBC, MySQL, and more."
                ]
            }
        }
    ];

    return (
        <div className="bg-black text-white pt-10 ">
            <h2 className="text-3xl font-bold text-center">WORK EXPERIENCE</h2>
            {experiences.map((experience, index) => (
                <ExperienceItem
                    key={index}
                    date={experience.date}
                    title={experience.title}
                    details={experience.details}
                />
            ))}
        </div>
    );
};

export default WorkExperience;
