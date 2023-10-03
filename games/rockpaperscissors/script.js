//* GETTING DOM ELEMENTS

const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

//* Loops through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    //* Loop through each option image again

    optionImages.forEach((image2, index2) => {
      //* If the current index doesn't match the clicked index
      //* Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    //* Get the source of the clicked option image
    let imageSrc = e.target.querySelector("img").src;

    //* Set the user image to the clicked option iamge
    userResult.src = imageSrc;

    //* Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);

    //* Create an array of CPU image options
    let cpuImages = [
      "images/rock.png",
      "images/paper.png",
      "images/scissors.png",
    ];

    //* Set the CPU image to a random option from the array
    cpuResult.src = cpuImages[randomNumber];

    //* Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
    let cpuValue = ["R", "P", "S"][randomNumber];

    //* Assign a letter value to the clicked option (based on index)
  });
});
