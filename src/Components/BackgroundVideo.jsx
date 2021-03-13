import React from "react";
import { Link } from "react-router-dom";
import classes from "./BackgroundVideo.module.css";

const BackgroundVideo = () => {
  const videoSource =
    "https://res.cloudinary.com/dppglrm2s/video/upload/v1615584886/hackathonvideo_ipt8r4.mp4";
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <h1>TAKE CARE OF YOURSELF</h1>
          <p>Vaccination around the Europe</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            debitis fugiat mollitia! Deserunt facere eligendi odio officiis eos
            quas voluptas iusto aliquid quos. Architecto alias quam quasi
            laboriosam possimus reprehenderit dignissimos. Deleniti aliquid,
            temporibus architecto natus enim velit nemo, cum iste assumenda
            voluptate saepe excepturi consequuntur quae maiores quod nostrum
            inventore eaque laborum! Quod saepe id aspernatur totam architecto
            explicabo ab ipsum ipsa accusamus reiciendis, praesentium veritatis
            distinctio earum numquam natus. Ut quam sint similique hic
            dignissimos quidem aspernatur tempora totam vitae ab, repudiandae
            harum debitis assumenda asperiores incidunt. Corporis ut nam
            eligendi, dolore repudiandae sunt quam magnam rerum! Dignissimos.
          </p>
          <Link to="/map">
            <button type="button" className="btn btn-outline-dark">
            EXPLORE THE MAP
     </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;