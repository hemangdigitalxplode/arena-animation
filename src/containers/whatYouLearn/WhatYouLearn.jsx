import React, { useState, useEffect } from "react";
import "./whatYouLearn.scss";
import { Row, div, Container } from "react-bootstrap";
import { YellowTick } from "../../assets";

// const data = [
//   {
//     id: 1,
//     points: [
//       {
//         id: 1,
//         point: "Design and Visualization Fundamentals",
//       },
//       {
//         id: 2,
//         point: "Graphics & Illustration Fundamentals",
//       },
//       {
//         id: 3,
//         point: "Typography Techniques",
//       },
//       {
//         id: 4,
//         point: "Illustrations for Print",
//       },
//       {
//         id: 5,
//         point: "Creating Artworks",
//       },
//       {
//         id: 6,
//         point: "Image Magic wifh Photoshop CC",
//       },
//       {
//         id: 7,
//         point: "Design for Print and Advertising",
//       },
//       {
//         id: 8,
//         point: "Page Design",
//       },
//     ],
//   },
//   {
//     id: 2,
//     points: [
//       {
//         id: 1,
//         point: "Concepts of Cinematography",
//       },
//       {
//         id: 2,
//         point: "Visual Scripting with Film Language",
//       },
//       {
//         id: 3,
//         point: "Storyboarding and Animatics",
//       },
//       {
//         id: 4,
//         point: "Working with Audio",
//       },
//       {
//         id: 5,
//         point: "Digital Video Editing, className Grading & Finishing",
//       },
//       {
//         id: 6,
//         point: "Digital Compositing",
//       },
//       {
//         id: 7,
//         point: "Portfolio Project",
//       },
//       {
//         id: 8,
//         point: "what-you-learn",
//       },
//     ],
//   },
// ];

const WhatYouLearn = ({ courseTerms }) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    setTerm(courseTerms && courseTerms[0]?.term_description);
  }, [courseTerms]);

  return (
    <Container className="whatYouLearn">
      <div className="title whatYouLearn-title">What you will learn</div>
      <div className="Terms-label">
        {courseTerms?.map((term) => (
          <div
            className="Terms-inner"
            key={term?.id}
            onClick={() => setTerm(term?.term_description)}
          >
            {term?.title}
          </div>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: term }} />

      {/* <div class="row term-points">
        <div class="term-points-card  col-lg-5">
          <div class="term-point">
            <span style="color:Yellow">✔</span> Concepts of Cinematography
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span>
            Visual Scripting with Film Language
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Storyboarding and Animatics
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Working with Audio
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Digital Video Editing, class
            Grading & Finishing
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Digital Compositing
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Portfolio Project
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> what-you-learn
          </div>
        </div>
        <div class="term-points-card col-lg-5">
          <div class="term-point">
            <span style="color:Yellow">✔</span> Design and Visualization
            Fundamentals
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Graphics & Illustration
            Fundamentals
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Typography Techniques
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Illustrations for Print
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Creating Artworks
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Image Magic wifh Photoshop CC
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Design for Print and Advertising
          </div>
          <div class="term-point">
            <span style="color:Yellow">✔</span> Page Design
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export default WhatYouLearn;
