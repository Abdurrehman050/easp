import React, { Fragment, useState } from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  return (
    <Fragment>
      <section className="about">
        <div className="row">
          <div className="column">
            <div className="about-img"></div>
          </div>
          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>Skills</h2>
              </div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>Exprience</h2>
              </div>
            </div>
            <div className="tab-content">
              {/* About Content */}
              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h2>Our Story</h2>
                <p>
                  The basic purpose of EASP is to provide all kinds of services
                  at customer"s doorsteps with a one-stop solution to make their
                  life easy and convenient anywhere at any time by nearest
                  service provider companies. We realize the challenges that
                  every home face on a regular basis is getting skilled service
                  provider at a convenient time. One of our motives is to ensure
                  customer security, better work quality and to hire the Service
                  provider companies area-wise instead of hiring an individual
                  hence the Customer will contact directly to the company & not
                  to an individual.
                </p>
                <h3>
                  We are Web Designer and Developer Having 4 years of experience
                </h3>
                <p>
                  "Welcome to our website! With over 4 years of experience in
                  the field of web design and development, we are passionate
                  about creating visually stunning and highly functional
                  websites. Our team of skilled designers and developers
                  combines creativity with technical expertise to deliver
                  exceptional digital solutions. Whether you need a brand new
                  website, a redesign of your existing site, or custom web
                  applications, we've got you covered.
                </p>
              </div>
              {/* Skill Content */}

              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <h2>Skills</h2>
                <p>
                  Front-End Development using HTML, CSS, and JavaScript.
                  Responsive Design for seamless experiences across devices.
                  User Experience (UX) Design to create intuitive interfaces.
                  Content Management Systems (CMS) expertise (WordPress, Figma,
                  Canva). SEO Optimization for improved search engine
                  visibility. Web Performance Optimization for faster load times
                  Collaborative Approach to ensure client involvement"
                </p>
                <div className="skills-row">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Developer</h3>
                      <div className="progress">
                        <div className="progress-bar Developer">
                          <span>99%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Designer</h3>
                      <div className="progress">
                        <div className="progress-bar Designer">
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>PhotoShop</h3>
                      <div className="progress">
                        <div className="progress-bar PhotoShop">
                          <span>88%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>JavaScript</h3>
                      <div className="progress">
                        <div className="progress-bar JavaScript">
                          <span>99%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience content */}
              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <div className="exp-column">
                  <h3>Web developer</h3>
                  <span>2019-2023</span>
                  <p>
                    From 2019 to 2023, I have gained extensive experience as a
                    web developer. During this time, I have focused on front-end
                    development using HTML, CSS, and JavaScript. I have worked
                    on various projects, ranging from small business websites to
                    complex web applications. My expertise lies in creating
                    visually appealing and responsive user interfaces that
                    deliver optimal user experiences. I am proficient in using
                    front-end frameworks and technologies to enhance website
                    functionality and aesthetics.
                  </p>
                </div>

                <div className="exp-column">
                  <h3>Graphic Designer</h3>
                  <span>2019-2023</span>
                  <p>
                    As a graphic designer, I bring creativity and a keen eye for
                    visual aesthetics to every project. With experience spanning
                    several years, I have honed my skills in creating compelling
                    designs that effectively communicate messages and captivate
                    audiences. From branding and logo design to marketing
                    materials and digital assets, I have worked on a diverse
                    range of projects.
                  </p>
                </div>

                <div className="exp-column">
                  <h3>PhotoShot</h3>
                  <span>2019-2023</span>
                  <p>
                    As an experienced photographer, I specialize in capturing
                    moments and telling stories through my lens. With a keen eye
                    for composition and lighting, I create stunning images
                    across various genres. From portraits to landscapes, events
                    to product photography, I bring creativity and technical
                    expertise to every shoot. I work closely with clients to
                    understand their vision and deliver exceptional results.
                    With a commitment to professionalism and a passion for my
                    craft, I aim to provide memorable and visually striking
                    photographs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
