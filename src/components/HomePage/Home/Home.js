import React, { useState } from "react";
import dataHomes from "../../../data/dataHomes/dataHomes";
import dataExperience from "../../../data/dataExperiences/dataExperiences";
import "./Home.css";
import SearchForm from "../SearchForm/SearchForm";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import HomesSection from "../HomesSection/HomesSection";
import { Link } from "react-router-dom";

const Home = () => {
  const [experienceBlock] = useState(dataExperience);
  const [homesBlock] = useState(dataHomes);
  return (
    <div className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>
              <strong>Where do you want to go?</strong>
            </h5>
            <SearchForm></SearchForm>
          </div>
          <div className="col-lg-8 d-flex flex-column">
            <div className="experiences-section">
              <div className="home-section-title">
                <h4>Experiences</h4>
                <Link
                  className="section-all-item-link"
                  to="./"
                  style={{ textDecoration: "none" }}
                >
                  See All
                </Link>
              </div>
              <div className="row">
                {experienceBlock.map((experience) => {
                  return (
                    <div key={experience.id} className="col-lg-3">
                      <ExperienceSection
                        experience={experience}
                      ></ExperienceSection>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="homes-section">
              <div className="home-section-title">
                <h4>Homes</h4>
                <Link
                  className="section-all-item-link"
                  to="./"
                  style={{ textDecoration: "none" }}
                >
                  See All
                </Link>
              </div>
              <div className="row">
                {homesBlock.map((home) => {
                  return (
                    <div key={home.id} className="col-lg-4">
                      <HomesSection home={home}></HomesSection>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
