"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Nikita Baiborodov
   Date:   11/13/2025

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array
*/

/* Generate an outline based on h1 through h6 headings in the source document */

window.addEventListener("load", makeOutline);

function makeOutline() {
    // location of the document outline
    var outline = document.getElementById("outline");

    // Source document for the outline
    var source = document.getElementById("doc");

    var mainHeading = document.createElement("h1");
    var outlineList = document.createElement("ol");
    var headingText = document.createTextNode("Outline");

    mainHeading.appendChild(headingText);
    outline.appendChild(mainHeading);
    outline.appendChild(outlineList);

    createList(source, outlineList);

}

function createList(source, outlineList) {
    // Headings for the outline
    var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];

    //Previous level of the heading
    var prevLevel = 0;

    // Running total of the article headings
    var headNum = 0;


    /* Loop through all of the child nodes of source
       article until no child nodes are left */

    for (var n = source.firstChild; n !== null; n = n.nextSibling) {
        // Examine only article headings
        var headLevel = headings.indexOf(n.nodeName);

        if (headLevel !== -1) {
            // Add an id to the heading if it is missing
            headNum++;
            if (n.hasAttribute("id") === false) {
                n.setAttribute("id", "head" + headNum);
            }

            var listElem = document.createElement("li");

            //listElem.innerHTML = n.firstChild.nodeValue;

            // Create hypertext links to the document headings
            var linkElem = document.createElement("a");
            linkElem.innerHTML = n.innerHTML;
            linkElem.setAttribute("href", "#" + n.id);

            // Append the hypertext link to the list item
            listElem.appendChild(linkElem);

            outlineList.appendChild(listElem);

        }

    }
}
