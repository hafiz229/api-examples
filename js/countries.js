const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();

const displayCountries = (countries) => {
  //   for (const country of countries) {
  //     console.log(country);
  //   }
  const countriesDiv = document.getElementById("countries");
  countries.forEach((country) => {
    console.log(country);
    // create a div tag
    const div = document.createElement("div");
    // add div in a class
    div.classList.add("country");
    // create a <h3> tag
    const h3 = document.createElement("h3");
    // set innerText of <h3> as the country name
    h3.innerText = country.name;
    // finally append the change of <h3> tag to the web page
    div.appendChild(h3);
    // create a <p> tag
    const p = document.createElement("p");
    // set innerText of <p> tag as the capital name
    p.innerText = country.capital;
    // finally append the change of <p> tag to the web page
    div.appendChild(p);
    // finally append the whole <div> in the web page
    countriesDiv.appendChild(div);
  });
};
