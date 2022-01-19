 require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "national-geographic"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 3,
          center: [89, 34] // longitude, latitude
        });
      });
