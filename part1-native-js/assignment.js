// Define a function named createDiv that takes no arguments.
// Return a <div> element.
function createDiv() {
  return document.createElement("div");
}


// Define a function named createDivWithClass that takes one argument.
//   className (string)
//
// Return a <div> element with the given className.
function createDivWithClass(className) {
    const divElement = document.createElement("div");
    divElement.className = className;
    return divElement;
}


// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise
function updateTodoList(todoList) {
    const listItems = todoList.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i += 1) {
      const item = listItems[i];
      if (item.textContent.startsWith("COMPLETED")) {
        item.remove();
      } else if (item.textContent.startsWith("URGENT")) {
        item.className = item.className + " important"
      }
    }
}


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
function createList(sites) {
    const ulElement = document.createElement("ul");
    for (const title in sites ){
//create li 
    const liElement = document.createElement("li");
//create an <a
     const aElement = document.createElement("a");
//set href on <a
     aElement.setAttribute("href", sites[title])
//set content on <a 
    aElement.textContent=title;
//add a to li
    liElement.appendChild(aElement); 
//appendchild to add 
    ulElement.appendChild(liElement);
  }
  return ulElement; 

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
function extractQuote(article) {
  //get the paragraph from each article and take in one article 
  let paraTag = article.getElementsByTagName('p')[0];
  //check the paragraph for double quotes and extract it out 
    let paraIndStart = paraTag.textContent.indexOf('"');
  //find the end of the double quotes
      let paraIndEnd = paraTag.textContent.indexOf('"',paraIndStart + 1);
  //get the text      
      let pString = paraTag.textContent
  //find the start and end of the quote      
  if (paraIndStart > -1 ) {
    const newQuote = pString.slice(paraIndStart, paraIndEnd + 1);
 //create block quote variable   
    const blockquote = document.createElement("blockquote");
 //add the extracted quote text to the blockquote element     
    blockquote.textContent = newQuote; 
 //replace the paragraph with the block quote
    article.replaceChild(blockquote, paraTag)    
    return article; 
  }
  else{
    return article;
  }    
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
// non working copy
function createTable(data) {
 //create table DOM element  
  console.log(data.length)
//create the table using the CreateElement(' ') method   
let t = document.createElement('TABLE');
//create the head using CreateElement('THEAD') or CreateThead
let header = document.createElement('THEAD');
//create body using the CreateElement('TBODY') 
let body = document.createElement('TBODY');
//create the footer using the CreateElement('TFOOT') or CreateTfoot
let tfooter = document.createElement('TFOOT');
let row0 = createRow(data[0], 'TH')
header.appendChild(row0)  
let rowlast = createRow(data[data.length - 1]);
tfooter.appendChild(rowlast)
for (let i = 1; i < data.length - 1; i +=1) {
  let rowNumber = createRow(data[i])
  body.appendChild(rowNumber);
}
t.appendChild(header);
t.appendChild(body);
t.appendChild(tfooter);
return t  
}

function createRow(dataRow, cellType = 'TD'){
  let row1 = document.createElement('TR');
  for (let i = 0; i < dataRow.length; i +=1){
    let element = dataRow[i]
    let tD = document.createElement(cellType);
    tD.textContent = element;
    row1.appendChild(tD);  
  }
  return row1;
}
