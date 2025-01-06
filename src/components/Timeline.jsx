import React, { useEffect, useRef } from 'react';
import './Timeline.css';
import student from "../assets/student.png";
import mine from "../assets/mine.png";

import quality from "../assets/quality.png";
import freelancer from "../assets/freelancer.png";

const Timeline = () => {
  const timelineRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      timelineRefs.current.forEach((ref, index) => {
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          ref.classList.add('animate');
          
          if (index === 0) {
            lineRef.current.classList.add('animate-line');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run the check on mount to catch elements already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <h2 className='timeline-heading' style={{fontSize:"50px",textAlign:"center"}}>My Journey So Far 🚀</h2>
    <div className="timeline">
      <div className="timeline-line" ref={lineRef}></div>
      {[
{
  logo: student,
  title: "Student Days",
  duration: "2015-2019",
  description:
    "I pursued my B.E. in Mechanical Engineering at Holy Cross Engineering College, Tuticorin, and learned the importance of discipline and hard work.",
  position: "left",
},
{
  logo: mine,
  title: "Rock Mine Quarry Supervisor",
  duration: "2019-2022",
  description:
    "Led a 10-member team at Uncle's Rock Mine Quarry, ensuring smooth operations and prioritizing safety. A hands-on leadership experience!",
  position: "right",
},
{
  logo: quality,
  title: "Quality Inspector",
  duration: "2022-2023",
  description:
    "Ensured quality and precision at Ashok Leyland, honing my attention to detail and problem-solving skills.",
  position: "left",
},

{
  logo: freelancer,
  title: "Aspiring Cybersecurity Professional",
  duration: "2024-Present",
  description:
    "Building on my tech foundation, I am diving into the world of cybersecurity, aiming to safeguard the digital space with my skills.",
  position: "right",
},
      ].map((item, index) => (
        <div
          key={index}
          className={`timeline-container ${item.position}-container`}
          ref={el => (timelineRefs.current[index] = el)}
        >
          <div className={`timelinelogo-container${item.position}`}>
            <img src={item.logo} alt={item.title} className='timeline-logo' />
          </div>
          <div className="text-box">
            <h2>{item.title}</h2>
            <small>{item.duration}</small>
            <p>{item.description}</p>
            <span className={`${item.position}-arrow`}></span>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Timeline;
