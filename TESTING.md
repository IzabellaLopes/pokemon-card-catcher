# Pokémon Card Catcher - Memory Card Game

![Pókemon Card Catcher Website shown on a range of devices](documentation/responsive.png)

Visit the deployed site: [Pókemon Card Catcher](https://izabellalopes.github.io/pokemon-card-catcher/)

---

## CONTENTS

- [AUTOMATED TESTING](#automated-testing)
  - [W3C Validator](#w3c-validator)
  - [JavaScript Validator](#javascript-validator)
  - [Lighthouse](#lighthouse)
- [MANUAL TESTING](#manual-testing)
  - [Testing User Stories](#testing-user-stories)
  - [Full Testing](#full-testing)

Throughout the entire build, I conducted continuous testing. While working on the project, I relied on Chrome Developer Tools to precisely identify and address any issues that arose.

During the development process, I extensively utilized Google Developer Tools to verify the proper functioning of elements and to effectively troubleshoot when things didn't go as planned.

For JavaScript, I made use of the console in Developer Tools to carefully inspect small sections of code and ensure its smooth execution. Additionally, it proved invaluable in pinpointing and resolving any problems encountered.

To guarantee responsiveness across various screen sizes and devices, I meticulously checked each page using Google Chrome Developer Tools. This ensured a seamless user experience across all platforms.

---

## AUTOMATED TESTING

### W3C Validator

- HTML: No errors were returned when passing through the official [W3C validator](https://validator.w3.org/).

  - Home page ![Home page](testing/w3/w3-index.png)
  - Game page ![Game page](testing/w3/w3-game.png)
  - 404 Page ![404 page](testing/w3/w3-404.png)

- CSS: No errors were found when passing through the official Jigsaw validator.

  - style.css ![css](testing/w3/w3-css.png)

---

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the JavaScript.

- script.js ![script.js](testing/jshint/jshint-script.png)
- game.js ![game.js](testing/jshint/jshint-game.png)

---

### Lighthouse

I utilized Lighthouse, a tool available in the Chrome Developer Tools, to assess the performance, accessibility, best practices, and SEO aspects of the website.

- Home page
  - Desktop ![home-desktop](testing/lighthouse/home-desktop.png)
  - Mobile ![home-mobile](testing/lighthouse/home-mobile.png)
- Game page

  - Easy level

    - Desktop ![easy-desktop](testing/lighthouse/game-easy-desktop.png)
    - Mobile ![easy-mobile](testing/lighthouse/game-easy-mobile.png)

  - Medium level

    - Desktop ![medium-desktop](testing/lighthouse/game-medium-desktop.png)
    - Mobile ![medium-mobile](testing/lighthouse/game-medium-mobile.png)

  - Hard level
    - Desktop ![hard-desktop](testing/lighthouse/game-hard-desktop.png)
    - Mobile ![hard-mobile](testing/lighthouse/game-hard-mobile.png)

- 404 page
  - Desktop ![404-desktop](testing/lighthouse/404-desktop.png)
  - Mobile ![404-mobile](testing/lighthouse/404-mobile.png)

---

## MANUAL TESTING

### Testing User Stories

`First Time Visitors`

| Goals                                                                                                                                                        | How are they achieved?                                                                                                                                                                                                             |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I want to take part in an online memory card game. I want to be able to play at any time, anywhere.                                                          | The website offers an engaging and interactive "Pókemon Card Catcher" game that allows users to test their memory skills by flipping and matching virtual cards. The site is available for use whenever is convenient to the user. |
| I want the site to be responsive to my device.                                                                                                               | The website's design is responsive, ensuring seamless gameplay and optimal user experience across various devices, including desktops, laptops, tablets, and smartphones.                                                          |
| I want the website to be easy to use, and it should allow me to explore, discover, and enjoy playing the "Pókemon Card Catcher" game without any difficulty. | The website boasts an intuitive and user-friendly interface, making it easy for first-time visitors to navigate, explore, and enjoy the game without encountering any complications or confusion.                                  |

`Returning Visitors`

| Goals                                                                                                                                          | How are they achieved?                                                                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| I want to have the option to select a level of difficulty that suits me best, depending on my experience from the first time I visit the site. | Enable personalized user experience by implementing a selectable difficulty level, catering to individual preferences and past site interactions. |

`Frequent Visitors`

| Goals                                                                             | How are they achieved?                                                                                                                                              |
| :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| I wish to be able to adjust the difficulty level to make the game more enjoyable. | Enhance user engagement for frequent visitors with adjustable difficulty levels.                                                                                    |
| I want to have the opportunity to view all the Pokémon images.                    | In the hard level on desktop devices, all Pokémon cards are displayed, offering players the chance to unlock and view all Pokémon images through repeated gameplay. |

---

### Full Testing

To make sure my website works properly, I tested it on different web browsers like Google Chrome and Microsoft Edge, and also on different devices such as a Dell Inspiron 15-inch laptop and a Samsung A52S smartphone.

Additionally, I inspected each page using Google Chrome Developer Tools to ensure that they appeared correctly and were responsive on various screen sizes.

Comprehensive testing was conducted by family and friends across various devices and screen sizes, and no issues were reported during gameplay.
