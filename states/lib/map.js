class MakeMap {
    constructor(cont_id, p = { config: [], pins_config: []}) {
        this.cont_id = cont_id;
        this.p = p;
        const self = this; 
        this.property = p.property;
    }

    sketchMap(sketch) {
        if (this.cont_id === '') {
            throw new Error('container id is required');
        } else {
            $(`#${this.cont_id}`).html(sketch);
        }
    }

    modProperty(index, name, value) {
        this.property[index][name] = value;
    }

    setProperty(name, value) {
        for (let prop in this.property) {
            this.property[prop][name] = value;
        }
    }

    CalMap(ngjsconfig) {
        this.property = ngjsconfig;

        let ngjsconfig2 = this.p.config || [];
        let pins_config2 = this.p.pins_config || [];

        ngjsconfig2.forEach((item, i) => {
            let itx = `${this.cont_id}_ngjs${i + 1}`;
            Object.keys(item).forEach(key => {
                if (this.property[itx] && item.hasOwnProperty(key)) {
                    this.property[itx][key] = item[key];
                }
            });
        });

        this.isTouchEnabled = () => "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

        jQuery(() => {
            jQuery(`path[id^=${this.cont_id}_ngjs]`).each((i, e) => {
                const dataName = jQuery(`#${this.cont_id}_ngjs${i + 1}`).attr('data-name');
                this.ngaddEvent(jQuery(e).attr('id'),dataName);
            });
        });
    }

     generateColor(total, max) {
        const normalizedTotal =total / max;
        const hue = 300; // Magenta hue in HSL color space
        const rgb = this.hslToRgb(hue, 100, 1-normalizedTotal  / 10 );
            
        return this.rgbToHex(Math.abs(rgb[0]), Math.abs(rgb[1]), Math.abs(rgb[2]));
    }
    
    // Function to convert HSL to RGB
    hslToRgb(h, s, l) {
        h /= 360;
        s /= 100;        
        let r, g, b;
    
        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
    
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    
    // Function to convert RGB to hex
    rgbToHex(r, g, b) {
        return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
    }
    
    propertyMaker(dataWithPopulation, max) {
        let obj = {};
        // Loop through the dataWithPopulation to create map properties
        dataWithPopulation.forEach(item => {
            const lga = item.lga.toUpperCase();
            const total = parseInt(item.total);

            // Calculate color density using the generateColor function            
            const color = this.generateColor(total, max);// x.substring(0, 1) + "ff" + x.substring(3);             
            obj[lga] = {
                total:total,
                hover: item.lga,
                url: "",
                target: "same_window",
                upColor: color,
                overColor: color,
                downColor: color,
                active: true
            };
        });

        // General properties
        obj['general'] = {
            borderColor: '#9CA8B6',
            visibleNames: '#adadad',
        };

        return obj;
    }
    ngaddEvent(id, name) {
        const obj = jQuery("#" + id);
        const arr = id.split("");
        const textObj = jQuery("#" + id + "," + "#" + this.cont_id + "_ngjsvn" + arr.slice(4).join(""));
        
        /* if (!this.property) {
            console.error(`Property with ID ${id} does not exist.`);
            return;
        } */
        
        var property = this.property[name.toUpperCase()];
        
        const text = jQuery("."+name.toUpperCase()+'_text');
        const defaultColors = {
            upColor: '#FFFFF3',
            overColor: '#ECFFB3',
            downColor: '#cae9af'
        };
        console.log(text, property)
        text.text(property.total)       
        jQuery("#" + this.cont_id + "_visnames").attr({
            fill: property.general?.visibleNames || 'defaultFillValue'
        });
    
        obj.attr({
            fill: property?.upColor || defaultColors.upColor,
            stroke: property.general?.borderColor || 'defaultStrokeColor'            
        });
        obj.css({fill:property.upColor})
    
        textObj.attr({
            cursor: "default"
        });
        
        if (property?.active) {
            textObj.attr({
                cursor: "pointer"
            });
    
            textObj.hover(() => {
                if (!property?.hover) return;
                jQuery("#" + this.cont_id + "_jstip").show().html(property.hover);
                obj.css({
                    fill: property.overColor || defaultColors.overColor
                });
            }, () => {
                jQuery("#" + this.cont_id + "_jstip").hide();
                obj.css({
                    fill: property.upColor || defaultColors.upColor
                });
            });
    
            if (property.target !== "none") {
                textObj.mousedown(() => {
                    obj.css({
                        fill: property.downColor || defaultColors.downColor
                    });
                });
            }
    
            textObj.mouseup(() => {
                obj.css({
                    fill: property.overColor || defaultColors.overColor
                });
    
                const target = property.target || "same_window";
                if (target === "new_window") {
                    window.open(property.url);
                } else if (target === "same_window") {
                    window.parent.location.href = property.url;
                } else if (target === "modal") {
                    jQuery(property.url).modal("show");
                }
            });
    
            textObj.mousemove(e => {
                const x = e.pageX + 10,
                    y = e.pageY + 15;
                const tipw = jQuery("#" + this.cont_id + "_jstip").outerWidth(),
                    tiph = jQuery("#" + this.cont_id + "_jstip").outerHeight(),
                    xPos = x + tipw > jQuery(document).scrollLeft() + jQuery(window).width() ? x - tipw - 20 * 2 : x,
                    yPos = y + tiph > jQuery(document).scrollTop() + jQuery(window).height() ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y;
    
                jQuery("#" + this.cont_id + "_jstip").css({
                    left: xPos,
                    top: yPos
                });
            });
    
            if (this.isTouchEnabled()) {
                textObj.on("touchstart", e => {
                    const touch = e.originalEvent.touches[0];
                    const x = touch.pageX + 10,
                        y = touch.pageY + 15;
                    const tipw = jQuery("#" + this.cont_id + "_jstip").outerWidth(),
                        tiph = jQuery("#" + this.cont_id + "_jstip").outerHeight(),
                        xPos = x + tipw > jQuery(document).scrollLeft() + jQuery(window).width() ? x - tipw - 20 * 2 : x,
                        yPos = y + tiph > jQuery(document).scrollTop() + jQuery(window).height() ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y;
    
                    obj.css({
                        fill: property.downColor || defaultColors.downColor
                    });
    
                    jQuery("#" + this.cont_id + "_jstip").show().html(property.hover);
                    jQuery("#" + this.cont_id + "_jstip").css({
                        left: xPos,
                        top: yPos
                    });
                });
    
                textObj.on("touchend", () => {
                    obj.css({
                        fill: property.upColor || defaultColors.upColor
                    });
    
                    const target = property.target || "same_window";
                    if (target === "new_window") {
                        window.open(property.url);
                    } else if (target === "same_window") {
                        window.parent.location.href = property.url;
                    } else if (target === "modal") {
                        jQuery(property.url).modal("show");
                    }
                });
            }
        } else {
            console.error(`Event not enabled for property with ID ${id}`);
        }
    }
   
}
