import React from 'react';
import '../Skills.css';

const resources = [
  {
    title: 'Girls Who Code',
    url: 'https://girlswhocode.com/',
    description: 'Girls Who Code is a nonprofit organization focused on closing the gender gap in technology by offering coding clubs, summer immersion programs, and college loops for girls in the US.',
  },
  {
    title: 'Women Who Code',
    url: 'https://www.womenwhocode.com/',
    description: 'Women Who Code is an international nonprofit dedicated to inspiring women to excel in technology careers by providing a global community, mentorship, and support.',
  },
  {
    title: 'AnitaB.org',
    url: 'https://anitab.org/',
    description: 'AnitaB.org is a global organization that connects, inspires, and strives for greater equality for women technologists in business, academia, and government.',
  },
  {
    title: 'Code.org',
    url: 'https://code.org/',
    description: 'Code.org is a nonprofit organization dedicated to expanding access to computer science in schools and increasing participation by women and underrepresented minorities.',
  },
  {
    title: 'Black Girls Code',
    url: 'https://www.wearebgc.org/',
    description: 'Black Girls Code is a nonprofit organization that aims to increase the number of women of color in the digital space by empowering girls of color ages 7 to 17 to become innovators in STEM fields.',
  },
  {
    title: 'She++',
    url: 'https://www.sheplusplus.org/',
    description: 'She++ is a nonprofit organization that works to empower underrepresented groups in technology by dismantling negative stereotypes surrounding technical careers.',
  },
];

const Skills = () => {
  return (
    <div id="skills" className="Skills">
      <h1 className="skills-title">Empowering Women in STEM</h1>
      <p className="skills-description">
        At EmpowHER, our mission is to support women in Science, Technology, Engineering, and Mathematics (STEM) fields by providing valuable resources and opportunities. We believe that empowering women in STEM is essential for fostering innovation, driving economic growth, and achieving gender equality in the workforce.
      </p>
      <p className="skills-description">
        Our platform connects women with job opportunities, educational programs, and mentorship, enabling them to thrive in their chosen fields. By creating a supportive community and amplifying the voices of women in STEM, we aim to inspire the next generation of female leaders and break down the barriers that prevent them from reaching their full potential.
      </p>
      <p className="skills-description">
        Below, we have curated a list of resources to help women at every stage of their STEM journey. Whether you are just starting out or looking to advance your career, these organizations offer invaluable support and guidance.
      </p>
      <div className="resource-list">
        {resources.map((resource, index) => (
          <div key={index} className="resource-item">
            <h3 className="resource-title">{resource.title}</h3>
            <p className="resource-description">{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noreferrer" className="resource-link">Visit Website</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
