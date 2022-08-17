function covid_api() {
    var country_name = document.getElementById("search").value ;

  
    var url = `https://api.covid19api.com/live/country/${country_name}/status/confirmed`;
    fetch(url) 
    .then (res=>res.json())
    .then (data=>display(data));
    
    document.getElementById("result").textContent = " "; 
  }
  
  function country_api(){
    var country_name = document.getElementById("search").value ;
    var url1 = `https://restcountries.com/v3.1/name/${country_name}?fullText=true`;
     
    fetch(url1) 
    .then (res=>res.json())
    .then (data1=>
      {
         console.log(data1);
  
    var oldDiv = document.getElementById("result");
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `
            <h3>Wait a few seconds<h3>
            <div class="showcase">
              <div class="data-showcase">
                <img src="${data1[0].flags.svg}" class="flag-img">
              </div>
            </div>
    
            <h2>${data1[0].name.common}</h2>
            <div class="showcase">
                  <div class="data-showcase">
                      <h4>Continent:</h4>
                      <span>${data1[0].continents[0]}</span>
                  </div>
              </div>
              <div class="showcase">
                  <div class="data-showcase">
                      <h4>Sub Region:</h4>
                      <span>${data1[0].subregion}</span>
                  </div>
              </div>
             <div class="showcase">
                 <div class="data-showcase">
                     <h4>Capital:</h4>
                     <span>${data1[0].capital[0]}</span>
                 </div>
             </div>             
              <div class="showcase">
                  <div class="data-showcase">
                        <h4>Population:</h4>
                        <span>${data1[0].population}</span>
                  </div>
              </div>
              <div class="showcase">
                  <div class="data-showcase">
                        <h4>Status:</h4>
                        <span>${data1[0].status}</span>
                  </div>
              </div>
              <div class="showcase">
                  <div class="data-showcase">
                    <h4>Area:</h4>
                    <span>${data1[0].area} Square Km</span>
                  </div>
              </div>
                
    `;
  
    oldDiv.appendChild(newDiv);
  
   });
  
  document.getElementById("search").value = ""; 
    
  }
  
  function display(data) {

    var oldDiv = document.getElementById("result");
    var newDiv = document.createElement("div");

    newDiv.innerHTML = `

              <div class="banner animate__animated animate__shakeX">
                  <h3>Covid-19 Update of ${data[data.length-1].Country} :</h3><br>
              </div>
          <div class="showcase ">
              <div class="data-showcase animate__animated animate__shakeX">
                  <h4>Confirmed:</h4>
                  <span>${data[data.length-1].Confirmed}</span>
              </div>
          </div>
          <div class="showcase ">
              <div class="data-showcase animate__animated animate__shakeX">
                  <h4>Active:</h4>
                  <span>${data[data.length-1].Active}</span>
              </div>
          </div>
          <div class="showcase ">
          <div class="data-showcase animate__animated animate__shakeX">
              <h4>Deaths:</h4>
              <span>${data[data.length-1].Deaths}</span>
          </div>
      </div>
          <div class="showcase">
              <div class="data-showcase">
              <h3>For more information click below<h3>
              <button class="button-stl"id="search-btn" onclick="country_api()">More Details</button>
              </div>
          </div>
          
    `;
  
    oldDiv.appendChild(newDiv);
    
  }