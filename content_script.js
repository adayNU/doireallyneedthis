

var runTimes = 0;
var items = new Array();
//chrome.storage.local.set({'itemsInCart': items});
walk(document.body);

var s = document.createElement('script');
s.src = "//www.doireallyneedthis.com/js/dirnt.js";
//s.nodeValue = "function openNewTab() { window.open('http://www.google.com', '_blank'); }";
document.body.appendChild(s);

function walk(node) 
{
        // I stole this function from here:
        // http://is.gd/mwZp7E
        
        var child, next;

        switch ( node.nodeType )  
        {
                case 1:  // Element
					if(node.tagName.toLowerCase() == "a" || node.tagName.toLowerCase() == "img" || node.tagName.toLowerCase() == "input" || node.tagName.toLowerCase() == "button") {
						//window.alert(node.tagName);
						fixButton(node);
					}

					child = node.firstChild;
					while ( child ) 
					{
							next = child.nextSibling;
							walk(child);
							child = next;
					}

                        break;
						
                case 9:  // Document
                case 11: // Document fragment
					child = node.firstChild;
					while ( child ) 
					{
							next = child.nextSibling;
							walk(child);
							child = next;
					}
					break;

                case 3: // Text node
					/*if(node.parentElement.tagName.toLowerCase() == "a") {
						fixButton(node);
					}*/
                        break;
        }
}

function fixButton(textNode) {
	var v = "error";
	var buttonFound = false;
	
	var searchTerms = new Array();
	searchTerms[0] = "checkout";
		
	for ( var i=0; i<searchTerms.length; i++) {
	
		try {
			v = textNode.attributes["class"].value;
		}
		catch(err) {
			v = "error";
		}
		
		
		
		if (v.toLowerCase().indexOf(searchTerms[i]) >= 0) {
			if(searchTerms[i] == "checkout") {
			
				textNode.setAttribute('onclick', 'openNewTab("' + window.location.host + '")');
				//window.open("http://www.google.com", "_blank");
				buttonFound = true;
			
			}
		}
		
		if (buttonFound == false) {
			try {
				v = textNode.attributes["id"].value;
			}
			catch(err) {
				v = "error";
			}
			
			if (v.toLowerCase().indexOf(searchTerms[i]) >= 0) {
				if(searchTerms[i] == "checkout") {
				
					textNode.setAttribute('onclick', 'openNewTab("' + window.location.host + '")');
					//window.open("http://www.google.com", "_blank");
					buttonFound = true;
				
				}
			}
		}
		
		if (buttonFound == false) {
			try {
				v = textNode.attributes["alt"].value;
			}
			catch(err) {
				v = "error";
			}
			
			if (v.toLowerCase().indexOf(searchTerms[i]) >= 0) {
				if(searchTerms[i] == "checkout") {
				
					textNode.setAttribute('onclick', 'openNewTab("' + window.location.host + '")');
					//window.open("http://www.google.com", "_blank");
					buttonFound = true;
				
				}
			}
		}
		
		if (buttonFound == false) {
			try {
				v = textNode.attributes["title"].value;
			}
			catch(err) {
				v = "error";
			}
			
			if (v.toLowerCase().indexOf(searchTerms[i]) >= 0) {
				if(searchTerms[i] == "checkout") {
				
					textNode.setAttribute('onclick', 'openNewTab("' + window.location.host + '")');
					//window.open("http://www.google.com", "_blank");
					buttonFound = true;
				
				}
			}
		}
		
		if (buttonFound == false) {
			try {
				v = textNode.attributes["name"].value;
			}
			catch(err) {
				v = "error";
			}
			
			if (v.toLowerCase().indexOf(searchTerms[i]) >= 0) {
				if(searchTerms[i] == "checkout") {
				
					textNode.setAttribute('onclick', 'openNewTab("' + window.location.host + '")');
					//window.open("http://www.google.com", "_blank");
					buttonFound = true;
				
				}
			}
		}
		
		if (buttonFound == false) {
			try {
				v = textNode.attributes["value"].value;
			}
			catch(err) {
				v = "error";
			}
			
			if (v.toLowerCase().indexOf(searchTerms[i]) >= 0) {
				if(searchTerms[i] == "checkout") {
				
					textNode.setAttribute('onclick', 'openNewTab("' + window.location.host + '")');
					//window.open("http://www.google.com", "_blank");
					buttonFound = true;
				
				}
			}
		}
		
		if (buttonFound == false) {
			try {
				if(textNode.firstChild.nodeValue != null)
				{
					v = textNode.firstChild.nodeValue;
				}
			}
			catch(err) {
				v = "error";
			}
			
			if (v.toLowerCase().indexOf(searchTerms[i]) >= 0) {
				if(searchTerms[i] == "checkout") {
				
					textNode.setAttribute('onclick', 'openNewTab("' + window.location.host + '")');
					//window.open("http://www.google.com", "_blank");
					buttonFound = true;
				
				}
			}	
		}
	}
}

