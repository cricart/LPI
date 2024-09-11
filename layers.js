var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VAU24_1 = new ol.format.GeoJSON();
var features_VAU24_1 = format_VAU24_1.readFeatures(json_VAU24_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VAU24_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VAU24_1.addFeatures(features_VAU24_1);
var lyr_VAU24_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VAU24_1, 
                style: style_VAU24_1,
                popuplayertitle: "VAU24",
                interactive: true,
                title: '<img src="styles/legend/VAU24_1.png" /> VAU24'
            });
var format_ESTAQUEO_VAUN3_2 = new ol.format.GeoJSON();
var features_ESTAQUEO_VAUN3_2 = format_ESTAQUEO_VAUN3_2.readFeatures(json_ESTAQUEO_VAUN3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTAQUEO_VAUN3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEO_VAUN3_2.addFeatures(features_ESTAQUEO_VAUN3_2);
var lyr_ESTAQUEO_VAUN3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEO_VAUN3_2, 
                style: style_ESTAQUEO_VAUN3_2,
                popuplayertitle: "ESTAQUEO_VAU N3",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEO_VAUN3_2.png" /> ESTAQUEO_VAU N3'
            });
var format_BPAN1_3 = new ol.format.GeoJSON();
var features_BPAN1_3 = format_BPAN1_3.readFeatures(json_BPAN1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BPAN1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BPAN1_3.addFeatures(features_BPAN1_3);
var lyr_BPAN1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BPAN1_3, 
                style: style_BPAN1_3,
                popuplayertitle: "BPAN1",
                interactive: true,
                title: '<img src="styles/legend/BPAN1_3.png" /> BPAN1'
            });
var format_ESTAQUEOSVAU3_4 = new ol.format.GeoJSON();
var features_ESTAQUEOSVAU3_4 = format_ESTAQUEOSVAU3_4.readFeatures(json_ESTAQUEOSVAU3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTAQUEOSVAU3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEOSVAU3_4.addFeatures(features_ESTAQUEOSVAU3_4);
var lyr_ESTAQUEOSVAU3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEOSVAU3_4, 
                style: style_ESTAQUEOSVAU3_4,
                popuplayertitle: "ESTAQUEOS VAU 3",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEOSVAU3_4.png" /> ESTAQUEOS VAU 3'
            });
var format_ESTAQUEO_VAU12_5 = new ol.format.GeoJSON();
var features_ESTAQUEO_VAU12_5 = format_ESTAQUEO_VAU12_5.readFeatures(json_ESTAQUEO_VAU12_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTAQUEO_VAU12_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEO_VAU12_5.addFeatures(features_ESTAQUEO_VAU12_5);
var lyr_ESTAQUEO_VAU12_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEO_VAU12_5, 
                style: style_ESTAQUEO_VAU12_5,
                popuplayertitle: "ESTAQUEO_VAU 12",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEO_VAU12_5.png" /> ESTAQUEO_VAU 12'
            });
var format_ESTAQUEO_VAU25_6 = new ol.format.GeoJSON();
var features_ESTAQUEO_VAU25_6 = format_ESTAQUEO_VAU25_6.readFeatures(json_ESTAQUEO_VAU25_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTAQUEO_VAU25_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEO_VAU25_6.addFeatures(features_ESTAQUEO_VAU25_6);
var lyr_ESTAQUEO_VAU25_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEO_VAU25_6, 
                style: style_ESTAQUEO_VAU25_6,
                popuplayertitle: "ESTAQUEO_VAU 25",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEO_VAU25_6.png" /> ESTAQUEO_VAU 25'
            });
var format_ESTAQUEOVAU9_7 = new ol.format.GeoJSON();
var features_ESTAQUEOVAU9_7 = format_ESTAQUEOVAU9_7.readFeatures(json_ESTAQUEOVAU9_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTAQUEOVAU9_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEOVAU9_7.addFeatures(features_ESTAQUEOVAU9_7);
var lyr_ESTAQUEOVAU9_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEOVAU9_7, 
                style: style_ESTAQUEOVAU9_7,
                popuplayertitle: "ESTAQUEO VAU 9",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEOVAU9_7.png" /> ESTAQUEO VAU 9'
            });
var format_ESTAQUEOL2VILMA_8 = new ol.format.GeoJSON();
var features_ESTAQUEOL2VILMA_8 = format_ESTAQUEOL2VILMA_8.readFeatures(json_ESTAQUEOL2VILMA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTAQUEOL2VILMA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEOL2VILMA_8.addFeatures(features_ESTAQUEOL2VILMA_8);
var lyr_ESTAQUEOL2VILMA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEOL2VILMA_8, 
                style: style_ESTAQUEOL2VILMA_8,
                popuplayertitle: "ESTAQUEO L2 VILMA",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEOL2VILMA_8.png" /> ESTAQUEO L2 VILMA'
            });
var format_ESTAQUEO_VAU28_9 = new ol.format.GeoJSON();
var features_ESTAQUEO_VAU28_9 = format_ESTAQUEO_VAU28_9.readFeatures(json_ESTAQUEO_VAU28_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTAQUEO_VAU28_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEO_VAU28_9.addFeatures(features_ESTAQUEO_VAU28_9);
var lyr_ESTAQUEO_VAU28_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEO_VAU28_9, 
                style: style_ESTAQUEO_VAU28_9,
                popuplayertitle: "ESTAQUEO_VAU 28",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEO_VAU28_9.png" /> ESTAQUEO_VAU 28'
            });
var format_ESTAQUEO_VAU01_10 = new ol.format.GeoJSON();
var features_ESTAQUEO_VAU01_10 = format_ESTAQUEO_VAU01_10.readFeatures(json_ESTAQUEO_VAU01_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTAQUEO_VAU01_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEO_VAU01_10.addFeatures(features_ESTAQUEO_VAU01_10);
var lyr_ESTAQUEO_VAU01_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEO_VAU01_10, 
                style: style_ESTAQUEO_VAU01_10,
                popuplayertitle: "ESTAQUEO_VAU 01",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEO_VAU01_10.png" /> ESTAQUEO_VAU 01'
            });
var format_postesExistentesLote2_11 = new ol.format.GeoJSON();
var features_postesExistentesLote2_11 = format_postesExistentesLote2_11.readFeatures(json_postesExistentesLote2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postesExistentesLote2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postesExistentesLote2_11.addFeatures(features_postesExistentesLote2_11);
var lyr_postesExistentesLote2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postesExistentesLote2_11, 
                style: style_postesExistentesLote2_11,
                popuplayertitle: "postes Existentes Lote 2",
                interactive: true,
                title: '<img src="styles/legend/postesExistentesLote2_11.png" /> postes Existentes Lote 2'
            });
var format_postesagregadosmanualmente_12 = new ol.format.GeoJSON();
var features_postesagregadosmanualmente_12 = format_postesagregadosmanualmente_12.readFeatures(json_postesagregadosmanualmente_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postesagregadosmanualmente_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postesagregadosmanualmente_12.addFeatures(features_postesagregadosmanualmente_12);
var lyr_postesagregadosmanualmente_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postesagregadosmanualmente_12, 
                style: style_postesagregadosmanualmente_12,
                popuplayertitle: "postes agregados manualmente",
                interactive: true,
                title: '<img src="styles/legend/postesagregadosmanualmente_12.png" /> postes agregados manualmente'
            });
var format_PostacinfichasL22808_13 = new ol.format.GeoJSON();
var features_PostacinfichasL22808_13 = format_PostacinfichasL22808_13.readFeatures(json_PostacinfichasL22808_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostacinfichasL22808_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinfichasL22808_13.addFeatures(features_PostacinfichasL22808_13);
var lyr_PostacinfichasL22808_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinfichasL22808_13, 
                style: style_PostacinfichasL22808_13,
                popuplayertitle: "Postación fichas L2 28-08",
                interactive: true,
                title: '<img src="styles/legend/PostacinfichasL22808_13.png" /> Postación fichas L2 28-08'
            });
var format_PostacinL2AgostoySeptiembre_14 = new ol.format.GeoJSON();
var features_PostacinL2AgostoySeptiembre_14 = format_PostacinL2AgostoySeptiembre_14.readFeatures(json_PostacinL2AgostoySeptiembre_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostacinL2AgostoySeptiembre_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinL2AgostoySeptiembre_14.addFeatures(features_PostacinL2AgostoySeptiembre_14);
var lyr_PostacinL2AgostoySeptiembre_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinL2AgostoySeptiembre_14, 
                style: style_PostacinL2AgostoySeptiembre_14,
                popuplayertitle: "Postación L2 Agosto y Septiembre",
                interactive: true,
                title: '<img src="styles/legend/PostacinL2AgostoySeptiembre_14.png" /> Postación L2 Agosto y Septiembre'
            });
var format_PDL2_15 = new ol.format.GeoJSON();
var features_PDL2_15 = format_PDL2_15.readFeatures(json_PDL2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDL2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL2_15.addFeatures(features_PDL2_15);
var lyr_PDL2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL2_15, 
                style: style_PDL2_15,
                popuplayertitle: "PD.L2",
                interactive: true,
                title: '<img src="styles/legend/PDL2_15.png" /> PD.L2'
            });
var format_MT3x185L2_16 = new ol.format.GeoJSON();
var features_MT3x185L2_16 = format_MT3x185L2_16.readFeatures(json_MT3x185L2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x185L2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185L2_16.addFeatures(features_MT3x185L2_16);
var lyr_MT3x185L2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185L2_16, 
                style: style_MT3x185L2_16,
                popuplayertitle: "MT 3x185 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x185L2_16.png" /> MT 3x185 L2'
            });
var format_MT3x70L2_17 = new ol.format.GeoJSON();
var features_MT3x70L2_17 = format_MT3x70L2_17.readFeatures(json_MT3x70L2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x70L2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L2_17.addFeatures(features_MT3x70L2_17);
var lyr_MT3x70L2_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L2_17, 
                style: style_MT3x70L2_17,
                popuplayertitle: "MT 3x70 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L2_17.png" /> MT 3x70 L2'
            });
var format_MT3x35L2_18 = new ol.format.GeoJSON();
var features_MT3x35L2_18 = format_MT3x35L2_18.readFeatures(json_MT3x35L2_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x35L2_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35L2_18.addFeatures(features_MT3x35L2_18);
var lyr_MT3x35L2_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35L2_18, 
                style: style_MT3x35L2_18,
                popuplayertitle: "MT 3x35 L2",
                interactive: true,
                title: '<img src="styles/legend/MT3x35L2_18.png" /> MT 3x35 L2'
            });
var format_BT3x701x501x25_19 = new ol.format.GeoJSON();
var features_BT3x701x501x25_19 = format_BT3x701x501x25_19.readFeatures(json_BT3x701x501x25_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BT3x701x501x25_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_19.addFeatures(features_BT3x701x501x25_19);
var lyr_BT3x701x501x25_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_19, 
                style: style_BT3x701x501x25_19,
                popuplayertitle: "BT 3x70+1x50+1x25",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_19.png" /> BT 3x70+1x50+1x25'
            });
var format_MT240L2Subterrneo_20 = new ol.format.GeoJSON();
var features_MT240L2Subterrneo_20 = format_MT240L2Subterrneo_20.readFeatures(json_MT240L2Subterrneo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT240L2Subterrneo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT240L2Subterrneo_20.addFeatures(features_MT240L2Subterrneo_20);
var lyr_MT240L2Subterrneo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT240L2Subterrneo_20, 
                style: style_MT240L2Subterrneo_20,
                popuplayertitle: "MT 240 L2 Subterráneo",
                interactive: true,
                title: '<img src="styles/legend/MT240L2Subterrneo_20.png" /> MT 240 L2 Subterráneo'
            });
var group_LOTE2 = new ol.layer.Group({
                                layers: [lyr_postesExistentesLote2_11,lyr_postesagregadosmanualmente_12,lyr_PostacinfichasL22808_13,lyr_PostacinL2AgostoySeptiembre_14,],
                                fold: "open",
                                title: "LOTE 2"});
var group_Lote2 = new ol.layer.Group({
                                layers: [lyr_VAU24_1,lyr_ESTAQUEO_VAUN3_2,lyr_BPAN1_3,lyr_ESTAQUEOSVAU3_4,lyr_ESTAQUEO_VAU12_5,lyr_ESTAQUEO_VAU25_6,lyr_ESTAQUEOVAU9_7,lyr_ESTAQUEOL2VILMA_8,lyr_ESTAQUEO_VAU28_9,lyr_ESTAQUEO_VAU01_10,],
                                fold: "open",
                                title: "Lote 2"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_VAU24_1.setVisible(true);lyr_ESTAQUEO_VAUN3_2.setVisible(true);lyr_BPAN1_3.setVisible(true);lyr_ESTAQUEOSVAU3_4.setVisible(true);lyr_ESTAQUEO_VAU12_5.setVisible(true);lyr_ESTAQUEO_VAU25_6.setVisible(true);lyr_ESTAQUEOVAU9_7.setVisible(true);lyr_ESTAQUEOL2VILMA_8.setVisible(true);lyr_ESTAQUEO_VAU28_9.setVisible(true);lyr_ESTAQUEO_VAU01_10.setVisible(true);lyr_postesExistentesLote2_11.setVisible(true);lyr_postesagregadosmanualmente_12.setVisible(true);lyr_PostacinfichasL22808_13.setVisible(true);lyr_PostacinL2AgostoySeptiembre_14.setVisible(true);lyr_PDL2_15.setVisible(true);lyr_MT3x185L2_16.setVisible(true);lyr_MT3x70L2_17.setVisible(true);lyr_MT3x35L2_18.setVisible(true);lyr_BT3x701x501x25_19.setVisible(true);lyr_MT240L2Subterrneo_20.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Lote2,group_LOTE2,lyr_PDL2_15,lyr_MT3x185L2_16,lyr_MT3x70L2_17,lyr_MT3x35L2_18,lyr_BT3x701x501x25_19,lyr_MT240L2Subterrneo_20];
lyr_VAU24_1.set('fieldAliases', {'ALIMENTADOR': 'ALIMENTADOR', 'N° DE SOSTEN': 'N° DE SOSTEN', 'TIPO DE POSTE': 'TIPO DE POSTE', 'COORDENADA X': 'COORDENADA X', 'COORDENADA Y': 'COORDENADA Y', });
lyr_ESTAQUEO_VAUN3_2.set('fieldAliases', {'Sostén': 'Sostén', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'POSTE': 'POSTE', });
lyr_BPAN1_3.set('fieldAliases', {'sosten': 'sosten', 'poste': 'poste', 'X': 'X', 'Y': 'Y', });
lyr_ESTAQUEOSVAU3_4.set('fieldAliases', {'Alimentador': 'Alimentador', 'Nro de Sosten': 'Nro de Sosten', 'x': 'x', 'y': 'y', });
lyr_ESTAQUEO_VAU12_5.set('fieldAliases', {'Sostén': 'Sostén', 'ESTE': 'ESTE', 'NORTE': 'NORTE', });
lyr_ESTAQUEO_VAU25_6.set('fieldAliases', {'Sostén': 'Sostén', 'ESTE': 'ESTE', 'NORTE': 'NORTE', });
lyr_ESTAQUEOVAU9_7.set('fieldAliases', {'N° DE SOSTEN': 'N° DE SOSTEN', 'TIPO DE POSTE': 'TIPO DE POSTE', 'COORDENADA X': 'COORDENADA X', 'COORDENADA Y': 'COORDENADA Y', });
lyr_ESTAQUEOL2VILMA_8.set('fieldAliases', {'Sostén': 'Sostén', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_ESTAQUEO_VAU28_9.set('fieldAliases', {'Sostén': 'Sostén', 'ESTE': 'ESTE', 'NORTE': 'NORTE', });
lyr_ESTAQUEO_VAU01_10.set('fieldAliases', {'Sostén': 'Sostén', 'ESTE': 'ESTE', 'NORTE': 'NORTE', });
lyr_postesExistentesLote2_11.set('fieldAliases', {'Nro. De So': 'Nro. De So', 'Tipo de Po': 'Tipo de Po', 'Coord.X': 'Coord.X', 'Coord. Y': 'Coord. Y', 'X': 'X', 'y': 'y', 'xx': 'xx', 'yy': 'yy', });
lyr_postesagregadosmanualmente_12.set('fieldAliases', {'sosten': 'sosten', 'tipo': 'tipo', 'x': 'x', 'y': 'y', });
lyr_PostacinfichasL22808_13.set('fieldAliases', {'Alimentado': 'Alimentado', 'Nro de Sos': 'Nro de Sos', 'tipo/poste': 'tipo/poste', 'Coord. X.': 'Coord. X.', 'Coord. Y': 'Coord. Y', 'X': 'X', });
lyr_PostacinL2AgostoySeptiembre_14.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Autor': 'Autor', 'Fecha de inicio': 'Fecha de inicio', 'Fecha fin': 'Fecha fin', 'Cuadrilla 2': 'Cuadrilla 2', 'Alimentadores Lote 2': 'Alimentadores Lote 2', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'Creado': 'Creado', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_PDL2_15.set('fieldAliases', {'fecha de montaje': 'fecha de montaje', 'Alimentador': 'Alimentador', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'N° Ande': 'N° Ande', 'N° Fabrica': 'N° Fabrica', 'Marca': 'Marca', });
lyr_MT3x185L2_16.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_MT3x70L2_17.set('fieldAliases', {'INICIO-FIN': 'INICIO-FIN', 'FECHA': 'FECHA', 'LONGITUD': 'LONGITUD', });
lyr_MT3x35L2_18.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_BT3x701x501x25_19.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_MT240L2Subterrneo_20.set('fieldAliases', {'Fecha': 'Fecha', 'Inicio-Fin': 'Inicio-Fin', 'Longitud': 'Longitud', });
lyr_VAU24_1.set('fieldImages', {'ALIMENTADOR': 'TextEdit', 'N° DE SOSTEN': 'Range', 'TIPO DE POSTE': 'TextEdit', 'COORDENADA X': 'Range', 'COORDENADA Y': 'Range', });
lyr_ESTAQUEO_VAUN3_2.set('fieldImages', {'Sostén': 'TextEdit', 'ESTE': 'Range', 'NORTE': 'Range', 'POSTE': 'TextEdit', });
lyr_BPAN1_3.set('fieldImages', {'sosten': 'Range', 'poste': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_ESTAQUEOSVAU3_4.set('fieldImages', {'Alimentador': 'TextEdit', 'Nro de Sosten': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_ESTAQUEO_VAU12_5.set('fieldImages', {'Sostén': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', });
lyr_ESTAQUEO_VAU25_6.set('fieldImages', {'Sostén': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', });
lyr_ESTAQUEOVAU9_7.set('fieldImages', {'N° DE SOSTEN': 'TextEdit', 'TIPO DE POSTE': 'TextEdit', 'COORDENADA X': 'Range', 'COORDENADA Y': 'TextEdit', });
lyr_ESTAQUEOL2VILMA_8.set('fieldImages', {'Sostén': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_ESTAQUEO_VAU28_9.set('fieldImages', {'Sostén': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', });
lyr_ESTAQUEO_VAU01_10.set('fieldImages', {'Sostén': 'TextEdit', 'ESTE': 'Range', 'NORTE': 'Range', });
lyr_postesExistentesLote2_11.set('fieldImages', {'Nro. De So': 'TextEdit', 'Tipo de Po': 'TextEdit', 'Coord.X': 'TextEdit', 'Coord. Y': 'TextEdit', 'X': 'TextEdit', 'y': 'TextEdit', 'xx': 'TextEdit', 'yy': 'TextEdit', });
lyr_postesagregadosmanualmente_12.set('fieldImages', {'sosten': 'TextEdit', 'tipo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_PostacinfichasL22808_13.set('fieldImages', {'Alimentado': 'TextEdit', 'Nro de Sos': 'TextEdit', 'tipo/poste': 'TextEdit', 'Coord. X.': 'TextEdit', 'Coord. Y': 'TextEdit', 'X': 'TextEdit', });
lyr_PostacinL2AgostoySeptiembre_14.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Autor': 'TextEdit', 'Fecha de inicio': 'TextEdit', 'Fecha fin': 'TextEdit', 'Cuadrilla 2': 'TextEdit', 'Alimentadores Lote 2': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Creado': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_PDL2_15.set('fieldImages', {'fecha de montaje': 'TextEdit', 'Alimentador': 'TextEdit', 'Coordenada X': 'Range', 'Coordenada Y': 'Range', 'N° Ande': 'Range', 'N° Fabrica': 'Range', 'Marca': 'TextEdit', });
lyr_MT3x185L2_16.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT3x70L2_17.set('fieldImages', {'INICIO-FIN': 'TextEdit', 'FECHA': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT3x35L2_18.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_BT3x701x501x25_19.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT240L2Subterrneo_20.set('fieldImages', {'Fecha': 'TextEdit', 'Inicio-Fin': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_VAU24_1.set('fieldLabels', {'ALIMENTADOR': 'no label', 'N° DE SOSTEN': 'no label', 'TIPO DE POSTE': 'no label', 'COORDENADA X': 'no label', 'COORDENADA Y': 'no label', });
lyr_ESTAQUEO_VAUN3_2.set('fieldLabels', {'Sostén': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', 'POSTE': 'no label', });
lyr_BPAN1_3.set('fieldLabels', {'sosten': 'no label', 'poste': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_ESTAQUEOSVAU3_4.set('fieldLabels', {'Alimentador': 'no label', 'Nro de Sosten': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ESTAQUEO_VAU12_5.set('fieldLabels', {'Sostén': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', });
lyr_ESTAQUEO_VAU25_6.set('fieldLabels', {'Sostén': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', });
lyr_ESTAQUEOVAU9_7.set('fieldLabels', {'N° DE SOSTEN': 'no label', 'TIPO DE POSTE': 'no label', 'COORDENADA X': 'no label', 'COORDENADA Y': 'no label', });
lyr_ESTAQUEOL2VILMA_8.set('fieldLabels', {'Sostén': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', });
lyr_ESTAQUEO_VAU28_9.set('fieldLabels', {'Sostén': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', });
lyr_ESTAQUEO_VAU01_10.set('fieldLabels', {'Sostén': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', });
lyr_postesExistentesLote2_11.set('fieldLabels', {'Nro. De So': 'no label', 'Tipo de Po': 'no label', 'Coord.X': 'no label', 'Coord. Y': 'no label', 'X': 'no label', 'y': 'no label', 'xx': 'no label', 'yy': 'no label', });
lyr_postesagregadosmanualmente_12.set('fieldLabels', {'sosten': 'no label', 'tipo': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_PostacinfichasL22808_13.set('fieldLabels', {'Alimentado': 'no label', 'Nro de Sos': 'no label', 'tipo/poste': 'no label', 'Coord. X.': 'no label', 'Coord. Y': 'no label', 'X': 'no label', });
lyr_PostacinL2AgostoySeptiembre_14.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Autor': 'no label', 'Fecha de inicio': 'no label', 'Fecha fin': 'no label', 'Cuadrilla 2': 'no label', 'Alimentadores Lote 2': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'Creado': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_PDL2_15.set('fieldLabels', {'fecha de montaje': 'no label', 'Alimentador': 'no label', 'Coordenada X': 'no label', 'Coordenada Y': 'no label', 'N° Ande': 'no label', 'N° Fabrica': 'no label', 'Marca': 'no label', });
lyr_MT3x185L2_16.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_MT3x70L2_17.set('fieldLabels', {'INICIO-FIN': 'no label', 'FECHA': 'no label', 'LONGITUD': 'no label', });
lyr_MT3x35L2_18.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_BT3x701x501x25_19.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_MT240L2Subterrneo_20.set('fieldLabels', {'Fecha': 'no label', 'Inicio-Fin': 'no label', 'Longitud': 'no label', });
lyr_MT240L2Subterrneo_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});