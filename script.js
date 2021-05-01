// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 59.4921715020665054, lng: 18.274354968006786 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    mapTypeControl: false,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
