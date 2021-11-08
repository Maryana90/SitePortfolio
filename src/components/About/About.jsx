import React from "react";
import q from "./About.module.css";
import photo from "./AboutPhoto/photographer.jpg";


const About = () => {
  return (
    <div className={q.about}>
      <div className={q.aboutContent}>
        <div className={q.photoContent}>
          <img className={q.photo} src={photo} alt="" />
        </div>
        <div className={q.textContent}>
          <p className={q.textAbout}>
            Who am I? It's both simple and complicated question. But I started
            telling about myself from philosophy. And I'm going to change
            direction and to tell about myself from reality. I'm photographer,
            writer and… business analyst. Funny? Not reliable? Not so related to
            creativity? I think every occupation is connected with creativity.
            And my path is to balance between different jobs and to find the
            soul in any occupation. Photography for me is like collaboration
            between two souls: models and mine.
          </p>
          <p className={q.textAbout}>
            I adore opening in models their true core traits, something that
            they didn't even know about themselves. I dream to make my models
            happier from process of the photosession and of course from the
            result. I don't use photo manipulation via special software, cause I
            think good photographer should play with light. That's why I don't
            afraid to show to models all pics without manipulation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
