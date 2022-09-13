import _ from "lodash";
const planetName = document.querySelector("#planet-name");
const planetImage = document.querySelector("#planet-img");
const calculate = document.querySelector("#calculate");
const img = document.querySelector("#img");
const weight = document.querySelector("#weight");
const info_container = document.querySelector("#info-container");
const weight_info = document.querySelector("#weight-info");
let error = document.createElement("p");
const getImages = () => {
  const mass = document.querySelector("#Mass");
  const planet = planetName.options[planetName.selectedIndex].text;
  if (mass.value === "") return errorer("Mass is required");
  if (Number.isNaN(Number(mass.value)))
    return errorer("Mass must be an integer");
  if (planet === "-select planet-")
    return errorer("You have not chosen any planet yet");
  if (weight_info.classList.contains("hidden")) {
    weight_info.classList.remove("hidden");
  }
  if (planetImage.classList.contains("hidden")) {
    planetImage.classList.remove("hidden");
  }
  info_container.childNodes.forEach((e) => {
    e.textContent == "Mass is required" ? info_container.removeChild(error) : e;
    e.textContent == "Mass must be an integer"
      ? info_container.removeChild(error)
      : e;
  });
  info_container.classList.add("grid");
  weight.textContent = weightCalculator();
  return (img.src = `../assets/img/${planet}.webp`);
};
calculate.addEventListener("click", (e) => {
  getImages();
});

const weightCalculator = () => {
  let F = 0;
  const mass = document.querySelector("#Mass");
  const m = mass.value;
  const gravity = () => {
    const planet = planetName.options[planetName.selectedIndex].text;
    if (planet === "Mecury") return 3.7;
    if (planet === "Venus") return 8.87;
    if (planet === "Earth") return 9.807;
    if (planet === "Mars") return 3.721;
    if (planet === "Jupiter") return 24.79;
    if (planet === "Saturn") return 10.44;
    if (planet === "Uranus") return 8.87;
    if (planet === "Neptune") return 11.15;
    if (planet === "Pluto") return 0.62;
  };
  const g = gravity();
  F = m * g;
  return `${F.toFixed(2)} N`;
};

const errorer = (err) => {
  weight_info.classList.add("hidden");
  planetImage.classList.add("hidden");
  info_container.classList.remove("grid");
  error.textContent = err;
  error.style.textAlign = "center";
  error.style.color = "white";
  info_container.appendChild(error);
  return;
};

window.addEventListener("load", (e) => {
  weight_info.classList.add("hidden");
  info_container.classList.remove("grid");
});
