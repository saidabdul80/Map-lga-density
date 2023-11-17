//width:100%;height:98vh;"
let cont_id = "abujaId"
let abuja_sketch = `
<h1></h1>
     <span id="jstip" class="jstip"></span>
        <div id="mapwrapper">
            <div id="map_base">

            <g id="visnames">
            <div>
        </div>
     `;
     let abuja = new MakeMap(cont_id)
     abuja.sketchMap(abuja_sketch)            
 $(document).ready(function(){    
     abuja.CalMap(abuja.propertyMaker());
 })


"hover":""
"url": "",
"target": "same_window",
"upColor": "#f1ffc8",
"overColor": "#d9ff66",
"downColor": "#cae9af",
"active": !0