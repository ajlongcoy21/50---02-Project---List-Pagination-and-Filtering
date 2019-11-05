/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Make sure that the web page loads the DOM first before running the java script.

document.addEventListener('DOMContentLoaded', () => {mainScript()});

function mainScript()
{
   /* 
   Define Const Variables
   div - the div element where the page buttons will be
   ul - is the unordered list html element that will show all the list items
   liStudentArray - is the complete list of students that are in the html when the page loads
   studentsPerPage - max number of students allowed per page
   */

   const div = document.querySelector('.page');
   const ul = document.getElementsByClassName('student-list');
   const liStudentArray = document.querySelectorAll('.student-item.cf');
   const studentsPerPage = 10;

   // Get the number of pages allowed and determine the number of students on the last page

   const numberOfPagesAllowed =Math.floor(liStudentArray.length / studentsPerPage) + 1;
   const numberOfStudentsOnLastPage = liStudentArray.length % studentsPerPage;

   // Setup blank page to allow to start showing the students by page
   // While there is a child element of ul, remove it from the page

   while (ul[0].firstChild) 
   {
      ul[0].firstChild.remove();
   }

   showPage(1);
   appendPageLinks();

   /*** 
      function showPage
      Parameters: pageNumber - integer for the page number
      returns: N/A

      Description: This fuctions takes a page number and displays the students that should be visible on
      that page.
   ***/

   function showPage(pageNumber)
   {
      // Setup blank page to allow to start showing the students by page
      // While there is a child element of ul, remove it from the page

      while (ul[0].firstChild) 
      {
         ul[0].firstChild.remove();
      }

      // Check to see which page number was requested

      if (pageNumber > numberOfPagesAllowed || pageNumber === 0) 
      {
         // If for some reason the page number is greater than the number of pages allowed notify the user

         alert("Sorry! Somehow you got to a page you should not get to. Please try again, thank you.");   
      }
      else if (pageNumber < numberOfPagesAllowed && pageNumber > 0) 
      {
         // If the page number is in the correct range specified:

         // Get the upper and lower index that will be displayed from the array

         let upperIndex = pageNumber * 10 - 1;
         let lowerIndex = upperIndex - 9;

         // Loop through the array only showing the students for that specific page

         for (let index = lowerIndex; index < upperIndex + 1; index++) 
         {
            // append the student to the unordered list

            ul[0].appendChild(liStudentArray[index]);
         }

      }
      else
      {
         // else the page number is the last page:

         // Get the upper and lower index that will be displayed from the array

         let upperIndex = liStudentArray.length - 1;
         let lowerIndex = liStudentArray.length - numberOfStudentsOnLastPage;

         // Loop through the array only showing the students for that specific page

         for (let index = lowerIndex; index < upperIndex + 1; index++) 
         {
            // append the student to the unordered list

            ul[0].appendChild(liStudentArray[index]);
         }
      }
   
   }

   /*** 
      function appendPageLinks
      Parameters: N/A
      returns: N/A

      Description: This fuctions creates the HTML elements for the page links at the bottom of the page. It will 
      dynamically create the correct number of pages needed to display the students at 10 students per page.
   ***/

   function appendPageLinks()
   {
         /*
            function createElement
            Parameters:
               elementName - string value for the element to be created
               property - string value for the property to be adjusted
               value - string value for the property to be set to
            Returns: 
               element - html element
         */

         function createElement(elementName, property, value)
         {
            // Define and create element
            const element = document.createElement(elementName);

            // Set the property value
            element[property] = value;

            // Return the element
            return element;
         }

         /*
            function createLiElement
            Parameters: N/A
            Returns: 
               an li html element
         */

         function createLiElement()
         {
            return document.createElement('li');
         }

         // Create the div and ul element for the pagination links

         let divElement = createElement('div');
         divElement.className = 'pagination';

         let ulElement = document.createElement('ul');

         // append the ul element inside the new div element

         divElement.appendChild(ulElement);

         // create li and a variables
         let liElement;
         let aElement;

         // Loop through to create the correct number of page links

         for (let index = 1; index <= numberOfPagesAllowed; index++) 
         {
            // Create li and a elements
            liElement = createLiElement();
            aElement = createElement('a', 'href', '#');

            // Set the text of the link to the page number specific for that link
            aElement.text = index;

            // Since this is the initial setup, we will set the first page link to be active

            if (index === 1) 
            {
               aElement.className = 'active';
            }

            // add event listeners to each link

            aElement.addEventListener('click', (event) => {

               // find the element that is currently active so we can deactivate it

               aElementLeaving = document.querySelector('.active');

               // remove the active state from the element

               aElementLeaving.classList.remove('active');

               // set the new target to active

               event.target.className = 'active';

               // Change student list to display based off of the page link clicked

               showPage(event.target.text)
            });

            // append to the li and ul elements
            liElement.appendChild(aElement);
            ulElement.appendChild(liElement);

         }

         // append the new div to the main div
         
         div.appendChild(divElement);
         
   }



   // Remember to delete the comments that came with this file, and replace them with your own code comments.
}
