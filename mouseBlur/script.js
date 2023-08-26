"use strict";
const blur = document.getElementById("blur");

document.body.onpointermove = (e) => {
  const { clientX, clientY } = e;

// new follower, slows the animation
  blur.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );

  // old follower ! 
  // blur.style.left = `${clientX}px`;
  // blur.style.top = `${clientY}px`;
};
