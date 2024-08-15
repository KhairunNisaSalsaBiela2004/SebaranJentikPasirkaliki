var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_KelurahanPasirkaliki_1 = new ol.format.GeoJSON();
var features_KelurahanPasirkaliki_1 = format_KelurahanPasirkaliki_1.readFeatures(json_KelurahanPasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelurahanPasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanPasirkaliki_1.addFeatures(features_KelurahanPasirkaliki_1);
var lyr_KelurahanPasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanPasirkaliki_1, 
                style: style_KelurahanPasirkaliki_1,
                popuplayertitle: "Kelurahan Pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/KelurahanPasirkaliki_1.png" /> Kelurahan Pasirkaliki'
            });
var format_KawasanSebaranJentik_2 = new ol.format.GeoJSON();
var features_KawasanSebaranJentik_2 = format_KawasanSebaranJentik_2.readFeatures(json_KawasanSebaranJentik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanSebaranJentik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanSebaranJentik_2.addFeatures(features_KawasanSebaranJentik_2);
var lyr_KawasanSebaranJentik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanSebaranJentik_2, 
                style: style_KawasanSebaranJentik_2,
                popuplayertitle: "Kawasan Sebaran Jentik",
                interactive: true,
                title: '<img src="styles/legend/KawasanSebaranJentik_2.png" /> Kawasan Sebaran Jentik'
            });
var format_Titikjentik_3 = new ol.format.GeoJSON();
var features_Titikjentik_3 = format_Titikjentik_3.readFeatures(json_Titikjentik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titikjentik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titikjentik_3.addFeatures(features_Titikjentik_3);
var lyr_Titikjentik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titikjentik_3, 
                style: style_Titikjentik_3,
                popuplayertitle: "Titik jentik",
                interactive: true,
                title: '<img src="styles/legend/Titikjentik_3.png" /> Titik jentik'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_KelurahanPasirkaliki_1.setVisible(true);lyr_KawasanSebaranJentik_2.setVisible(true);lyr_Titikjentik_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_KelurahanPasirkaliki_1,lyr_KawasanSebaranJentik_2,lyr_Titikjentik_3];
lyr_KelurahanPasirkaliki_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_KawasanSebaranJentik_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Titikjentik_3.set('fieldAliases', {'Name': 'Name', });
lyr_KelurahanPasirkaliki_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_KawasanSebaranJentik_2.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Titikjentik_3.set('fieldImages', {'Name': '', });
lyr_KelurahanPasirkaliki_1.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_KawasanSebaranJentik_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Titikjentik_3.set('fieldLabels', {'Name': 'no label', });
lyr_Titikjentik_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});