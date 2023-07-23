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
