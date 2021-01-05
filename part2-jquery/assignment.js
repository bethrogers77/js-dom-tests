// Define a function named hasClass that takes in two arguments.
//   element   (Any DOM element)
//   className (String)
//
// The function will return true if the element has the specified className CSS
// class applied.
function hasClass(element, className) {
    return $(element).hasClass(className);

}


// Define a function named toggleVisible that takes in one argument.
//   div (<div> DOM element)
//
// The function will add the 'visible' class to the div if it does not currently
// have it. It removes the class if it already exists.
function toggleVisible(div) {
    $(div).toggleClass('visible');

}


// Use true to show the element or false to hide it.
// Define a function named hideConfidentialText that takes in one argument.
//   article (<article> DOM element)
// Assume the article contains at least one paragraph.
//
// The function will hide any child paragraphs of article if anywhere the text contains
// "CONFIDENTIAL"
 function hideConfidentialText(article) {
     $("p:contains('CONFIDENTIAL')").hide();
 }     
 //   pconst.hide();
 //}
 //
 //
 //    $('p').not("contains('CONFIDENTIAL')").hide();
 //}
 //    if {
 //        $(p:contains(CONFIDENTIAL));
//
//     }   else 
//     $("p").show;
//    }
//      if ($(article).p.find("CONFIDENTIAL")){
//       p.hide;
//        }
//      else 
//      {
//       p.show;   
//       return p;
//      }
//    }

 //   const ishidden = "CONFIDENTIAL";
 //   $(article).children("p").hide(ishidden);  
 //   if $(article).p.textContent = "Confidential"
 //     return ' ' 
 //   else 
 //     return $(article);
//}      
   
//   $(article).children('p').hide("CONFIDENTIAL");
//  const ishid = "CONFIDENTIAL";
//    $(article).child().hide("CONFIDENTIAL");
//hide("p", ishid); 
//$('p').hide("CONFIDENTIAL",hideConfidentialText);
// use content but another feature of itstart  
//$(article).append("<p>; not(':contains("CONFIDENTIAL")'); 
//$(article).not('contains:"CONFIDENTIAL"');
//$(article).not("CONFIDENTIAL");

// Define a function named checkAll that takes in one argument
//   checkbox (<input type="checkbox"> DOM element).
//
// The function will mark all sibling checkboxes, of the input checkbox, as "checked" if the input checkbox
// is marked as "checked".
function checkAll(checkbox) {
    const ischecked = $(checkbox).prop("checked");
    $(checkbox).siblings().prop("checked", ischecked);
    
}


// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise.
function updateTodoList(todoList) {
  const listItems = $('<li>');
  for (let i = 0; i < todoList.length; i +=1){
     const item = listItems[i];
 //    listItems.item^="COMPLETED".removeClass();
       listItems.item().removeClass("^='COMPLETED'");
//       listItems.item.startsWith("COMPLETED").removeClass(); 
//     listItems.item^='URGENT'.addClass('important');
//    listItems.item.startsWith("URGENT").addClass('important');
    }
}
//
//    if (item.startsWith("COMPLETED") ) {
//        item.removeClass();
//     }
//    else 
//      if (item.startsWith("URGENT")){
//          item.addClass('important');
//      } 
//
//
//

//$( "item[name^='COMPLETED']" ).removeClass();
//$( " ") (listItems."")
//  listItems.(item([name^='COMPLETED']).removeClass;
//  listItems.(item([name^='URGENT']).addClass('important');
//  item.addClass().css(.important);

// Define a function named createList that takes one argument.
//   sites (object)
//
// The object has the following structure:
//    {
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      ...
//    }
//
// The function must return an <ul> element that contains <li> elements that
// each contain an <a> element. For example, given:
//    {
//      'Google': 'https://www.google.com',
//      'Facebook': 'https://www.facebook.com',
//      'GitHub': 'https://github.com',
//      'Galvanize': 'https://www.galvanize.com'
//    }
//
// It returns the following:
//    <ul>
//      <li><a href="https://www.google.com">Google</a></li>
//      <li><a href="https://www.facebook.com">Facebook</a></li>
//      <li><a href="https://github.com">GitHub</a></li>
//      <li><a href="https://www.galvanize.com">Galvanize</a></li>
//    </ul>
// var object = ({
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//    });
function createList(sites) {
// create ul 
    const ulVar = $("ul");
    for (const title in sites){
// create li
    const liVar = $("li");
// create <a
    const aVar = $("a"); 
// set href on <a
    aVar.attr( "href", sites[title] );
// set content on <a
    aVar.text=title;
//add a to li 
    liVar.append(aVar);
//append child 
    ulVar.append(liVar);                     
 }
 return ulVar; 
}


// Write a function named extractQuote that takes in one argument.
//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.
function extractQuote(articleTag) {
//get p from each article and take in one article
//  let paraTag = $('<p>'[0]);
//  let paraTag = article.get('p')[0]; 
//                   check paragraph for double quotes and extract it out
// let paraIndStart = paraTag.index(); 
//                 find end of double quotes
//let paraIndEnd = paraTag.index('"', paraIndStart + 1);
//                 get the text
//let pString = paraTag.textContent;
//                find start and end of quotes
// if (paraIndStart > -1){
//    const newQuote = pString.slice(paraIndStart, paraIndEnd + 1);
//                 create block quote variable
//  const blockquote = $('blockquote');
//                  add extracted quote text to the blockquote element
//    blockquote = newQuote;
//                 replace the paragraph with the block quote 
//  $(article).replaceWith(blockquote, paraTag);
//  return article;
//  }
// else {
// return article;    
// }
//}
//get p from each article and take in one article
// let paraTag = article.get('p')[0];
// let paraTage = $(article).p[0];
 //check paragraph for double quotes and extract it out
// let pararIndStart = paraTag.textContent.indexOf('"'); 
 ///find end of double quotes
// let pararIndEnd = paraTag.textContent.indexOf('"', pararIndStart + 1);
 //get the text
 // let pString = paraTag.textContent;
 //find start and end of quotes
 //if (pararIndStart > -1){
 //    const newQuote = pString.slice(paraIndStart, paraIndEnd + 1);
 //create block quote variable
 //const blockquote = $('blockquote');
//add extracted quote text to the blockquote element
 //blockquote = newQuote;
//replace the paragraph with the block quote 
 //article.replaceWith(blockquote, paraTag);
 //return article;
// }
// else {
// return article;    
// }
// }
}

// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
//
// TIP: Assume that data array has at least three elements.
// TIP: Assume that the elements of the data array are equal in length.
function createTable(data) {
 const thead = $('<thead>');
 const tbody = $('<tbody>');
 const tfoot = $('<tfoot>');

 thead.append(createTableRow(data[0], 'th'));
 tfoot.append(createTableRow(data[data.length - 1], 'td'));
 
 for (let i= 1; i < data.length -1; i++){
     tbody.append(createTableRow(data[i], 'td'));

 }
const table = $('<table>')
   .append(thead)
   .append(tbody)
   .append(tfoot);
//converts back to DOM element
return table[0];  
}

function createTableRow(dataRow, cellType){
   const tr = $('<tr>');
   for (let i = 0; i < dataRow.length; i++){
       const td = $('<' + cellType + '>').text(dataRow[i]);
       tr.append(td);
   } 
   return tr;
}

