import React from "react";
import "./bloginner.scss";
import { Col, Container, Image, Row } from "react-bootstrap";

function Designing() {
  return (
    <>
      <div className="blog-single gray-bg">
        <Container>
          <Row className="align-items-start">
            <div className="top-banner-section-blog d-flex justify-content-center align-items-center">
              <Image
                src="https://animationdelhincr.com/admin/public/uploads/blog/n-ui-ux-Blog-image.jpg"
                alt=""
                fluid
                className="height-80vh"
                width="100%"
                style={{ opacity: 0.5 }}
              />
              <div className="reward-title" style={{ fontSize: "76px" }}>
                UX Designing Process Simplified ...
              </div>
            </div>
            <Col sm={12} md={12} className="m-15 px-tb  pt-5">
              <article className="article ps-4 mt-0">
                <div className="article-title">
                  <h3>
                    UX Designing Process Simplified for Absolute Beginners
                  </h3>
                </div>
                <div className="article-content">
                  <p className="text-justify">
                    The Internet-savvy customers today expect a lot from the
                    websites they browse. With intense competition in the
                    digital space, it is now essential for companies and brands
                    to offer a seamless online user experience.
                  </p>

                  <p>
                    User Experience Design includes elements of interaction
                    design, visual design, user research, and much more. Every
                    user has different requirements & propose when they visit a
                    website, and it is the responsibility of a UX Designer to
                    make the website as simple and intuitive as possible.
                  </p>
                  <p>
                    An understanding of the UX design process is always an
                    advantage for you if you intend to enrol in a UI-UX Design
                    course and look out for UX designer jobs after course
                    completion. A concise UX process allows you to craft amazing
                    experiences for users.
                  </p>
                  <p>
                    Although UX designing may not have any clear cut stages,
                    here are the basics of the process, in a simplified manner:
                  </p>
                  <h3 className="text-yellow">1. Analysis</h3>
                  <p>
                    It's more like a long-term vision of an organisation. If the
                    website isn't able to satisfy expectations, people will
                    abandon it and move to someone else. So the better
                    impression a website creates for customers, the more pleased
                    they will be and the more likely that they will recommend
                    the product or service.
                  </p>
                  <h3 className="text-yellow">2. Research </h3>
                  <p>
                    It's important to know who are your users, and how can they
                    be categorised. Knowing and understanding your target
                    audience has now become a key phase that defines the UX
                    strategy. This knowledge about users and the environment
                    helps to provide a clear direction to the designing.
                  </p>
                  <h3 className="text-yellow">3. Analysis </h3>
                  <p>
                    What is your user looking for on your website and what will
                    be the key elements to help it stand out from others?
                    Answers to this will help finalising the layout of the
                    required interface. Apart from that, by analysing your data
                    on your current user flow, you can improve upon the existing
                    UX experience with your new site.
                  </p>
                  <h3 className="text-yellow">4. Designing </h3>
                  <p>
                    This phase involves idea inputs from different people,
                    generating ideas and figuring out skeletal framework which
                    will eventually form the basis of a later much evolved
                    design. Designing also requires you to put ideas in front of
                    users to get their feedback and work on them.
                  </p>

                  <h3 className="text-yellow">5. Execution </h3>
                  <p>
                    Execution includes user testing sessions, working with
                    feedback from users which provides scope for improvising
                    minor changes in design, evaluation of Beta releases and
                    outcomes, looking at such things as ease of use, validation
                    of the system, utility, efficiency in performing tasks, and
                    so on.
                  </p>
                  <p>
                    An amazing user experience can only be provided by a Design
                    process that has been well tailored according to the wants
                    of user. The basic goal is to improve how a user feels when
                    interfacing with a website.
                  </p>
                  <p>
                    It takes specific set of skills to become a UX Designer. If
                    interested in this in-demand job profile, this would be the
                    right time for you to join a UI-UX Design course and make
                    your mark in the industry.
                  </p>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Designing;
