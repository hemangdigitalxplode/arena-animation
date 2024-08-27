import React from "react";
import { Link } from "react-router-dom";
import "./blog.scss";
import { rewardsBanner } from "../../assets";
import { Col, Container, Image, Row,Breadcrumb } from "react-bootstrap";
import { Helmet } from "react-helmet";



var blogFirst = [
{
   "id":1,
   "title":"Blue Screen Vs Green Screen: Explained",
    "desc" : "As an aspiring VFX Artist, you must have seen tons of"
},


]


var [{title,desc}] = blogFirst



function BlogDetails() {
  return (
    <>
    <div className="breadhead">
    <Helmet>
        <title>Our Latest Blogs - Arena Animation</title>
        <meta name="description" content="Insightful blog section by Arena Animation covering the latest, news, trends, tips and industry insights in animation, VFX, graphics and more. Call us to know more!" />
        <link rel="canonical" href='http://animationdelhincr.com/blog'></link>
   </Helmet>
    <Breadcrumb>
        <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Blog</Breadcrumb.Item>
      </Breadcrumb>
    </div>
      <Container>
        <Row className="mt-n5">
          <div className="top-banner-section">
            <Image src={rewardsBanner} alt="" fluid className="height-80vh" />
            <h1 className="reward-title">BLOG</h1>
          </div> 
          {/* New blog here */}
          <Col sm={6} md={4} className="mt-5 wow fadeInUp" data-wow-delay=".4s" style={{ visibility: "visible",animationDelay: "0.4s",animationName: "fadeInUp",}}>
            <div className="blog-grid">
              <div className="blog-grid-img position-relative">
              <Link to="/blog/3d-animation-course"> <img alt="img" src="https://img.freepik.com/free-photo/videographer-using-computer-with-chroma-key-mock-up-isolated-display-editing-video-audio-footage_482257-3410.jpg?t=st=1721811837~exp=1721815437~hmac=e5b52c568eeeaede41decb8ef6baf86b61e0ccf7310bac8034199a16158dc8ea&w=1380"/>
              </Link> 
              </div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3">
                  <Link to="/blog/3d-animation-course">3D Animation Course in Noida</Link>
                </h3>
                <p className="display-30">
                Regarding skills in 2D animation, Animation Delhi NCR offers a unique opportunity and professionally trained animators in Noida
                </p>
                <div className="meta meta-style2">
                  <ul>
                    <li>
                    <Link To="/blog/3d-animation-course"><i className="fas fa-calendar-alt"></i> {"24 Jul, 2024"}</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </Col>
          {/* 2d animation course in noida */}
          <Col sm={6} md={4} className="mt-5 wow fadeInUp" data-wow-delay=".4s" style={{ visibility: "visible",animationDelay: "0.4s",animationName: "fadeInUp",}}>
            <div className="blog-grid">
              <div className="blog-grid-img position-relative">
              <Link to="/blog/2d-animation-course"> <img alt="img" src="https://img.freepik.com/free-photo/young-woman-working-animation-studio_23-2149208039.jpg?t=st=1721811392~exp=1721814992~hmac=703bc35894652e1961ece6fbf451dbfa4a60f2eaf818ab79528825c2be774c5c&w=1060"/>
              </Link> 
              </div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3">
                  <Link to="/blog/2d-animation-course">2D Animation Course in Noida</Link>
                </h3>
                <p className="display-30">
                Regarding skills in 2D animation, Animation Delhi NCR offers a unique opportunity and professionally trained animators in Noida
                </p>
                <div className="meta meta-style2">
                  <ul>
                    <li>
                    <Link To="/blog/2d-animation-course"><i className="fas fa-calendar-alt"></i> {"20 Jul, 2024"}</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4}
            className="mt-5 wow fadeInUp"
            data-wow-delay=".2s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInUp",
            }}
          >
            <div className="blog-grid">
              <div className="blog-grid-img position-relative">
              <Link to="/blog/blue-screen-vs-green-screen"><img alt="img" src="https://animationdelhincr.com/admin/public/uploads/blog/n-Feature-image2.jpg"/></Link> 
              </div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3">
                <Link to="/blog/blue-screen-vs-green-screen">{title}</Link>
                </h3>
                <p className="display-30">
      
                  {desc}
                </p>
                <div className="meta meta-style2">
                  <ul>
                    <li>
                    <Link to="/blog/blue-screen-vs-green-screen">
                      <i className="fas fa-calendar-alt"></i> {"21 Jun, 2024"}
                    </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} className="mt-5 wow fadeInUp" data-wow-delay=".4s" style={{ visibility: "visible",animationDelay: "0.4s",animationName: "fadeInUp",}}>
            <div className="blog-grid">
              <div className="blog-grid-img position-relative">
              <Link to="/blog/oscar-2020"> <img alt="img" src="https://animationdelhincr.com/admin/public/uploads/blog/first.jpg"/>
              </Link> 
              </div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3">
                  <Link to="/blog/oscar-2020">Oscar 2020 Winner and Nominees for Best Visual Effects</Link>
                </h3>
                <p className="display-30">
                The Oscar 2020 nominations for best visual effects had the strongest contenders.
                </p>
                <div className="meta meta-style2">
                  <ul>
                    <li>
                    <Link To="/blog/oscar-2020"><i className="fas fa-calendar-alt"></i> {"19 May, 2024"}</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} className="mt-5 wow fadeInUp" data-wow-delay=".6s"style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp",}}>
            <div className="blog-grid">
              <div className="blog-grid-img position-relative">
              <Link to="/blog/can-animation"><img
                  alt="img"
                  src="https://animationdelhincr.com/admin/public/uploads/blog/animation-as-an-art-form.jpg"/></Link>
              </div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3">
                  <Link to="/blog/can-animation">Can Animation Be Considered as an Art Form?</Link>
                </h3>
                <p className="display-30">
                The things that usually come to our mind when we hear the word “Art”
                </p>
                <div className="meta meta-style2">
                  <ul>
                    <li>
                    <Link To="/blog/can-animation"><i className="fas fa-calendar-alt"></i> {"26 Apr, 2024"}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>


          <Col sm={6} md={4} className="mt-5 wow fadeInUp" data-wow-delay=".6s"style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp",}}>
            <div className="blog-grid">
              <div className="blog-grid-img position-relative">
              <Link to="/blog/ux-designing"><img
                  alt="img"
                  src="https://animationdelhincr.com/admin/public/uploads/blog/n-ui-ux-Blog-image.jpg"/></Link>
              </div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3">
                  <Link to="/blog/ux-designing">UX Designing Process Simplified for Absolute Beginners</Link>
                </h3>
                <p className="display-30">
                The Internet-savvy customers today expect a lot from the websites they browse...
                </p>
                <div className="meta meta-style2">
                  <ul>
                    <li>
                    <Link To="/blog/ux-designing"><i className="fas fa-calendar-alt"></i> {"25 Mar, 2023"}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>


          <Col sm={6} md={4} className="mt-5 wow fadeInUp" data-wow-delay=".6s"style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp",}}>
            <div className="blog-grid">
              <div className="blog-grid-img position-relative">
              <Link to="/blog/get-the-basics-right"><img
                  alt="img"
                  src="https://animationdelhincr.com/admin/public/uploads/blog/arena-blog-n.jpg"/></Link>
              </div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3">
                  <Link to="/blog/get-the-basics-right">Get the Basics Right! 12 Principles of Animation (Part 2)</Link>
                </h3>
                <p className="display-30">
                And we’re back! In the previous blog, we covered the first six principles of animation...
                </p>
                <div className="meta meta-style2">
                  <ul>
                    <li>
                    <Link To="/blog/get-the-basics-right"><i className="fas fa-calendar-alt"></i> {"16 Feb, 2024"}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>

        </Row>
        {/* <Row className="mt-6 wow fadeInUp" data-wow-delay=".6s" style={{visibility: "visible",animationDelay: "0.4s",animationName: "fadeInUp", }}>
          <Col sm={12} md={12}>
            <div className="pagination text-small text-uppercase text-extra-dark-gray">
              <ul>
                <li>
                  <Link To="/">
                    <i className="fas fa-long-arrow-alt-left me-1 d-none d-sm-inline-block"></i>{" "}
                    Prev
                  </Link>
                </li>
                <li className="active">
                  <Link To="/">1</Link>
                </li>
                <li>
                  <Link To="/">2</Link>
                </li>
                <li>
                  <Link To="/">{"3"}</Link>
                </li>
                <li>
                  <Link To="/">
                    {"Next"}
                    <i className="fas fa-long-arrow-alt-right ms-1 d-none d-sm-inline-block"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default BlogDetails;
