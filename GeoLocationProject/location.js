const showLocation = document.getElementById("location");
const getLocation = document.querySelector(".button");
const details = document.querySelector(".details");

getLocation.addEventListener("click", locationFinder);

function locationFinder() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
            const latitude = console.log(position.coords.latitude);
            const longitude = console.log(position.coords.longitude);
            if (showLocation.style.display == "block") {
                showLocation.innerHTML = ` Your Location is: <br><br> Latitude : ${position.coords.latitude} <br><br> Longitude: ${position.coords.longitude}`;
            }
            else {
                showLocation.innerHTML += `<br><br> Latitude : ${position.coords.latitude} <br><br> Longitude: ${position.coords.longitude}`;
            }
            showLocation.style.display = "block";
            details.style.display = "none";
        },
            function (error) {
                console.log(error);
                details.removeChild(details.firstChild);
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        details.innerHTML = "<h3>User denied Permission to check. Please provide permission first.</h3>";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        details.innerHTML = "<h3>Location Information Unavailable.</h3>";
                        break;
                    case error.TIMEOUT:
                        details.innerHTML = "<h3>TimeOut. Try Again Later</h3>";
                        break;
                    case error.UNKOWN_ERROR:
                        details.innerHTML = "<h3>We don't know what happened. Try Again Later</h3>";
                        break;
                }
            }
        );
    }
}