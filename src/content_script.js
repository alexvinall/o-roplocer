walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
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
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\ba\b/g, "o");
	v = v.replace(/\be\b/g, "o");
	v = v.replace(/\bi\b/g, "o");
	v = v.replace(/\bu\b/g, "o");
  v = v.replace(/\bAb/g, "O");
	v = v.replace(/\bEb/g, "O");
	v = v.replace(/\bIb/g, "O");
	v = v.replace(/\bUb/g, "O);
	
	textNode.nodeValue = v;
}
