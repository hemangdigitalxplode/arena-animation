import React from "react";
import "./bloginner.scss";
import { Col, Container, Image, Row } from "react-bootstrap";

function BlogList() {
  return (
    <>
      <div className="blog-single gray-bg">
        <Container>
          <Row className="align-items-start">
            <div className="top-banner-section-blog d-flex justify-content-center align-items-center">
              <Image
                src="https://animationdelhincr.com/admin/public/uploads/blog/n-Feature-image2.jpg"
                alt=""
                fluid
                className="height-80vh"
                width="100%"
                style={{ opacity: 0.5 }}
              />
              <h1 className="reward-title" style={{ fontSize: "76px" }}>
                {" "}
                Blue Screen Vs Green Screen: Explained{" "}
              </h1>
            </div>
            <Col sm={12} md={12} className="m-15 px-tb  pt-5">
              <div className="article-img"></div>
              <article className="article ps-4 mt-0">
                <div className="article-title">
                  <h3>Blue Screen Vs Green Screen: Explained</h3>
                </div>
                <div className="article-content">
                  <p className="text-justify">
                    As an aspiring VFX Artist, you must have seen tons of
                    behind-the-scenes footage of movies that use advanced VFX
                    techniques to create fascinating visuals for the audience.
                    Something common in all of them is the usage of blue and
                    green screens. Sci-fi, period and fantasy genre movies use
                    them all the time. Before we dive into it further, first
                    let’s understand the concept of chroma keying. It is the
                    process of shooting video on a solid colour backdrop which
                    is later replaced by the required footage or CGI. It isn’t
                    strictly a post-production process as shooting on a screen
                    on set is the first part of the entire workflow.
                  </p>
                  <p>
                    But why only blue or green? Blue and green are on the
                    opposite ends of the color spectrum. Red and orange which
                    correspond to the skin tones, so by using blue or green you
                    have lesser unwanted effects when keying a person on screen.
                  </p>
                  <p>
                    Should you choose the blue or the green screen for chroma
                    key compositing? This essentially depends on the lighting of
                    scene to be shot. If it’s a daytime background, then green
                    in the ideal choice as it blends seamlessly. Blue as you’d
                    have guessed is best for replicating nighttime. Apart from
                    that the choice actually isn’t that simple.
                  </p>
                  <blockquote>
                    <p>
                      Blue is a higher frequency colour than green and thus
                      gives a more distinct keyed image with greater contrast.
                    </p>
                  </blockquote>
                  <p>
                    The blue screen is also the most common choice of the
                    compositor as it has less depth than green screen and so it
                    does not stand out in the real world. The blue screen can be
                    created using silk or fine fabric coated with an emulsion of
                    fine particles of a light reflecting material. Most people
                    like to use velvet for this purpose, but fabric such as
                    muslin can also serve as a good option. Talking about the
                    counterpart, green color is processed the cleanest with the
                    most luminance. The result is that you will be able to pull
                    a clean key with the least amount of noise, and often,
                    without a complicated lighting setup. Conversely, because of
                    green’s brightness, it can also lead to more ‘spill,’
                    meaning the green color may reflect and bleed over on your
                    on-screen talent. It isn’t that big of a problem and one of
                    the easiest ways to avoid it is to ensure distance between
                    the actor and the screen.
                  </p>
                  <p>
                    Now it may seem as though blue is superior to green, which
                    to some extent is right. But it does have its own downsides
                    too. Blue screen will require twice as much light as green
                    screen thus it’s an expensive choice. This difference in
                    luminosity results in less colour spill than green. You
                    would not want your post production to be messy after all.
                  </p>
                  <p>
                    In conclusion even though blue gets the upper hand, the
                    green screen is still the most popular choice for chroma key
                    compositing since it's cheaper and has lesser depth with
                    respect to its surface. Nevertheless, you may need to use
                    both screens in various circumstances. The ideal solution is
                    not just one. Fascinated with the behind-the-scene
                    intricacies about film-making? You can become an integral
                    part of the process too. Get trained in VFX fundamental and
                    advanced techniques at Arena Animation. Check out the career
                    courses in VFX here and take the first step ahead in your
                    career pursuit.
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

export default BlogList;
