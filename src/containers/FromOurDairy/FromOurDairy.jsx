import React from "react";
import "./fromOurDairy.scss";
import {
  OurDairy1,
  OurDairy2,
  OurDairy3,
  OurDairy4,
  OurDairy5,
  OurDairy6,
  OurDairy7,
  OurDairy8,
  OurDairy9,
} from "../../assets/ourDairy";
import OurDairyCard from "../../components/ourDairyCard/OurDairyCard";
import { Container } from "react-bootstrap";

const data = [
  {
    id: 1,
    src: OurDairy1,
    date: "NOV 01, 2023",
    text: "To meet the needs of homeowners Kohler co. distribution and services network.",
    label: "Case Study",
  },
  {
    id: 2,
    src: OurDairy2,
    date: "NOV 01, 2023",
    text: "6 small but Important Things to Observe in Web",
    label: "Blog",
  },
  {
    id: 3,
    src: OurDairy3,
    date: "NOV 01, 2023",
    text: "Corbett Adventure create memories, not iust checklists.",
    label: "DX Life",
  },
  {
    id: 4,
    src: OurDairy4,
    date: "NOV 01, 2023",
    text: "Corbett Adventure create memories, not iust checklists.",
    label: "DX Life",
  },
  {
    id: 5,
    src: OurDairy5,
    date: "NOV 01, 2023",
    text: "6 small but Important Things to Observe in Web",
    label: "Blog",
  },
  {
    id: 6,
    src: OurDairy6,
    date: "NOV 01, 2023",
    text: "A full Landing page design for Arena Animation.",
    label: "Case Study",
  },
  {
    id: 7,

    src: OurDairy9,
    date: "NOV 01, 2023",
    text: "To meet the needs of homeowners Kohler co. distribution and services network.",
    label: "Case Study",
  },
  {
    id: 8,
    src: OurDairy8,
    date: "NOV 01, 2023",
    text: "To meet the needs of homeowners Kohler co. distribution and services network.",
    label: "Case Study",
  },
  {
    id: 9,
    src: OurDairy7,
    date: "NOV 01, 2023",
    text: "6 small but Important Things to Observe in Web",
    label: "Blog",
  },
];

const FromOurDairy = ({ blogs }) => {
  return (
    <Container fluid className="">
      <div className="heading">FROM OUR DIARY</div>
      <Container className="fromOurDairyContainer">
        <div className="ourDairyGrid">
          {blogs &&
            blogs.map((item) => (
              <>
                {console.log(item)}
                <OurDairyCard key={item.id} {...item} />
              </>
            ))}
        </div>
      </Container>
    </Container>
  );
};

export default FromOurDairy;
