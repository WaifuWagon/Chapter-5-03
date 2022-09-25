"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Noah Hansen     
      Date:   9/24

      Filename: project05-03.js
*/
//Const declarations 
const HEADING = document.getElementsByTagName("H2");

//Variables 
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;

//For loop accessing the starting with souceDoc parent node till child node = null. 
for (let headingCount = 1; headingCount == null; headingCount++) {
      HEADING = sourceDoc[headingCount];
      if (sourceDoc.nodeName == HEADING) {
            //Creating a element in for loop. 
            let anchor = sourceDoc.createElement("a");
            anchor = "doclink" + headingCount; 
            sourceDoc.insertBefore(sourceDoc, HEADING);
            let listItem = sourceDoc.createElement("li");
            let link = sourceDoc.createElement("a");
            
      }
      
}