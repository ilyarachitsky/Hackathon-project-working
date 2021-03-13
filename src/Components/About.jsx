import React from "react";

export default function About() {
  return (
    <div>
      <h1>About us</h1>
      <hr />
      <section className="bout">
        Hello! We are a team of Wild Code School Students and this is our
        project – the website where you can find the information about
        vaccination centers in different countries around the Europe. Due to the
        COVID-19 pandemic we are working and studying remotely currently so this
        virus affected us as well. Thus, having created this website we also
        want to contribute to struggling against the pandemic and rescue
        people’s lives.
      </section>
      <hr />
      <h1>The team</h1>
      <div className="team">
        <div className="gino">
          <h3>Gino</h3>
          <h4>Frontend Developer</h4>
          <img
            className="picgino"
            alt = "Gino"
            src="https://res.cloudinary.com/nooskii/image/upload/v1615643804/hackathon/circle-cropped_1_xzjqpn.png"
          />
        </div>

        <div className="hugo">
          <h3>Hugo</h3>
          <h4>Frontend Developer</h4>
          <img
            className="picgino"
            alt = "Hugo"
            src="https://res.cloudinary.com/nooskii/image/upload/v1615644534/hackathon/circle-cropped_jen9yu.png"
          />
        </div>

        <div className="ilya">
          <h3>Ilya</h3>
          <h4>Frontend Developer</h4>
          <img
            className="picgino"
            alt = "Ilya"
            src="https://res.cloudinary.com/nooskii/image/upload/v1615644534/hackathon/circle-cropped_2_hf7bds.png"
          />
        </div>

        <div className="anna">
          <h3>Anna</h3>
          <h4>Frontend Developer</h4>
          <img
            className="picgino"
            alt = "Anna"
            src="https://res.cloudinary.com/nooskii/image/upload/v1615644534/hackathon/circle-cropped_4_vw258e.png"
          />
        </div>

        <div className="kastus">
          <h3>Kastus</h3>
          <h4>Frontend Developer</h4>
          <img
            className="picgino"
            alt = "Kastus"
            src="https://res.cloudinary.com/nooskii/image/upload/v1615644534/hackathon/circle-cropped_3_toduvz.png"
          />
        </div>
      </div>

      <div className="images"></div>
    </div>
  );
}
