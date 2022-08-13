ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.758542, 37.5988043],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.758542, 37.5988043],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../img/map-mark.svg",
      iconImageSize: [20, 20]
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}
