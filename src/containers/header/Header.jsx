import React from "react";
import "./header.scss";
import { Container } from "react-bootstrap";
import animation from "../../assets/animation.mp4";
import LazyLoad from "react-lazy-load";
import ReactPlayer from "react-player";
import ApplyNowForm from "../../components/applyNowModal/ApplyNowForm";
import { Helmet } from "react-helmet";

const Header = ({ banners }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Helmet description" data-rh="true" />
        <meta name="title" content="Helmet title" data-rh="true" />
      </Helmet>
      <Container fluid className="header">
        <LazyLoad height={"100%"} offset={300} className="newfile">
          <ReactPlayer
            playsinline
            url={banners?.[0]?.video && banners?.[0]?.video}
            controls={false}
            width={"100%"}
            height={"100%"}
            playing={true}
            loop={true}
            muted={true}
            className="position-relative animation-video desktop-only"
          />
        </LazyLoad>
        <div className="position-absolute header-right">
          <h1 className="title heading-arena">
            {banners?.[0]?.title && banners?.[0]?.title}
          </h1>
          {banners?.[0]?.content && (
            <div
              dangerouslySetInnerHTML={{ __html: banners?.[0]?.content }}
              className="desktop-only"
            />
          )}
          <div className="mobile-only mbtotal">
            <h2 class="px-4 py-4">
              THE BEST INSTITUTE IN ANIMATION, VFX, GAMING & GRAPHIC DESIGN
              ACROSS DELHI NCR
            </h2>
          </div>
          <ReactPlayer
            playsinline
            url={animation}
            controls={false}
            width={"100%"}
            height={"100%"}
            playing={true}
            loop={true}
            muted={true}
            className="mobile-only mbuse"
          />
          <div className="mobile-only">
            <h2 className="text-center">Request Call Back</h2>
            <ApplyNowForm />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="header-container backgroundImage"> */
}
// eslint-disable-next-line no-lone-blocks
{
  /* <LazyLoad height={"100%"} offset={300}>
   <ReactPlayer
     url={banners?.[0]?.video && banners?.[0]?.video}
     controls={false}
     width={"100%"}
     height={"100%"}
     playing={true} // Set playing prop to true for automatic playback
     loop={true}
     className="img"
   />
 </LazyLoad> */
}
// eslint-disable-next-line no-lone-blocks
{
  /* <div className="container-default">
 <div className="header-right">
   <div className="heading-arena">{banners?.[0]?.title && banners?.[0]?.title}</div>
   {banners?.[0]?.content && (
     <div dangerouslySetInnerHTML={{ __html: banners?.[0]?.content }} />
   )}
 </div>
</div>
</div>
// <Container fluid className="header-container">
//   <LazyLoad height={"100%"} offset={300}>
//     {banners && (
//       <img className="image" src={banners[0].image} alt="banner" />
//     )}
//   </LazyLoad>
// </Container> */
}
