const NAV_DATA = [

  "Overview",
  "Story",
  "Team"

];

const Images = [
  "./assets/images/sneakpeek-1.webp",
  "./assets/images/sneakpeek-2.webp",
  "./assets/images/sneakpeek-3.webp",
  "./assets/images/sneakpeek-4.webp",
  "./assets/images/sneakpeek-5.webp",
  "./assets/images/sneakpeek-6.webp",
  "./assets/images/sneakpeek-7.webp",
  "./assets/images/sneakpeek-8.webp"
];


const CARDS_DATA = [

  {
    Image: "./assets/images/Founder.webp",
    heading: "Founder",
    para: "Jedi Trinupab",
    content: "However at every junction in time, there is always a darkness that is waiting to overthrow "
  },
  {
    Image: "./assets/images/Co-Founder.webp",
    heading: "Co Founder",
    para: "Suptoshi",
    content: "However at every junction in time, there is always a darkness that is waiting to overthrow "
  },
  {
    Image: "./assets/images/Artist.webp",
    heading: "Artist",
    para: "Korn",
    content: "However at every junction in time, there is always a darkness that is waiting to overthrow "
  },
  {
    Image: "./assets/images/Development.webp",
    heading: "Development",
    para: "Karmic Labs",
    content: "However at every junction in time, there is always a darkness that is waiting to overthrow "
  },
  {
    Image: "./assets/images/Position.webp",
    heading: "Position",
    para: "Jedi Trinupab",
    content: "However at every junction in time, there is always a darkness that is waiting to overthrow "
  },
  {
    Image: "./assets/images/Position-2.webp",
    heading: "Position",
    para: "Jedi Trinupab",
    content: "However at every junction in time, there is always a darkness that is waiting to overthrow "
  },
  {
    Image: "./assets/images/Position-3.webp",
    heading: "Position",
    para: "Jedi Trinupab",
    content: "However at every junction in time, there is always a darkness that is waiting to overthrow "
  },
  {
    Image: "./assets/images/Position-4.webp",
    heading: "Position",
    para: "Jedi Trinupab",
    content: "However at every junction in time, there is always a darkness that is waiting to overthrow "
  }

];

const navLinks = document.getElementById("navLinks");

navLinks.innerHTML = NAV_DATA.map(item => {
  return `<li>
  <a href="#" class="no-underline font-normal text-base leading-[100%] text-[#ffffff] hover:text-[#F53838] transition-all duration-500">
  ${item}
  </a>
  </li>`;
  document.body.classList.toggle("active");
}).join("");


const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
  document.body.classList.toggle("active");
});


const gallery = document.getElementById("gallery");

gallery.innerHTML = Images.map((img) => {
  return `
        <a data-fslightbox="gallery" href="${img}" class="overflow-hidden">
          <img 
            src="${img}" 
            class="w-full h-full object-cover"
          />
        </a>
      `;
}).join('');



const card = document.getElementById("card");

card.innerHTML = CARDS_DATA.map((item) => {
  return `
      <div class="max-w-[202px] flex flex-col text-center">
        <img class="w-[202px] h-[202px] mb-[27px] cursor-pointer" src= "${item.Image}"/>
        <div>
          <h1 class="max-w-[150px] mx-auto font-normal text-2xl leading-[115%] items-center text-center text-[#3586FF] pb-2">${item.heading}</h1>
          <div class="max-w-[213px] font-normal text-sm leading-[135%] text-center text-[#D4E5FF] pb-2">${item.para}</div>
          <div class="max-w-[202px] font-normal text-sm leadinf-[100%] text-center text-[#D4E5FF] pb-2">${item.content}</div>
          <span class="flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="20" height="20" fill="url(#pattern0_0_149)"/>
            <defs>
            <pattern id="pattern0_0_149" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_0_149" transform="scale(0.00102041)"/>
            </pattern>
            <image id="image0_0_149" width="980" height="980" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
            </defs>
          </svg>

          </span>
        </div>
      </div>
      
      `;

}).join('');










// // Write a program to check whether a number is even or odd.

// //     <input type="number" id="num" placeholder="Enter number">
// // <button onclick="checkEvenOdd()">Check</button>
// // <p id="result"></p>

// function checkEvenOdd() {
//     let num = document.getElementById("num").value;

//     if (num % 2 === 0) {
//         document.getElementById("result").innerText = "Even";
//     } else {
//         document.getElementById("result").innerText = "Odd";
//     }
// }

// // //
// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// console.log(checkEvenOdd(2));

// // Create a function to find the largest of three numbers.

// function findLargest(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(findLargest(10, 25, 15));

// // Reverse a string without using built-in methods.

// function reverse(abc) {
//     let reversed = "";

//     for (let i = abc.length - 1; i >= 0; i--) {
//         reversed += abc[i];
//     }

//     return reversed;
// }

// let result = reverse("sumit");
// console.log(result);

// // Count the number of vowels in a given string.

// function countVowels(abc) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < abc.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if (abc[i] === vowels[j]) {
//                 count++;
//                 break;
//             }
//         }
//     }

//     return count;
// }

// let result = countVowels("Sumit Bishnoi");
// console.log(result);

// // Print numbers from 1 to 100:

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// // Print numbers from 1 to 100:

// // . Replace multiples of 3 with "Fizz"
// // . Multiples of 5 with "Buzz"
// // . Both with "FizzBuzz"

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }