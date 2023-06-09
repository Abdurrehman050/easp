import React, { useState } from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";
// import twilio from "twilio";

function Gig() {
  const { id } = useParams();
  const [isSMSSent, setIsSMSSent] = useState(false); // State to track if SMS is sent

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  // Function to send SMS
  // const sendSMS = () => {
  //   const accountSid = "YOUR_ACCOUNT_SID";
  //   const authToken = "YOUR_AUTH_TOKEN";
  //   const client = twilio(accountSid, authToken);

  //   // Twilio API call to send SMS
  //   client.messages
  //     .create({
  //       body: "Hello, this is a test message!",
  //       from: "YOUR_PHONE_NUMBER",
  //       to: "RECIPIENT_PHONE_NUMBER",
  //     })
  //     .then((message) => {
  //       console.log(message.sid);
  //       setIsSMSSent(true); // Set the state to true when SMS is sent successfully
  //     })
  //     .catch((error) => console.log(error));
  // };
  return (
    <div className="gig">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">Plumber</span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  alt=""
                  src={dataUser.img || "/img/noavatar.jpg"}
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            <div className="price-sec-mobile right">
              <div className="price">
                <h3>{data.shortTitle}</h3>
                <h2>PKR {data.price}</h2>
              </div>
              <p>{data.shortDesc} </p>
              <div className="details">
                <div className="item">
                  <img src="/img/clock.png" alt="" />
                  <span>{data.deliveryDate} Days Delivery</span>
                </div>
                <div className="item">
                  <img src="/img/recycle.png" alt="" />
                  <span>{data.revisionNumber} Revisions</span>
                </div>
              </div>
              <div className="features">
                {data.features.map((feature) => (
                  <div className="item" key={feature}>
                    <img src="/img/greencheck.png" alt="" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              {/* <button onClick={sendSMS}>Send SMS</button> */}
              <button>Continue</button>
            </div>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || "/img/noavatar.jpg"} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/img/star.png" alt="" key={i} />
                          ))}

                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc"> {dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>PKR {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{data.deliveryDate} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
              <button>Pay by Card</button>
            </Link>
            <Link to={`/notPay/${id}`}>
              <button>Pay by Cash</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
