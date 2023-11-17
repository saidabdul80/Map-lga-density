
class MakeMap{

    constructor(cont_id, p = {config:[], pins_config:[]}){
        this.cont_id = cont_id,        
        this.p = p
        this.property ={}
    }
 sketchMap(sketch){
    if(this.cont_id==''){    
        throw new Error( 'container id is required');    
       }else{
           $("#"+this.cont_id).html(sketch);
       }
}
modProperty(index,name, value){
    this.property[index][name] = value
}
setProperty(name, value){
    let $this = this;
    Object.keys(this.property).map((item,i,arr)=>{        
        $this.property[item][name] = value;
     })
}
CalMap(ngjsconfig){     
    let p = this.p
    let ngjsconfig2 =[]; 
    let pins_config2 = [];    
    let $this = this;
    this.property = ngjsconfig;    
    if(p.hasOwnProperty("config")){
        ngjsconfig2 = p.config;   
      }
  
    if(p.hasOwnProperty("pins_config")){
      pins_config2 = p.pins_config;
    }

     
  /* var this.property = {
      [$this.cont_id+"_ngjs1"]:{
          "hover": "ABIA",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs2"]: {
          "hover": "<b><u>ADAMAWA</u></b><br>Write any text and load images<br><img src='assets/images/example.png'>",
          "url": "",
          "target": "same_window",
          "upColor": "#f1ffc8",
          "overColor": "#d9ff66",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs3"]: {
          "hover": "<b><u>AKWA IBOM</u></b><br><span style='color: #bcbcbc;'>Street Address:</span><br>&nbsp;321 Example, Address 54321<br><span style='color: #bcbcbc;'>Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234",
          "url": "",
          "target": "same_window",
          "upColor": "#d7f57a",
          "overColor": "#beef2a",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs4"]: {
          "hover": "<b><u>ANAMBRA</u></b><br><span style='color: #999;'>*Click to open a webpage*</span>",
          "url": "",
          "target": "same_window",
          "upColor": "#f1ffc8",
          "overColor": "#d9ff66",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs5"]: {
          "hover": "<b><u>BAUCHI</u></b><br><span style='color: #999;'>Click to open a modal window!</span><br><span style='color: #ff6666;'><b>Modal Window Option is Compatible<br> with Bootstrap Only.</b></span>",
          "url": "#mymodal",
          "target": "modal",
          "upColor": "#edff66",
          "overColor": "#cbe600",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs6"]: {
          "hover": "BAYELSA",
          "url": "",
          "target": "same_window",
          "upColor": "#E0E2E2",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs7"]: {
          "hover": "BENUE",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs8"]: {
          "hover": "BORNO",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs9"]: {
          "hover": "CROSS RIVER",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs10"]: {
          "hover": "DELTA",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs11"]: {
          "hover": "EBONYI",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs12"]: {
          "hover": "EDO",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs13"]: {
          "hover": "<b><u>EKITI</u></b><br>Write any text and load images<br><img src='assets/images/example.png'>",
          "url": "",
          "target": "same_window",
          "upColor": "#f1ffc8",
          "overColor": "#d9ff66",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs14"]: {
          "hover": "ENUGU",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs15"]: {
          "hover": "GOMBE",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs16"]: {
          "hover": "IMO",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs17"]: {
          "hover": "JIGAWA",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs18"]: {
          "hover": "KADUNA",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs19"]: {
          "hover": "<b><u>KANO</u></b><br><span style='color: #999;'>*Click to open a webpage*</span>",
          "url": "",
          "target": "same_window",
          "upColor": "#f1ffc8",
          "overColor": "#d9ff66",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs20"]: {
          "hover": "KATSINA",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs21"]: {
          "hover": "KEBBI",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs22"]: {
          "hover": "KOGI",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs23"]: {
          "hover": "KWARA",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs24"]: {
          "hover": "<b><u>LAGOS</u></b><br><span style='color: #999;'>*Click to open a webpage*</span>",
          "url": "",
          "target": "same_window",
          "upColor": "#f1ffc8",
          "overColor": "#d9ff66",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs25"]: {
          "hover": "<b><u>NASARAWA</u></b><br>Write any text and load images<br><img src='assets/images/example.png'>",
          "url": "",
          "target": "same_window",
          "upColor": "#f1ffc8",
          "overColor": "#d9ff66",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs26"]: {
          "hover": "NIGER",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      [$this.cont_id+"_ngjs27"]: {
          "hover": "OGUN",
          "url": "",
          "target": "same_window",
          "upColor": "#FFFFF3",
          "overColor": "#ECFFB3",
          "downColor": "#cae9af",
          "active": !0
      },
      "general": {
          "borderColor": "#9CA8B6",
          "visibleNames": "#adadad"
      }
  }; */
  
  let itx;
  ngjsconfig2.forEach((item, i)=>{
      if(item.hasOwnProperty("state")){
  
          itx = $this.cont_id+"_ngjs"+item.state; 
          if(item.hasOwnProperty("hover")){
              
              this.property[itx].hover = item.hover
          }   
          if(item.hasOwnProperty("url")){
              this.property[itx].url = item.url
          } 
          if(item.hasOwnProperty("target")){
              this.property[itx].target = item.target
          } 
          if(item.hasOwnProperty("upColor")){
              this.property[itx].upColor = item.upColor
          } 
          if(item.hasOwnProperty("overColor")){
              this.property[itx].overColor = item.overColor
          }   
          if(item.hasOwnProperty("downColor")){
              this.property[itx].downColor = item.downColor
          }   
          if(item.hasOwnProperty("active")){
              this.property[itx].active = item.active
          }            
      }else{
          throw new Error('undefined state in config index '+ i)
      }
  });
  
  this.isTouchEnabled = function() {
      return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
  
  jQuery(function() {
      
          jQuery("path[id^="+$this.cont_id+"_ngjs]").each(function(i, e) {
              $this.ngaddEvent(jQuery(e).attr("id"));
          });
  });
  
  
  this.ngaddEvent = function(id, relationId) {    
      var _obj = jQuery("#" + id);
      var arr = id.split("");
      var _Textobj = jQuery("#" + id + "," + "#"+$this.cont_id+"_ngjsvn" + arr.slice(4).join(""));      
      jQuery("#" +$this.cont_id+ [ "_visnames" ]).attr({
          fill: this.property.general.visibleNames +" important"
      });
      _obj.attr({
          fill: $this.property[id].upColor  +" important",
          stroke: $this.property.general.borderColor  +" important"
      });
      _Textobj.attr({
          cursor: "default"
      });
      if ($this.property[id].active === !0) {
          _Textobj.attr({
              cursor: "pointer"
          });
          _Textobj.hover(function() {            
              jQuery("#"+$this.cont_id+"_jstip").show().html($this.property[id].hover);
              _obj.css({
                  fill: $this.property[id].overColor  +" important"
              });
          }, function() {
              jQuery("#"+$this.cont_id+"_jstip").hide();
              jQuery("#" + id).css({
                  fill: $this.property[id].upColor  +" important"
              });
          });
          if ($this.property[id].target !== "none") {
              _Textobj.mousedown(function() {
                  jQuery("#" + id).css({
                      fill: $this.property[id].downColor +" important"
                  });
              });
          }
          _Textobj.mouseup(function() {
              jQuery("#" + id).css({
                  fill: $this.property[id].overColor  +" important"
              });
              if ($this.property[id].target === "new_window") {
                  window.open($this.property[id].url);
              } else if ($this.property[id].target === "same_window") {
                  window.parent.location.href = $this.property[id].url;
              } else if ($this.property[id].target === "modal") {
                  jQuery($this.property[id].url).modal("show");
              }
          });
          _Textobj.mousemove(function(e) {
              var x = e.pageX + 10, y = e.pageY + 15;
              var tipw = jQuery("#"+$this.cont_id+"_jstip").outerWidth(), tiph = jQuery("#"+$this.cont_id+"_jstip").outerHeight(), x = x + tipw > jQuery(document).scrollLeft() + jQuery(window).width() ? x - tipw - 20 * 2 : x;
              y = y + tiph > jQuery(document).scrollTop() + jQuery(window).height() ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y;
              jQuery("#"+$this.cont_id+"_jstip").css({
                  left: x,
                  top: y
              });
          });
          if ($this.isTouchEnabled()) {
              _Textobj.on("touchstart", function(e) {
                  var touch = e.originalEvent.touches[0];
                  var x = touch.pageX + 10, y = touch.pageY + 15;
                  var tipw = jQuery("#"+$this.cont_id+"_jstip").outerWidth(), tiph = jQuery("#"+$this.cont_id+"_jstip").outerHeight(), x = x + tipw > jQuery(document).scrollLeft() + jQuery(window).width() ? x - tipw - 20 * 2 : x;
                  y = y + tiph > jQuery(document).scrollTop() + jQuery(window).height() ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y;
                  jQuery("#" + id).css({
                      fill: $this.property[id].downColor  +" important"
                  });
                  jQuery("#"+$this.cont_id+"_jstip").show().html($this.property[id].hover);
                  jQuery("#"+$this.cont_id+"_jstip").css({
                      left: x,
                      top: y
                  });
              });
              _Textobj.on("touchend", function() {
                  jQuery("#" + id).css({
                      fill: $this.property[id].upColor  +" important"
                  });
                  if ($this.property[id].target === "new_window") {
                      window.open($this.property[id].url);
                  } else if ($this.property[id].target === "same_window") {
                      window.parent.location.href = $this.property[id].url;
                  } else if ($this.property[id].target === "modal") {
                      jQuery($this.property[id].url).modal("show");
                  }
              });
          }
      }
  }
  
  var pins_config = {
      "pins": []
  };
  if(pins_config2.length >0){
      pins_config.pins = []; 
  }
  let objtx;
  pins_config2.forEach((item, i)=>{
      objtx = {
          "shape": "circle",
          "hover": "<b><u>KANO</u></b><br><span style='color: #bcbcbc;'>Street Address:</span><br>&nbsp;321 Example, Address 54321<br><span style='color: #bcbcbc;'>Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234",
          "pos_X": 0,
          "pos_Y": 0,
          "size": 20,
          "outline": "#660000",
          "upColor": "#e60000",
          "overColor": "#ffd480",
          "url": "",
          "target": "same_window",
          "active": !0
      }
      if(item.hasOwnProperty("state")){
          itx = $this.cont_id+"_ngjs"+item.state; 
          
          if(item.hasOwnProperty("x")){
              objtx.pos_X = document.getElementById(itx).getBBox().x + item.x + 30                       
          }else{
              console.log($(itx))
              objtx.pos_X = document.getElementById(itx).getBBox().x+30
          }  
  
          if(item.hasOwnProperty("y")){
              objtx.pos_Y = document.getElementById(itx).getBBox().y + item.y +30
          }else{
              objtx.pos_Y = document.getElementById(itx).getBBox().y+30
          }
  
          if(item.hasOwnProperty("shape")){
              if(item.shape =='square'){
                  objtx.shape = item.shape;
              }
              if(item.shape =='circle'){
                  objtx.shape = item.shape
              }            
          } 
          if(item.hasOwnProperty("hover")){
              objtx.hover = item.hover
          } 
          if(item.hasOwnProperty("outline")){
              objtx.outline = item.outline
          }   
          if(item.hasOwnProperty("overColor")){
              objtx.overColor = item.overColor
          }   
          if(item.hasOwnProperty("url")){
              objtx.overColor = item.url
          }  
          if(item.hasOwnProperty("target")){
              objtx.overColor = item.target
          }  
          if(item.hasOwnProperty("active")){
              this.property[itx].active = item.active
          }            
      }else{
          throw new Error('undefined state in config index '+ i)
      }
      pins_config.pins.push(objtx);
  
  });
  
/*   function isTouchEnabled() {
      return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
   */
  jQuery(function() {
      var pins_len = pins_config.pins.length;
      if (pins_len > 0) {
          var xmlns = "http://www.w3.org/2000/svg";
          var tsvg_obj = document.getElementById($this.cont_id+"_ngjspins");
          var svg_circle, svg_rect;
          for (var i = 0; i < pins_len; i++) {
              if (pins_config.pins[i].shape === "circle") {
                  svg_circle = document.createElementNS(xmlns, "circle");
                  svg_circle.setAttributeNS(null, "cx", pins_config.pins[i].pos_X + 1);
                  svg_circle.setAttributeNS(null, "cy", pins_config.pins[i].pos_Y + 1);
                  svg_circle.setAttributeNS(null, "r", pins_config.pins[i].size / 2);
                  svg_circle.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
                  tsvg_obj.appendChild(svg_circle);
                  svg_circle = document.createElementNS(xmlns, "circle");
                  svg_circle.setAttributeNS(null, "cx", pins_config.pins[i].pos_X);
                  svg_circle.setAttributeNS(null, "cy", pins_config.pins[i].pos_Y);
                  svg_circle.setAttributeNS(null, "r", pins_config.pins[i].size / 2);
                  svg_circle.setAttributeNS(null, "fill", pins_config.pins[i].upColor);
                  svg_circle.setAttributeNS(null, "stroke", pins_config.pins[i].outline);
                  svg_circle.setAttributeNS(null, "stroke-width", 1);
                  svg_circle.setAttributeNS(null, "id", $this.cont_id+"_ngjspins_" + i);
                  tsvg_obj.appendChild(svg_circle);
                  $this.ngjsAddEvent(i);
              } else if (pins_config.pins[i].shape === "square") {
                  svg_rect = document.createElementNS(xmlns, "rect");
                  svg_rect.setAttributeNS(null, "x", pins_config.pins[i].pos_X - pins_config.pins[i].size / 2 + 1);
                  svg_rect.setAttributeNS(null, "y", pins_config.pins[i].pos_Y - pins_config.pins[i].size / 2 + 1);
                  svg_rect.setAttributeNS(null, "width", pins_config.pins[i].size);
                  svg_rect.setAttributeNS(null, "height", pins_config.pins[i].size);
                  svg_rect.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
                  tsvg_obj.appendChild(svg_rect);
                  svg_rect = document.createElementNS(xmlns, "rect");
                  svg_rect.setAttributeNS(null, "x", pins_config.pins[i].pos_X - pins_config.pins[i].size / 2);
                  svg_rect.setAttributeNS(null, "y", pins_config.pins[i].pos_Y - pins_config.pins[i].size / 2);
                  svg_rect.setAttributeNS(null, "width", pins_config.pins[i].size);
                  svg_rect.setAttributeNS(null, "height", pins_config.pins[i].size);
                  svg_rect.setAttributeNS(null, "fill", pins_config.pins[i].upColor);
                  svg_rect.setAttributeNS(null, "stroke", pins_config.pins[i].outline);
                  svg_rect.setAttributeNS(null, "stroke-width", 1);
                  svg_rect.setAttributeNS(null, "id", $this.cont_id+"_ngjspins_" + i);
                  tsvg_obj.appendChild(svg_rect);
                  $this.ngjsAddEvent(i);
              }
          }
      }
  });
  
  this.ngjsAddEvent = function (id) {    
      var obj = jQuery("#"+$this.cont_id+"_ngjspins_" + id);
      if (pins_config.pins[id].active === !0) {
          obj.attr({
              cursor: "pointer"
          });
          obj.hover(function() {
              jQuery("#"+$this.cont_id+"_jstip").show().html(pins_config.pins[id].hover);
              obj.css({
                  fill: pins_config.pins[id].overColor
              });
          }, function() {
              jQuery("#"+$this.cont_id+"_jstip").hide();
              obj.css({
                  fill: pins_config.pins[id].upColor
              });
          });
          obj.mouseup(function() {
              obj.css({
                  fill: pins_config.pins[id].overColor
              });
              if (pins_config.pins[id].target === "new_window") {
                  window.open(pins_config.pins[id].url);
              } else if (pins_config.pins[id].target === "same_window") {
                  window.parent.location.href = pins_config.pins[id].url;
              } else if (pins_config.pins[id].target === "modal") {
                  jQuery(pins_config.pins[id].url).modal("show");
              }
          });
          obj.mousemove(function(e) {
              var x = e.pageX + 10, y = e.pageY + 15;
              var tipw = jQuery("#"+$this.cont_id+"_jstip").outerWidth(), tiph = jQuery("#"+$this.cont_id+"_jstip").outerHeight(), x = x + tipw > jQuery(document).scrollLeft() + jQuery(window).width() ? x - tipw - 20 * 2 : x;
              y = y + tiph > jQuery(document).scrollTop() + jQuery(window).height() ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y;
              jQuery("#"+$this.cont_id+"_jstip").css({
                  left: x,
                  top: y
              });
          });
          if ($this.isTouchEnabled()) {
  
              obj.on("touchstart", function(e) {
                  var touch = e.originalEvent.touches[0];
                  var x = touch.pageX + 10, y = touch.pageY + 15;
                  var tipw = jQuery("#"+$this.cont_id+"_jstip").outerWidth(), tiph = jQuery("#"+$this.cont_id+"_jstip").outerHeight(), x = x + tipw > jQuery(document).scrollLeft() + jQuery(window).width() ? x - tipw - 20 * 2 : x;
                  y = y + tiph > jQuery(document).scrollTop() + jQuery(window).height() ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y;
                  jQuery("#"+$this.cont_id+"_jstip").show().html(pins_config.pins[id].hover);
                  jQuery("#"+$this.cont_id+"_jstip").css({
                      left: x,
                      top: y
                  });
              });
              obj.on("touchend", function() {
                  jQuery("#" + id).css({
                      fill: pins_config.pins[id].upColor
                  });
                  if (pins_config.pins[id].target === "new_window") {
                      window.open(pins_config.pins[id].url);
                  } else if (pins_config.pins[id].target === "same_window") {
                      window.parent.location.href = pins_config.pins[id].url;
                  } else if (pins_config.pins[id].target === "modal") {
                      jQuery(pins_config.pins[id].url).modal("show");
                  }
              });
          }
      }
  }
  }

propertyMaker(){
    let c = 0;
    let obj = {};    
    let dataname = $('#'+this.cont_id +" path[data-name]");
    let $this =this;
    dataname.each(function(i){
        c = i+1;
        obj[$this.cont_id+"_ngjs"+c] = {
            "hover": $(this)[0].dataset.name,
            "url": "",
            "target": "same_window",
            "upColor": "#FFFFF3",
            "overColor": "#ECFFB3",
            "downColor": "#cae9af",
            "active": !0
        }
    });
    obj[ "general"]= {
        "borderColor": "#9CA8B6",
        "visibleNames": "#adadad"
    }    
    return obj;
  }
  
}