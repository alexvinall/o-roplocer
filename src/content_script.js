walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if  ((node.tagName != null && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'))
      ||(node.classList != null && node.classList.contains('ace_editor'))) {
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
      console.log('Found a text node');
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
  
  console.log('Replacing node value:' + textNode.nodeValue);

	v = v.replace(/a/g, "o");
	v = v.replace(/e/g, "o");
	v = v.replace(/i/g, "o");
	v = v.replace(/u/g, "o");
  v = v.replace(/A/g, "O");
	v = v.replace(/E/g, "O");
	v = v.replace(/I/g, "O");
	v = v.replace(/U/g, "O");
	
	textNode.nodeValue = v;
}
