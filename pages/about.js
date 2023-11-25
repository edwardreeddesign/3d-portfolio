import Image from 'next/image';
import Layout from '../components/Layout';
import { skills, experiences } from '../constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <Layout title="About">
      <section className="max-container">
        <h1 className="head-text">
          Hello, I&apos;m{' '}
          <span className="blue-gradient_text font-semibold">Ed</span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Experienced Web Developer based in Canada, dedicated to the art of
            self-taught expertise. Passionate about crafting captivating designs
            and websites that skillfully showcase the distinctive offerings of
            businesses and clients. Specializing in intuitive user experiences,
            I bring a keen eye for detail and a commitment to delivering
            compelling online platforms that truly reflect the essence of a
            product or company.
          </p>
        </div>
        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>
        </div>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map(skill => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  height={30}
                  width={30}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="py-16">
          <h3 className="subhead-text">About Me</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I embarked on a successful career in construction until a
              life-altering accident reshaped my professional trajectory.
              Initially drawn to sales post-high school, I excelled in the field
              but encountered persistent advice urging me to acquire a trade. In
              response, I transitioned into HVAC installation, progressing
              swiftly from a "helper" to a lead installer managing my own team.
            </p>
            <p>
              However, the inherent seasonality of the construction industry,
              marked by slow winter months and temporary layoffs, prompted me to
              seek a more stable path. At the age of 36, I made the decision to
              return to school and earned a diploma in Network Engineering.
              Despite the limited opportunities in Windsor, Ontario, for network
              engineering professionals, relocating my family for a fresh start
              was not a viable option.
            </p>
            <p>
              In a fateful turn of events in December 2012, I was involved in a
              life-changing accident, sustaining major injuries that rendered me
              unable to continue my previous work. The subsequent years were
              dedicated to rehabilitation and discovering new capabilities. With
              my eldest son expressing interest in pursuing a career in Web
              Development, I seized the opportunity to explore this field for
              myself. Undertaking online courses, I quickly developed the skills
              to create my first website within weeks, fulfilling a longstanding
              commitment to Windsor Lodge 403, a local Freemason Lodge.
            </p>
            <p>
              While 2020 and 2021 proved challenging for many, these years
              became a turning point for me. In the face of career uncertainty,
              I discovered a passion for web development, relishing the process
              of transforming a vision into a tangible, enjoyable product.
              Leveraging the insights gained from my prior employment, where I
              collaborated closely with homeowners on installation preferences,
              I now apply this customer-centric approach to partner with
              individuals and businesses in crafting websites that enhance their
              online presence and drive business growth.
            </p>
            <p>
              My unique ability to discern what works for companies, coupled
              with a keen sense of identifying areas for improvement, positions
              me as a valuable asset in optimizing their online strategies.
              Rooted in a commitment to treating every professional engagement
              as an extension of my family, I consistently go above and beyond
              expectations. I firmly believe that the success of those I
              collaborate with is intertwined with my own, fostering a shared
              journey toward excellence.
            </p>
          </div>
        </div>
        <hr className="border-slate-300" />
        <CTA />
      </section>
    </Layout>
  );
};
export default AboutPage;
