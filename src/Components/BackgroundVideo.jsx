import React from "react";
import { Link } from "react-router-dom";
import classes from "./BackgroundVideo.module.css";

const BackgroundVideo = () => {
  const videoSource =
    "https://res.cloudinary.com/dppglrm2s/video/upload/v1615625043/hackvideofinal_r8ti7n.mp4";
  return (
    <div className={classes.Container}>
      <video autoPlay='autoplay' loop='loop' muted className={classes.Video}>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <h1>TAKE CARE OF YOURSELF</h1>
          <h2>Vaccination around the Europe</h2>
          <p>
            The world is in the midst of a COVID-19 pandemic. As Vaccinator and
            partners work together on the response tracking the pandemic,
            advising on critical interventions, distributing vital medical
            supplies to those in need they are racing to develop and deploy safe
            and effective vaccines. Vaccines save millions of lives each year.
            Vaccines work by training and preparing the body’s natural defences
            – the immune system – to recognize and fight off the viruses and
            bacteria they target. After vaccination, if the body is later
            exposed to those disease-causing germs, the body is immediately
            ready to destroy them, preventing illness.
          </p>
          <Link to='/map'>
            <button type='button' className='btn btn-outline-dark'>
              FIND YOUR CENTER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
