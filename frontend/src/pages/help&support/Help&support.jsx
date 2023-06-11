import React from "react";
import "./help&support.scss";

const VideoCard = ({ title, description, videoUrl }) => {
  return (
    <div className="card">
      <div className="video-container-help">
        <iframe src={videoUrl} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

const HelpSupport = () => {
  return (
    <div className="container-help">
      <div className="row">
        <div className="col-md-12">
          <h1 className="page-heading">Here's how to use EASP</h1>
          <p className="page-paragraph">
            Here's a collection of instructional videos for you to explore:
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <VideoCard
            title="Signup"
            description="How to Signup in our application EASP"
            videoUrl="https://www.youtube.com/embed/E11SeTi01YE"
          />
        </div>
        <div className="col-md-4">
          <VideoCard
            title="Service Provider"
            description="How to register as a service provider in EASP"
            videoUrl="https://www.youtube.com/embed/dp_mvNyPv0o"
          />
        </div>
        <div className="col-md-4">
          <VideoCard
            title="Service Seeker"
            description="How to register as a service seeker in EASP"
            videoUrl="https://www.youtube.com/embed/gMtHqLd_nX0"
          />
        </div>
        <div className="col-md-4">
          <VideoCard
            title="Add Gig"
            description="How to add gig in our application EASP"
            videoUrl="https://www.youtube.com/embed/HBMShY1Vi6A"
          />
        </div>
      </div>

      <br />
      <div className="row">
        <div className="col-md-12">
          <p className="page-paragraph">
            For more instructions on how to use the website and watch the
            videos, please refer to the user guide or contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
