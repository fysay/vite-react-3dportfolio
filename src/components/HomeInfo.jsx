import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className="font-semibold">Jae Lee</span>👋
        <br/>
        A UX Researcher from Michigan, United States
        </h1>
    ),
    2: (
        <InfoBox 
          text="Worked with companies and organizations
                to earn several skills along the way."
          link="/vite-react-3dportfolio/about"
          btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
          text="My abilities to understand user needs 
                and create user-friendly interfaces led multiple projects to success."
          link="/vite-react-3dportfolio/projects"
          btnText="View My Portfolio"
        />
    ),
    4: (
        <InfoBox 
          text="Need a UX project done or looking for a researcher? 
                I'm just a few keystrokes away"
          link="/vite-react-3dportfolio/contact"
          btnText="Let's Talk"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo