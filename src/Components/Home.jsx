import React from 'react';
import Video from './media/hackathonvideo.mp4';

export default function Home() {
    return (
        <>
    <section class="showcase">
      <header>
        <h2 class="logo">Vaccinator</h2>
        <div class="toggle"></div>
      </header>

      <video autoPlay loop mute>
          <source src={Video} type="video/mp4"/>
      </video>

      <div class="overlay"></div>

      <div class="text">
        <h2>Take Care of Yourself</h2>
        <h3>Do the vaccination</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla minus
          omnis eius, nam adipisci culpa saepe fugiat delectus ea quaerat dicta
          ipsam, recusandae tempora minima veritatis ratione laudantium
          aspernatur asperiores at alias esse aliquid, dolores porro mollitia.
          Sed minima at nihil, quis facilis assumenda iure minus, officiis
          recusandae porro amet, numquam veritatis doloremque impedit maxime
          beatae totam atque cupiditate ducimus velit quam perferendis? Deleniti
          ducimus iste molestias ad, deserunt voluptatibus? Delectus debitis
          sapiente modi dolor laboriosam provident sed reprehenderit facere,
          eaque nostrum nisi totam cum dicta eveniet tempore aliquid libero
          itaque tempora quod aliquam. Facere vero numquam dolorum ex at!
        </p>
        <a href="#">Explore</a>
      </div>

      <ul class="social">
        <li>
          <a href="#"><img src="/media/facebook.png" alt="" /></a>
        </li>
        <li>
          <a href="#"><img src="/media/twitter.png" alt="" /></a>
        </li>
        <li>
          <a href="#"><img src="/media/instagram.png" alt="" /></a>
        </li>
        <li>
          <a href="#"><img src="/media/youtube.png" alt="" /></a>
        </li>
      </ul>
    </section>

    <div class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Map</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    </>
    )
}
