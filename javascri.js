var typed=new Typed(".auto-type",{
    strings : ["Sachin Thilakarathna ."],
    typeSpeed : 80,
    backSpeed : 80,
    loop : true
})

function myFunction(x) {
x.classList.toggle("change");
}
function myFunction2() {
var x = document.getElementById("myLinks");
if (x.style.display === "block") {
x.style.display = "none";
} else {
x.style.display = "block";
}
}
// -------------------------------------------------------skill edu cer ----- section 5-----------
let lastClickedTab = null;

function openCity(evt, cityName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}

if (lastClickedTab) {
lastClickedTab.classList.remove("active");
}

tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].classList.remove("active"); // Remove the "active" class from all tabs
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.classList.add("active"); // Add the "active" class to the clicked tab
lastClickedTab = evt.currentTarget;
}

// Simulate a click on the first tab to show its content by default
document.querySelector(".tablinks").click();




//-----------------------------------------------------------------------------------------------------------progress bar-------------
// Function to simulate progress for a specific progress bar
function simulateProgress(progressBarId, progressValueId, endPercentage, duration) {
let progressBar = document.getElementById(progressBarId);
let progressValue = document.getElementById(progressValueId);

let intervalId = setInterval(() => {
let currentWidth = parseFloat(progressBar.style.width) || 0;
let increment = (endPercentage - currentWidth) / duration * 10;
progressBar.style.width = `${currentWidth + increment}%`;

// Update the progress value text
progressValue.textContent = `${Math.round(currentWidth + increment)}%`;

// Stop when progress reaches the specified end percentage
if (currentWidth >= endPercentage) {
  clearInterval(intervalId);
}
}, 10);
}

// Function to check if an element is in the viewport
function isInViewport(element) {
const rect = element.getBoundingClientRect();
return (
rect.top >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
);
}

// Function to handle scroll events
function handleScroll() {
const progressSection = document.getElementById('progress-section');

if (isInViewport(progressSection)) {
// Execute the progress simulation for each progress bar
simulateProgress('progress-bar1', 'progress-value1', 85, 50);
simulateProgress('progress-bar2', 'progress-value2', 88, 50);
simulateProgress('progress-bar3', 'progress-value3', 80, 50);
simulateProgress('progress-bar4', 'progress-value4', 93, 50);
simulateProgress('progress-bar5', 'progress-value5', 75, 50);

// Remove the event listener after executing once
window.removeEventListener('scroll', handleScroll);
}
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);




  // -------------------------------------Smooth scroll functionality
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




function scrollToBottom() {
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  }


  // ----------------------------------------hiden menue bar-----------------
  
  let lastScrollTop = 0;

  window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      document.getElementById("d1").style.top = "-100px"; // Adjust based on menu height
    } else {
      document.getElementById("d1").style.top = "0";
    }
    lastScrollTop = currentScroll;
  });
