## Webdeveloper course - Andrei (ZTM)

---

#### Links

- [ZTM Resource](https://zero-to-mastery.github.io/resources/)
- [How DNS works](https://howdns.works/ep1/)
- [ZTM web resources](https://zerotomastery.io/resources)

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
- ##### prefix

  - [w3school prefix](https://www.w3schools.com/cssref/css3_browsersupport.asp)
  - [caniuse](https://caniuse.com/)
  - [shoudiuseprefix](http://shouldiprefix.com/#animations)
  - [autofixer.github](https://autoprefixer.github.io/)

- [transform article](https://thoughtbot.com/blog/transitions-and-transforms)

##### Quiz practice css

- [css selector game](https://css-diner.netlify.app/)
- [css flexbox game](http://flexboxfroggy.com/)
- [css exercise](https://www.w3schools.com/css/exercise.asp)
- [css quiz](https://www.w3schools.com/css/css_quiz.asp)

---

##### [Bootstrap 4](https://getbootstrap.com/docs/4.6/components/navbar/) &[ 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

---

- In bootraps 5 `jumbotron` remove so use following `class=p-5 mb-4 bg-light rounded-3`
- SEO Meta tag
  - [view meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
  - [Full background image](https://css-tricks.com/perfect-full-page-background-image/)
  - [What is utf-8](https://www.quora.com/What-is-UTF8)
  - [w3school meta tag](https://www.w3schools.com/tags/tag_meta.asp)
- Depending on the Bootstrap version you are using, you may see a different effect. If you are using Bootstrap 5 or higher, then in your CSS file, I recommend adding this line of code for the hr tag in order to see similar effects as you would in the next video:

```
hr {
    margin: 20px auto;
    color: #F05F44;
    border: 3px solid #F05F44;
    max-width: 65px;
    opacity: 1;
}
```

- Mail chimp & Github page setup in bootstrap section
- `animate.style` use CDN now old website we have to download and use the css files now [CDN](https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css) then provide

##### Mailchimp

---

- [Form creation](https://mailchimp.com/en/help/add-a-signup-form-to-your-website/) - Menu -> Audience -> sign up form
- [site link](https://guna.mailchimpsites.com/)
- [Campaign](https://mailchi.mp/954b02e12d05/cody)

##### Git & Github

---

- publish website with repo name <git-username>.github.io
- second way create whatever repo you want Go to settings -> under github pages changes to master (then your website link will be published) webdev video 81(old one) & 82(New way) - add the website link in repo description

##### NodeJs

---

- [Johny five](http://johnny-five.io/)
- [state of servay](https://stateofjs.com/)
- ##### ExpressJs

  ##### Note:

  - `npm install body-parser` use this if express version is not 4.16+

    ```app.use(bodyparser.urlencoded{extended: false}));
    app.use(bodyparser.json());
    ```

  ** If you are using Express 4.16+ you can now replace that with:**

      ```
      app.use(express.urlencoded({extended: false}));
      app.use(express.json());
      ```

  - **req.headers** Just a heads up that in the next lecture I am using `req.header` inside of a console.log to retrieve the header data in a GET route. Depending on which version of express.js you use, (a more recent version has changed the syntax) it now is `req.headers`. `req.header` will only return the function declaration.
  - [nodejs.dev](https://nodejs.dev/learn/working-with-folders-in-nodejs)

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
