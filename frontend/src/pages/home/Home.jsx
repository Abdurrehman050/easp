import { React, useState, useEffect } from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data.jsx";

function Home() {
  const [catCards, setCatCards] = useState([]);

  useEffect(() => {
    async function fetchCatCards() {
      try {
        const cardsData = await cards();
        setCatCards(cardsData);
      } catch (error) {
        console.error(error);
        setCatCards([]); // or a fallback value
      }
    }

    fetchCatCards();
  }, []);
  return (
    <div className="home">
      <Featured />

      <Slide>
        {catCards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item item-left">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <img src="./img/plumber.jpg" controls />
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item item-right">
            <img src="./img/plumber.jpg" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img src="/public/img/plumber@2x.png" alt="" />
              <div className="line"></div>
              <span>Plumber</span>
            </div>
            <div className="item">
              <img src="/public/img/carwash.png" alt="" />
              <div className="line"></div>

              <span>Car Wash</span>
            </div>
            <div className="item">
              <img src="/public/img/cleaning.png" alt="" />
              <div className="line"></div>
              <span>House Cleaning</span>
            </div>
            <div className="item">
              <img src="/public/img/degh.png" alt="" />
              <div className="line"></div>
              <span>Cargo</span>
            </div>
            <div className="item">
              <img src="/public/img/electrical.png" alt="" />
              <div className="line"></div>
              <span>Electrician</span>
            </div>
            <div className="item">
              <img src="/public/img/HomeShift.png" alt="" />
              <div className="line"></div>
              <span>House Shifting</span>
            </div>
            <div className="item">
              <img src="/public/img/medic.png" alt="" />
              <div className="line"></div>
              <span>Doctor</span>
            </div>
            <div className="item">
              <img src="/public/img/makeup.png" alt="" />
              <div className="line"></div>
              <span>Beauty Saloon</span>
            </div>
            <div className="item">
              <img src="/public/img/maintenance.png" alt="" />
              <div className="line"></div>
              <span>AC Maintenance</span>
            </div>
            <div className="item">
              <img src="/public/img/pestcontrol.png" alt="" />
              <div className="line"></div>
              <span>Pest Control</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item item-left">
            <h1>
              Easp <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
          </div>
          <div className="item item-right">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
