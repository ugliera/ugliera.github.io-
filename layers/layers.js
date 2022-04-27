var wms_layers = [];

var format_Lorenzo_0 = new ol.format.GeoJSON();
var features_Lorenzo_0 = format_Lorenzo_0.readFeatures(json_Lorenzo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lorenzo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lorenzo_0.addFeatures(features_Lorenzo_0);
var lyr_Lorenzo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lorenzo_0, 
                style: style_Lorenzo_0,
                interactive: true,
                title: '<img src="styles/legend/Lorenzo_0.png" /> Lorenzo'
            });

lyr_Lorenzo_0.setVisible(true);
var layersList = [lyr_Lorenzo_0];
lyr_Lorenzo_0.set('fieldAliases', {'Bassin': 'Bassin', 'name': 'name', 'description': 'description', });
lyr_Lorenzo_0.set('fieldImages', {'Bassin': '', 'name': '', 'description': '', });
lyr_Lorenzo_0.set('fieldLabels', {'Bassin': 'no label', 'name': 'no label', 'description': 'no label', });
lyr_Lorenzo_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});