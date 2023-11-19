import Image from 'next/image';
import Link from 'next/link';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link href={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <Image
        width="16"
        height="16"
        objectFit="contain"
        src="/icons/arrow.svg"
        alt="arrow"
      />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I am <span className="font-semibold">Ed</span> 👋
      <br />A Web Developer from Canada.
    </h1>
  ),
  2: (
    <h1>
      <InfoBox
        text="Worked with many companies and picked up many skills along the way."
        link="/about"
        btnText="Learn More"
      />
    </h1>
  ),
  3: (
    <h1>
      <InfoBox
        text="Led multiple projects to success over the years. Curious about the impact?"
        link="/projects"
        btnText="Visit my Portfolio"
      />
    </h1>
  ),
  4: (
    <h1>
      <InfoBox
        text="Need a project done or looking for a Dev? I'm just a few keystrokes away."
        link="/contact"
        btnText="Let's Talk"
      />
    </h1>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};
export default HomeInfo;
