import React from 'react';
const api = {
  key: '0e71daa9a596930fcb60ea1c1facb117',
  base: "https://home.openweathermap.org/data/2.5/"
}

function App() {

	const dateBuilder = (d) => {
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`
	}


  return (
    <div className="app warm">
     <main>
       <div className="search-box">
       	<input
       		type="text"
       		className="search-bar"
       		placeholder="Search..."
       	/>
       </div>

       <div className="location-box">
       	<div className="location">San Francisco, USA</div>
       	<div className="date">{dateBuilder(new Date())}</div>
       </div>
       <div className="weather-box">
       	<div className="temp">
       		15 &deg C
       	</div>
       	<div className="weather">Sunny</div>
       </div>
     </main>
    </div>
  );
}

export default App;
