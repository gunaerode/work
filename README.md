## Webdeveloper course - Andrei (ZTM)

---

#### Links

- [ZTM Resource](https://zero-to-mastery.github.io/resources/)

---

- Course [Github repo](https://github.com/zero-to-mastery/complete-web-developer-manual)
- [MDN](https://developer.mozilla.org/en-US/) Resource

#### Debugging links

- [Ruber Duck](https://rubberduckdebugging.com/)
- [Stack Overflow](https://stackoverflow.com/)

#### HTML & HTML5

- [freecodecamb html](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)
- [w3schools html quiz](https://www.w3schools.com/html/html_quiz.asp)
- [w3schools html quiz 2](https://www.w3schools.com/html/exercise.asp)

#### CSS & CSS3

- [CSS Tricks](https://css-tricks.com/)
- [Selectors list](https://www.w3schools.com/cssref/css_selectors.asp)
- [Combinators](https://www.w3schools.com/css/css_combinators.asp)

  ###### Notes

        - ``` /*Looking inside - Selects all the li elements placed (anywhere) inside the ul;Descendant selector */

            ul li

            /_Looking inside - Selects only the direct li elements of ul; i.e. it will only select direct children li of ul; Child Selector or Child combinator selector_/
            ul > li

            /_ Looking outside - Selects the ul immediately following the ul; It is not looking inside, but looking outside for the immediately following element; Adjacent Sibling Selector _/
            ul + ul

            /_ Looking outside - Selects all the ul which follows the ul doesn't matter where it is, but both ul should be having the same parent; General Sibling Selector _/
            ul ~ ul ```

- [Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp) Special state of the element :active, :visited ...etc
- [Pseudo Elements](https://www.w3schools.com/css/css_pseudo_elements.asp) - Specified part of the element like ::first-line, insert before & after content
- [PX, EM, REM, % and VW, VH](https://elementor.com/help/whats-the-difference-between-px-em-rem-vw-and-vh/)
- [Flex box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - for layout creation 2D

##### Quiz practice css

- [css selector game](https://css-diner.netlify.app/)
- [css flexbox game](http://flexboxfroggy.com/)
- [css exercise](https://www.w3schools.com/css/exercise.asp)
- [css quiz](https://www.w3schools.com/css/css_quiz.asp)

---

##### NodeJs

---

- [Johny five](http://johnny-five.io/)
- [state of servay](https://stateofjs.com/)
- ##### ExpressJs

  ##### Note:

      ```npm install body-parser``` use this if express version is not 4.16+

      ```app.use(bodyparser.urlencoded{extended: false}));
      app.use(bodyparser.json());
      ```

  ** If you are using Express 4.16+ you can now replace that with:**

      ```
      app.use(express.urlencoded({extended: false}));
      app.use(express.json());
      ```

###### Notes

`globalThis` added in nodejs with ES2020 it's same as `window` in browser but properties will same as `global` in node REPL - checkout in both browser and node REPL

ES6 imports might workon above version `12.2.0` or higher

- If you want to work `modules` syntax need to use `.mjs` extention should added or `type="module"` should added on `package.json` file
  - [import & export systax](https://javascript.info/import-export)

#### Tools links

- [Specificity calculator](https://specificity.keegan.st/)
- [Google fonts](https://fonts.google.com/specimen/Poiret+One?preview.size=30&query=poi)
- [dog images apis](http://placecorgi.com/)
- [robohash images apis](https://robohash.org/guna.png?size=400x400&bgset=bg1)

---

#### Git

---

##### links

- [.gitignore](https://linuxize.com/post/gitignore-ignoring-files-in-git/)
