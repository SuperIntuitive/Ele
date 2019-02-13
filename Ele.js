Ele = function (tag, attrs, log) {
    log = typeof log !== 'undefined' ? log : false; //silly IE can't handle defaults
    if (typeof tag === 'undefined') { //if the tag is packed in the object for some reason.
        if (typeof attrs.tag === 'undefined') {
            console.warn("Error tag name is missing. data:");
            console.log(attrs);
            return null; //cant make a tag without a tag
        } else {
            tag = attrs.tag;
        }
    }
    let parent = null;
    let ele = document.createElement(tag);
    for (let attr in attrs) {
        if (attrs.hasOwnProperty(attr)) {
            if (attr == 'style') {
                let styles = attrs[attr];
                for (let style in styles) {
                    if (styles.hasOwnProperty(style)) {
                        if (typeof styles[style] != 'undefined' && styles[style].length > 0) {
                            ele.style[style] = styles[style];
                        }
                    }
                }
            } 
            else if (attr == 'data') {
                let data = attrs[attr];
                for (let datum in data) {
                    if (data.hasOwnProperty(datum)) {
                        ele.setAttribute('data-' + datum, data[datum]);
                    }
                }
            } 
            else if (attr == 'class') {
                if (attrs[attr].length>0)
                ele.className += ' '+attrs[attr];
            }
            else if (attr == 'appendTo') {
                if (typeof HTMLElement === "object" ? attrs[attr] instanceof HTMLElement : attrs[attr] && typeof attrs[attr] === "object" && attrs[attr] !== null && attrs[attr].nodeType === 1 && typeof attrs[attr].nodeName === "string") {
                    parent = attrs[attr];
                }
                else if (typeof attrs[attr] === 'string') { 
                    if (attrs[attr].length > 0) {
                        let tmp = document.querySelectorAll(attrs[attr])[0];
                        if (tmp == null) { tmp = document.getElementById(attrs[attr]);}
                        if (tmp != null) { parent = tmp; }
                        else { console.warn("The query string: " + attrs[attr]+" did not return an element")}
                    }
                } 
            }
            else if (attr == 'append') {
                 let child = attrs[attr]; 
                 if (typeof child === 'string') {
                     ele.innerHTML +=child;
                 } else if (typeof HTMLElement === "object" ? child instanceof HTMLElement : child && typeof child === "object" && child !== null && child.nodeType === 1 && typeof child.nodeName === "string") {
                     ele.appendChild(child);
                 }
            }
            else {
                ele[attr] = attrs[attr];
            }
        }
    }
    if (parent != null) {
        parent.appendChild(ele);
    }
    if (log) {
        console.log(ele);
    }
    return ele;
}


//Use:
let mydiv = Ele('div',{
  id:"mydivid",
  class:"myclass",
  data : {
    foo:bar,
  },
  style:{
    position:'absolute',
    top:'100px',
    left:'100px',
    width:'100px',
    height:'100px',
  },
  appendTo:document.body
});

let mytext = Ele('p',{
  innerHTML:'this will go in the box',
  style: {
    color:'red'
  },
  appendTo:mydiv,
});







