(() => {

  gsap.registerPlugin(ScrollToPlugin);

    gsap.to(".hero-logo", {
      duration: 5,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      delay: 2,
    });

    gsap.from(".hero-title", {
      duration: 2,
      opacity: 1,
      y: -150,
      ease: "power3.out",
      delay: 1,
    });
        
  
    gsap.to(".button", {
      duration: 1,
      opacity: 1,
      y: -50,
      ease: "power3.out",
      delay: 3,
    });

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

   const model = document.querySelector("#model");
   const hotspots = document.querySelectorAll(".Hotspot");
 
   const infoBoxes = [
     {
       title: "Smart touch controls",
       text: "Most smart touch controls use capacitive touch sensors, which detect electrical charge variations. ",
       img: "../images/logo.png",
     },
     {
       title: "Bluetooth 5.3, Faster Pairing",
       text: "By reducing the time required to switch from idle to active, this feature can also speed up reconnections and improve the user experience.",
       img: "../images/logo.png",
     },
     {
       title: "IP7 Water & Sweat Resistant",
       text: "Devices with IP7 are tested for immersion in up to 1 meter of water for up to 30 minutes without sustaining damage.",
       img: "../images/logo.png",
     },
   ];
 
   function modelLoaded() {
     hotspots.forEach((hotspot) => {
       hotspot.style.display = "block";
     });
   }
 
   function loadInfo() {

    infoBoxes.forEach((infoBox, index) => {
  
      let selected = document.querySelector(`#hotspot-${index+1}`);
  
      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;

      const imgElement = document.createElement("img");
      imgElement.src = infoBox.image;

      selected.appendChild(titleElement);
      selected.appendChild(textElement);
      selected.appendChild(imgElement);

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

  //Event listeners

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
 
})();