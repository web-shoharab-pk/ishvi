import React from 'react'
import "./Step.css"

function Step() {
    const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
};

    return (
        <div>
            <div class="container">
      <div class="progress-container">
        <div class="progress" id="progress"></div>
        <div class="circle active">1</div>
        <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.25 1L6.25 12L1.25 7" stroke="#00C953" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <div class="circle">2</div>
        <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.25 1L6.25 12L1.25 7" stroke="#00C953" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <div class="circle">3</div>
        
        <div class="circle">4</div>
      </div>
      <button class="btn" id="prev" disabled>Prev</button>
      <button class="btn" id="next">Next</button>
    </div>
        </div>
    )
}

export default Step
