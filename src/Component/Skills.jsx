const skillsData = [
    { title: 'Java', imgSrc: 'Images/skills/java.png' },
    { title: 'Spring', imgSrc: 'Images/skills/spring.png' },
    { title: 'HTML5', imgSrc: 'Images/skills/html5.png' },
    { title: 'CSS3', imgSrc: 'Images/skills/css3.png' },
    { title: 'JavaScript', imgSrc: 'Images/skills/js.png' },
    { title: 'React', imgSrc: 'Images/skills/react.png' },
    { title: 'XML', imgSrc: 'Images/skills/xml.png' },
    { title: 'JSON', imgSrc: 'Images/skills/json.png' },
    { title: 'MySQL', imgSrc: 'Images/skills/mysql.png' },

  ];
  
  const Skills = () => {
    return (
      <section className="py-20 text-white">
        <div className="w-full mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">My Skills</h2>
            <h4 className="text-xl">
              Wisdom is knowing what to do next. Skill is knowing how to do it.
            </h4>
            <span className="block w-[8%] h-1 mx-auto bg-green-500 mt-2"></span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 ">
            {skillsData.map((skill, index) => (
              <span key={index} className="relative group">
                <img
                  className="w-16 h-16 object-contain"
                  src={skill.imgSrc}
                  alt={skill.title}
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                  {skill.title}
                </div>
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  