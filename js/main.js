(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const navLinks = document.querySelectorAll("#header nav ul li a");

    function scrollLink(e) {    
            e.preventDefault(); 
            console.log(e.currentTarget.hash);
            let selectedLink = e.currentTarget.hash;
            gsap.to(window, {duration: 1, scrollTo:{y:`${selectedLink}`, offsetY:100 }});
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", scrollLink);
    });

    
  gsap.to(".hero-logo", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.3,
  });
      
  gsap.to(".hero-title", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.5,
  });

  gsap.to(".button", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.9,
  });

  document.querySelectorAll(".specification").forEach(function (button) {
    button.addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".ar-jbl" });
    });
  });

  document
    .getElementById("viewButton")
    .addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".ar-jbl" });
    });

    
   // hotspots Selection

   const jbl = document.querySelector("#jbl");
   const hotspots = document.querySelectorAll(".Hotspot");
 
   const InfoBoxes = [
     {
       title: "Quick Charging Technology",
       text: "Utilize advanced charging technologies like Qualcomm Quick Charge, USB Power Delivery, or proprietary fast charging methods to ensure rapid charging",
       image: "../images/hotspot.svg",
     },
     {
       title: "Sound Quality",
       text: "High-quality audio drivers for clear and balanced sound,Noise isolation or cancellation for a better listening experience",
       image: "../images/hotspot.svg",
     },
     {
       title: "Intuitive Control Mapping",
       text: "Design intuitive tap mappings, such as double-tap for play/pause, triple-tap for the next track, and so on. Make it easy for users to remember and use these controls.",
       image: "../images/hotspot.svg",
     },
     {
       title: "Transparency Mode",
       text: "a transparency mode that allows external sounds to pass through for safety or awareness.",
       image: "../images/hotspot.svg",
     },
   ];
 
   function modelLoaded() {
     hotspots.forEach((hotspot) => {
       hotspot.style.display = "block";
     });
   }
 
   function loadInfo() {
     InfoBoxes.forEach((infoBox, index) => {
       let selected = document.querySelector(`#hotspot-${index + 1}`);
 
       const titleElement = document.createElement("h2");
       titleElement.textContent = infoBox.title;
 
       const textElement = document.createElement("p");
       textElement.textContent = infoBox.text;
 
       selected.appendChild(titleElement);
       selected.appendChild(textElement);
     });
   }
   loadInfo();
 
   function showInfo() {
     let selected = document.querySelector(`#${this.slot}`);
     gsap.to(selected, 1, { autoAlpha: 1 });
   }
 
   function hideInfo() {
     let selected = document.querySelector(`#${this.slot}`);
     gsap.to(selected, 1, { autoAlpha: 0 });
   }
 
   //Event Listener
   model.addEventListener("load", modelLoaded);
 
   hotspots.forEach(function (hotspot) {
     hotspot.addEventListener("mouseover", showInfo);
     hotspot.addEventListener("mouseout", hideInfo);
   });
 
   //end-hotspots

})();