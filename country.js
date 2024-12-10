const btn = document.getElementById("dark-btn");
const davlatRasm =document.getElementById("davlat-rasmi")
const davlatText =document.getElementById("davlat-text")

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});



const davlat = JSON.parse(localStorage.getItem("davlat"))[0];

console.log(davlat)

davlatRasm.src=davlat.flags.svg;
davlatText.innerHTML=`
<h1>${davlat.name.common}</h1>
<h3>Poytaxti: ${davlat.capital}</h3>
<h3>Aholisi:  ${davlat.population}</h3>
<h3>Maydoni: ${davlat.area} km kv</h3>
<p><b>Chegaradosh davlatlari: ${davlat.borders}</p>
`