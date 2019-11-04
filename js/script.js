/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Make sure that the web page loads the DOM first before running the java script.

document.addEventListener('DOMContentLoaded', () => {mainScript()});

function mainScript()
{
   /*** 
      Add your global variables that store the DOM elements you will 
      need to reference and/or manipulate. 
      
      But be mindful of which variables should be global and which 
      should be locally scoped to one of the two main functions you're 
      going to create. A good general rule of thumb is if the variable 
      will only be used inside of a function, then it can be locally 
      scoped to that function.
   ***/

   /* 
   Define Const Variables
   ul - is the unordered list html element that will show all the list items
   liStudentArray - is the complete list of students that are in the html when the page loads
   */

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

   /*** 
      Create the `showPage` function to hide all of the items in the 
      list except for the ten you want to show.

      Pro Tips: 
      - Keep in mind that with a list of 54 students, the last page 
         will only display four.
      - Remember that the first student has an index of 0.
      - Remember that a function `parameter` goes in the parens when 
         you initially define the function, and it acts as a variable 
         or a placeholder to represent the actual function `argument` 
         that will be passed into the parens later when you call or 
         "invoke" the function 
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

      if (pageNumber > numberOfPagesAllowed) 
      {
         // If for some reason the page number is greater than the number of pages allowed notify the user

         alert("There are not enough students to display onto this page.");   
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
      Create the `appendPageLinks function` to generate, append, and add 
      functionality to the pagination buttons.
   ***/





   // Remember to delete the comments that came with this file, and replace them with your own code comments.
}
