var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kulonprogoclipped_1 = new ol.format.GeoJSON();
var features_Kulonprogoclipped_1 = format_Kulonprogoclipped_1.readFeatures(json_Kulonprogoclipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulonprogoclipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulonprogoclipped_1.addFeatures(features_Kulonprogoclipped_1);
var lyr_Kulonprogoclipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kulonprogoclipped_1, 
                style: style_Kulonprogoclipped_1,
                popuplayertitle: 'Kulonprogo — clipped',
                interactive: true,
    title: 'Kulonprogo — clipped<br />\
    <img src="styles/legend/Kulonprogoclipped_1_0.png" /> BAGELEN<br />\
    <img src="styles/legend/Kulonprogoclipped_1_1.png" /> BOROBUDUR<br />\
    <img src="styles/legend/Kulonprogoclipped_1_2.png" /> GALUR<br />\
    <img src="styles/legend/Kulonprogoclipped_1_3.png" /> GIRIMULYO<br />\
    <img src="styles/legend/Kulonprogoclipped_1_4.png" /> KALIBAWANG<br />\
    <img src="styles/legend/Kulonprogoclipped_1_5.png" /> KALIGESING<br />\
    <img src="styles/legend/Kulonprogoclipped_1_6.png" /> KOKAP<br />\
    <img src="styles/legend/Kulonprogoclipped_1_7.png" /> LENDAH<br />\
    <img src="styles/legend/Kulonprogoclipped_1_8.png" /> LOANO<br />\
    <img src="styles/legend/Kulonprogoclipped_1_9.png" /> MINGGIR<br />\
    <img src="styles/legend/Kulonprogoclipped_1_10.png" /> MOYUDAN<br />\
    <img src="styles/legend/Kulonprogoclipped_1_11.png" /> NANGGULAN<br />\
    <img src="styles/legend/Kulonprogoclipped_1_12.png" /> NGLUWAR<br />\
    <img src="styles/legend/Kulonprogoclipped_1_13.png" /> PAJANGAN<br />\
    <img src="styles/legend/Kulonprogoclipped_1_14.png" /> PANDAK<br />\
    <img src="styles/legend/Kulonprogoclipped_1_15.png" /> PANJATAN<br />\
    <img src="styles/legend/Kulonprogoclipped_1_16.png" /> PENGASIH<br />\
    <img src="styles/legend/Kulonprogoclipped_1_17.png" /> PURWODADI<br />\
    <img src="styles/legend/Kulonprogoclipped_1_18.png" /> SALAMAN<br />\
    <img src="styles/legend/Kulonprogoclipped_1_19.png" /> SAMIGALUH<br />\
    <img src="styles/legend/Kulonprogoclipped_1_20.png" /> SEDAYU<br />\
    <img src="styles/legend/Kulonprogoclipped_1_21.png" /> SENTOLO<br />\
    <img src="styles/legend/Kulonprogoclipped_1_22.png" /> SRANDAKAN<br />\
    <img src="styles/legend/Kulonprogoclipped_1_23.png" /> TEMON<br />\
    <img src="styles/legend/Kulonprogoclipped_1_24.png" /> WATES<br />\
    <img src="styles/legend/Kulonprogoclipped_1_25.png" /> <br />' });
var format_Titik_wisata_KP_2 = new ol.format.GeoJSON();
var features_Titik_wisata_KP_2 = format_Titik_wisata_KP_2.readFeatures(json_Titik_wisata_KP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_wisata_KP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_wisata_KP_2.addFeatures(features_Titik_wisata_KP_2);
var lyr_Titik_wisata_KP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_wisata_KP_2, 
                style: style_Titik_wisata_KP_2,
                popuplayertitle: 'Titik_wisata_KP',
                interactive: true,
                title: '<img src="styles/legend/Titik_wisata_KP_2.png" /> Titik_wisata_KP'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Kulonprogoclipped_1.setVisible(true);lyr_Titik_wisata_KP_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Kulonprogoclipped_1,lyr_Titik_wisata_KP_2];
lyr_Kulonprogoclipped_1.set('fieldAliases', {'fid': 'fid', 'KECAMATAN': 'KECAMATAN', });
lyr_Titik_wisata_KP_2.set('fieldAliases', {'qBF1Pd': 'qBF1Pd', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'FOTO': 'FOTO', });
lyr_Kulonprogoclipped_1.set('fieldImages', {'fid': 'TextEdit', 'KECAMATAN': 'TextEdit', });
lyr_Titik_wisata_KP_2.set('fieldImages', {'qBF1Pd': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_Kulonprogoclipped_1.set('fieldLabels', {'fid': 'no label', 'KECAMATAN': 'inline label - always visible', });
lyr_Titik_wisata_KP_2.set('fieldLabels', {'qBF1Pd': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'FOTO': 'no label', });
lyr_Titik_wisata_KP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});