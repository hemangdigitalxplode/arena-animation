import React from "react";
import "./bloginner.scss";
import { rewardsBanner } from "../../assets";
import { Col, Container, Image, Row } from "react-bootstrap";

function Oscar2020() {
  return (
    <>
      <div className="blog-single gray-bg">
        <Container>
          <Row className="align-items-start">
            <div className="top-banner-section">
              <Image src={rewardsBanner} alt="" fluid className="height-80vh" />
              <div className="reward-title" style={{fontSize:"76px"}}> Oscar 2020 Winner and Nominees .. </div>
            </div>
            <Col sm={12} md={12} className="m-15 px-tb  pt-5">
              <div className="article-img">
                <Image
                  src="https://animationdelhincr.com/admin/public/uploads/blog/first.jpg"
                  title=""
                  alt=""
                  width={"100%"}
                />
              </div>
              <article className="article ps-4 mt-0">
                <div className="article-title">
                  <h3 className="text-white">
                    Oscar 2020 Winner and Nominees for Best Visual Effects
                  </h3>
                </div>
                <div className="article-content">
                  <p className="text-justify">
                    The Oscar 2020 nominations for best visual effects had the
                    strongest contenders. While the prospects of Disney looked
                    great with three movies, the others had more or less if not
                    equal the chances for a win.
                  </p>
                  <h3 className="text-white">1947</h3>
                  <p>
                    This Oscar winner proves that visual effects are not just
                    some replacements done to a green screen through digital
                    machinery. It necessarily involves production design and a
                    creative approach to achieving effects possible without the
                    use of heavy editing. The way this movie incorporated VFX
                    into it is absolutely genius. The movie had to be framed in
                    such a way that I was entirety captured in one single shot.
                    In this movie, the camera never cuts away from the action.
                    The task of integrating multiple shots together seamlessly
                    was an incredibly challenging task for the VFX team.
                    Depending on the type of shot, different approaches were
                    used to achieve the desired results. The fact that the movie
                    was produced in native IMAX (widescreen with incredibly
                    high-resolution) format made it even more complicated. The
                    digital painting work of the VFX artists had to be precise
                    and intricate.
                  </p>
                  <blockquote>
                    <p>
                      Apart from 1917, Birdman too was shot using this
                      one-continuous shot technique and was nominated for an
                      Oscar in the same category.
                    </p>
                  </blockquote>
                  <p>
                    In a nutshell, VFX is more effective when it goes
                    unnoticeable.
                  </p>
                  <h3 className="text-white">The Irishman</h3>
                  <p>
                    It is masterpiece from Martin Scorsese and a big budget
                    ambition project due to the cast and the de-aging used in
                    it. Now, it is a familiar technique (seen in Iron man 3, Ant
                    Man, and Terminator: Dark Fate earlier). In The Irishman it
                    was used in the flashback scenes where De Niro is required
                    to look like his 40s. The present age of De Niro is 76. If
                    you haven’t watched it already it is available on Netflix.
                  </p>
                  <h3 className="text-white">Avengers Endgame</h3>
                  <p>
                    Being the most anticipated movie of 2019, VFX artists had no
                    room for error. The final fight sequence against the army of
                    Thanos made a memorable impact on the viewers. However,
                    Marvel was condemned by critics for using too much CGI. The
                    Marvel team mentioned that the nearing deadlines left less
                    time for production design to develop full-fledged sets, and
                    they had to rely on VFX.
                  </p>
                  <h3 className="text-white">The Lion King</h3>
                  <p>
                    Imagine the CGI being so good that it actually becomes a
                    shortcoming of the movie. That’s exactly what happened with
                    The Lion King. In the original animated counterpart, the
                    characters portrayed their personalities through expressions
                    and quirks while the live action seemed flat due to the
                    hyper-realistic animation. Still kudos to the Disney artists
                    for they have almost blurred the lines between reality and
                    CGI with the movies like The Jungle Book and The Lion King.
                    VFX isn’t an easy task and to mimic the movements and
                    natures of animals is nothing less than a revolutionary
                    feat.
                  </p>
                  <h3 className="text-white">Star Wars: The Rise of Skywalker</h3>
                  <p>
                    Layers of work went into The Rise of Skywalker. Some of the
                    most striking VFX moments from the film include the assembly
                    of Leia's farewell from deleted scenes shot by Carrie Fisher
                    years before her death, the blending of old-school models
                    and digital effects, and flashback scene of Luke and Leia
                    training created with the elements from the Return of the
                    Jedi.
                  </p>
                  <p>
                    Do you think 1917 deserves the Oscar win? Or do you have
                    another personal favourite? Let us know in the comments. 
                    </p>
                    <p>
                    If you wish to be more than just a spectator of amazing visual
                    effects, join a VFX course and get the skills to create your
                    own VFX. Click here to know more.
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

export default Oscar2020;
