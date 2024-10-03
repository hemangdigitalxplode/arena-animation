import React from "react";
import "./bloginner.scss";
import { Col, Container, Image, Row } from "react-bootstrap";

function GettheBasicsRight() {
  return (
    <>
      <div className="blog-single gray-bg">
        <Container>
          <Row className="align-items-start">
            <div className="top-banner-section-blog d-flex justify-content-center align-items-center">
              <Image
                src="https://animationdelhincr.com/admin/public/uploads/blog/arena-blog-n.jpg"
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
                    Get the Basics Right! 12 Principles of Animation (Part 2)
                  </h3>
                </div>
                <div className="article-content">
                  <p className="text-justify">
                    And we’re back! In the previous blog, we covered the first
                    six principles of animation.
                  </p>

                  <p>
                    Here we look into the remaining six principles of animation
                    that every animator should know.
                  </p>
                  <p>
                    While animation is constantly evolving, these twelve
                    concepts continues to form the base and is taught in all
                    popular animation institutes around the world.
                  </p>
                  <h3 className="text-yellow">Arc</h3>
                  <p>
                    Try waving your hand, swinging your leg or turning your
                    head. These a natural arc to these movements. This arc
                    brings in realism to characters in animation, unless, of
                    course, your character is a robot. See how Po’s head moves?
                  </p>

                  <h3 className="text-yellow">Staging</h3>

                  <p>
                    Derived from the concept of staging in theatre, this is the
                    process of setting up a scene with the appropriate placement
                    of characters, background and foreground elements, and
                    camera angle. Staging should clearly set the mood for the
                    action and keep the audience’s focus on what is relevant in
                    the scene.
                  </p>
                  <h3 className="text-yellow">Secondary Action </h3>
                  <p>
                    As the name suggests, this is an action that supports the
                    main action of a character. A character may whistle while
                    walking or scratch his head while thinking. Such actions add
                    dimensions to character animation. If there are multiple
                    secondary actions, they should work together in support of
                    one another. Look at little Riley’s actions while she
                    screams at the top of her lungs.
                  </p>
                  <h3 className="text-yellow"> Exaggeration </h3>
                  <p>
                    This principle is self-explanatory. Animated movies and
                    cartoons allow for the most amazing thing - exaggeration.
                    Imagine, how boring Kung Fu Panda will be without Po’s
                    exaggerated expressions or how plain Tom and Jerry will be
                    without the exaggerated movements of the characters.
                    Exaggeration of facial features, expressions, actions, and
                    attitudes add more appeal and fun to the characters. Here is
                    a classic example of exaggeration.
                  </p>
                  <h3 className="text-yellow"> Solid Drawing </h3>
                  <p>
                    In 2D animation, solid drawing is about maintaining
                    proportions, volume & weight of a character or an object
                    regardless of the action. With the introduction of 3D
                    animation, the challenge of distorted drawing has been
                    minimised. But the concept of posing out your characters
                    with correct balance & weight remains as important as ever.
                  </p>

                  <h3 className="text-yellow"> Appeal </h3>
                  <p>
                    In real life, you may call it the charisma of an actor. In
                    animation, it is the ‘appeal’. Every character should have
                    an appeal that interests the audience. An appealing
                    character is not necessarily cute & cuddly. Villainous &
                    monstrous ones too have to be appealing. Clear drawing and
                    good character design will define the personality of the
                    characters. After all, who would have thought that a slender
                    woman in a nice red dress could be a super villain? Yet,
                    here she is...Scarlet Overkill!
                  </p>
                  <p>
                    Now get back to that drawing board and practice these
                    principles of animation to improve your work.
                  </p>
                  <p>Watch this space for more tips and tricks of animation.</p>
                  <p>
                    Interested in a career in animation? Take a look at the
                    animation career courses that can help you get the right
                    skill sets!
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

export default GettheBasicsRight;
