import React from "react";
import "./bloginner.scss";
import { Col, Container, Image, Row } from "react-bootstrap";

function CanAnimation() {
  return (
    <>
      <div className="blog-single gray-bg">
        <Container>
          <Row className="align-items-start">
            <div className="top-banner-section-blog d-flex justify-content-center align-items-center">
              <Image
                src="https://animationdelhincr.com/admin/public/uploads/blog/animation-as-an-art-form.jpg"
                alt=""
                fluid
                className="height-80vh"
                width="100%"
                style={{ opacity: 0.5 }}
              />
              <div className="reward-title" style={{ fontSize: "76px" }}>
                Can Animation Be Considered ...
              </div>
            </div>
            <Col sm={12} md={12} className="m-15 px-tb  pt-5">
              <article className="article ps-4 mt-0">
                <div className="article-title">
                  <h3>Can Animation Be Considered as an Art Form?</h3>
                </div>
                <div className="article-content">
                  <p className="text-justify">
                    The things that usually come to our mind when we hear the
                    word “Art” are paintings, sculptures or even music. But is
                    that it? Has the scope of art expanded beyond that?
                  </p>

                  <p>
                    Art is a human activity that involves creative or
                    imaginative talent to express beauty, emotions or ideas. The
                    debate as to whether computer-aided images can be considered
                    art is not new.
                  </p>
                  <p>
                    It is now increasingly being accepted that an animation
                    created on Autodesk Maya or any other software is as much an
                    art as a painting made with a real brush and colours, as it
                    involves a similar amount of skills, precision, perfection,
                    aesthetics and designing capacity.
                  </p>
                  <p>
                    The audience of animation movies and cartoons would agree.
                    After all, the exquisite pictures and characters that we see
                    in animation movies must have been created by some artist.
                  </p>

                  <p>
                    Conventional Art forms can be broadly classified as • Visual
                    Arts (Architecture, Painting, Sculpture) <br />
                    • Literary Arts (Fiction, Drama, Poetry, Prose) <br />
                    • Performing Arts (Dance, Music, Theatre) <br />
                    • Culinary Arts (Cooking, wine-making) <br />• Media Arts
                    (Filmmaking, Photography)
                  </p>
                  <p>
                    However, since the advent of computers in the latter half of
                    the 20th Century, a new category of Art has emerged called
                    New Media Arts. These include visual artworks that are
                    designed and produced using new media technologies. Computer
                    Graphics, Computer Animation, Digital Art, Internet Art, 3D
                    Printing and countless others are all included in this
                    modern art form.
                  </p>
                  <p>
                    The following characteristics of Animation give a strong
                    argument for it being an art form:
                  </p>
                  <h3 className="text-yellow">
                    Involves Creativity and Imagination
                  </h3>
                  <p>
                    Animation is essentially a creative activity. It involves
                    imagining new characters, objects environments, stories etc.
                    and giving them different colours, shades, textures,
                    expressions and a hundred such elements.
                  </p>
                  <h3 className="text-yellow">Personal Skills </h3>
                  <p>
                    To become an Animator some certain personal abilities and
                    skills are required. An actor is not necessarily a good
                    singer or a musician. What art a person is good at depends
                    on their traits and interests.
                  </p>
                  <h3 className="text-yellow">Practical Knowledge</h3>
                  <p>
                    All art forms revolve around the application of skills in
                    practical life situations. For example, to be a singer, it
                    is not enough to memorize all ragas, one has to apply the
                    knowledge of ragas to sing different songs. Similarly, more
                    than theoretical jargon, the animation is much more about
                    the practical application of skills and techniques.
                  </p>
                  <p>
                    Animators must learn to apply various animation software and
                    techniques that are taught in different animation courses
                    from reputed institutes.
                  </p>
                  <h3 className="text-yellow">
                    Requires perfection through practice
                  </h3>
                  <p>
                    Perfection is something an artist can never truly achieve,
                    but it’s something he or she constantly needs to strive for,
                    through practice. To use a music analogy, a singer needs to
                    do what is called riyaz, which is a regular exercise.
                    Animation too requires constant practice by creating new
                    projects, sharpening existing skills etc.
                  </p>
                  <p>
                    All this is to say that Animation is now universally
                    considered as a piece of art and consequently animators
                    deserve the same respect as artists. To get your worth as a
                    professional animator, you should always look for an
                    institute with a dedicated Link it to: placement cell that
                    can land you in one of the big companies in the animation
                    industry and also keep you updated with recent industry
                    trends.
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

export default CanAnimation;
