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

  - The [`flex container`](https://www.w3schools.com/css/css3_flexbox_container.asp) properties are:

    ````flex-direction
    flex-wrap
    flex-flow
    justify-content
    align-items
    align-content```
    ````

  - The [`flex item`](https://www.w3schools.com/css/css3_flexbox_items.asp) properties are:

    ````order
    flex-grow
    flex-shrink
    flex-basis
    flex
    align-self```
    ````

- `grid`

  - **Note** in `grid` `grid-gap` has been changed to [**`gap`**](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
  - `grid-template-columns: 1fr 1fr 1fr` === `grid-template-columns: repeat(3, 1fr)` 3 columns equally same gose for `grid-template-rows` and `grid-template-columns: auto 1fr 1fr;` first column removes padding and gives auto width for more content and it will extend

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
- [For bootstrap them changers](https://www.creative-tim.com/)
- templates
  - [bootstrap 0](https://mdbootstrap.com/freebies/)
  - [bootstrap template 1](http://mashup-template.com/templates.html)
  - [creative tim template](https://www.creative-tim.com/bootstrap-themes/ui-kit?direction=asc&sort=price)
  - [bootstrap templates 2](https://startbootstrap.com/templates/)
  - [animate.style](https://daneden.github.io/animate.css/)

##### Chanllenge landing page

- [challenge 8](https://github.com/zero-to-mastery/Coding_Challenge-8)

##### Mailchimp

---

- [Form creation](https://mailchimp.com/en/help/add-a-signup-form-to-your-website/) - Menu -> Audience -> sign up form
- [site link](https://guna.mailchimpsites.com/)
- [Campaign](https://mailchi.mp/954b02e12d05/cody)

##### Git & Github

---

- publish website with repo name <git-username>.github.io
- second way create whatever repo you want Go to settings -> under github pages changes to master (then your website link will be published) webdev video 81(old one) & 82(New way) - add the website link in repo description

##### ReactJs

---

- [CRA website link](https://create-react-app.dev/docs/getting-started)
- we can use `npx create-react-app my-app` if your `npm` version is less than **5.2** other vice `npm install -g create-react-app` and `create-react-app my-app` [link for older version](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f) but older version not recommended as of now.
  - [what is npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)?
  - [vscode extention](https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack) from andrei & [me dsznajder.es7-react-js-snippets](https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
- Note:
  - One file you will see in the next video that no longer comes with the latest version of CRA is the `registerServiceworker.js`. Therefore you can ignore the `registerServiceworker()` in index.js that you will see in the next video since we will not be using it.
- [Service workers](https://developers.google.com/web/fundamentals/primers/service-workers/)
- ```
  <Hello greetings={`Hey, Guna`} />

  class component:
  ---
  class Hello extends Component {
    render() {
      return <div>hey</div>;
      // single line doesn't need () but multiline line with root need
    }
  }

  export default Hello
  function component:
  ---
  function Hello() {
    return ();
  }
  export default Hello;
  ```

- **What is a service worker**
  A service worker is a script that your browser runs in the `background`, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync.
- **React.Fragment and Semantic HTML**
  One thing you will notice with React is that because we always have to return just one element from a component, we end up wrapping a lot of our components in <div></div>.

  BUT WHAT ABOUT SEMANTIC HTML YOU TAUGHT US ABOUT IN THE HTML SECTION ANDREI!??!!

  You are right! React realized this was an issue, and with the newer version of React 16.2, they introduced something called Fragment to fix this issue. [You can read about it here](https://blog.logrocket.com/rendering-sibling-elements-react-fragments/) (optional).

- **Exercise:** Learn to Read the Docs
  As a developer, you need to develop the muscle of being able to read the documentation website when you don't understand something. Here is a quick exercise:

  What does <React.StrictMode> we see inside the index.js file do? Go look through the React documentation website and see if you can find out. You can find the answer at the link below!

  https://reactjs.org/docs/strict-mode.html

  - **Note**:
    `Strict mode checks are run in development mode only; they do not impact the production build. `

- **Notes `this`**
  - `this` - how works with custom normal function in [class component & arrow function](https://reactjs.org/docs/handling-events.html)
- **Quick Note: JSON Placeholder**
  In the next video, I will be showing you how to use this: https://jsonplaceholder.typicode.com/

  Sometimes, depending on incidents, the website may be down. In that case, you can use an alternative here: https://jsonplaceholder.cypress.io/

  You will see how to use it in the next video!

- class component [life cycle methods](https://reactjs.org/docs/react-component.html)
- class component [lifecycle method check](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- Every component has `props.children` either class or function component

  - props
  - state
  - children ```<component>
    <child component/>
    </component> access with

             function component(props) {
               return {props.children} // return <h1>hey</h1> it will replace child-component
             }
        ```

  - `Folder structure`
    **components** - pure functions (doesn't use state management)
    **containers** - manage states can't be pure functions

- `Robofriens` final touch `destructuring` & `ternary operator` to reduce the code and finally `npm run build` https://cra.link/deployment
  DEPLOYED URL [REPO](https://github.com/aneagoie/robofriends)

  ```
  npm install -g serve
  serve -s build
  serve -s build -l 4000
  serve -h // for help
  ```

  ###### Face detection app

  - npm packages used

  1. [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt)
  2. [react-ts-partices](https://www.npmjs.com/package/react-tsparticles)

  ###### Robofriends _hooks_ (v16.8 implemented)

  **Example:**
  const [temp, setTemp] = useState(<initial-value>);

  - `temp` - value
  - `setTemp` - function

  ```
  useState -> allow you to set State like class component this.state={};
  ```

  - Inside lifecycle methods in class components this.state or this.props works because it's there core component but custome function wont work so use arrow function

  ```
  componentDidMount() {
    fetch(url).then(res => res.json()).then(data => console.log(data));
  }
  ```

  - empty array will allow to run useEffect one time like componentDidMount()

  ```
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => console.log(data));
  }, []);
  ```

  **Note**:

  - class (life cycle methods) & function(hooks) can work side by side there is no plan to remove class components from `react.js`
  - call hooks at top level (dont call inside conditional statements or functions)

- ###### Migration
  - `npm install` - first for cloned repo
  - `npm audit fix`
  - `npm update`
  - `npm audit`
  - `npm audit fix --force`
- `ErrorBoundry` - will be more usefull in production because it wont break the page instead throws error-boundy error.
- `ErrorBoundry` & `React.strictmode` both only work in `development` mode

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
- [[dog images apis](http://placecorgi.com/260/180)](http://placecorgi.com/)
- [robohash images apis](https://robohash.org/guna.png?size=400x400&bgset=bg1)
- ##### Free templates

  - [Mashup templates](http://www.mashup-template.com/templates.html)

- [CSS & Js Games learning](https://codepip.com/)

---

#### Git

---

##### links

- [.gitignore](https://linuxize.com/post/gitignore-ignoring-files-in-git/)
- [reactjs system limit react error](https://www.nicesnippets.com/blog/solved-system-limit-for-number-of-file-watchers-reached-reactjs)
