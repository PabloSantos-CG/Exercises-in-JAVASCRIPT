async function createCountry(country) {
  const div = document.createElement("div")
  div.classList.add("country")

  const countryName = country.name.common
  const name = document.createElement("h2")
  name.textContent = countryName

  const flag = document.createElement("img")
  flag.src =  country.flags.svg
  flag.alt = countryName

  div.append(name, flag)
  document.querySelector("#countries").append(div)
}

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all")

  const contries = await response.json()
  console.log(contries)

  contries.forEach(createCountry)
  
}

getCountries()