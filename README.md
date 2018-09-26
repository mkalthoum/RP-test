### rp-ui-starter
# Rightpoint’s starter kit for UI/FED projects

This version has a Gulp-powered build system with these features:
- HTML partials with gulp-file-include
- BrowserSync
- Sass compilation and prefixing
- For production builds: CSS compression, JavaScript compression, Image compression


## Getting Started

Clone: https://github.com/rp-feds/rp-ui-starter.git

Once you have cloned the repo, navigate in to the directory via terminal and run:


```
npm install
gulp
```


## Goals

The point of having style guidelines is to have a common vocabulary of coding so people can concentrate on what you’re saying rather than on how you’re saying it. We present global style rules here so people know the vocabulary, but local style is also important. If code you add to a file looks drastically different from the existing code around it, it throws readers out of their rhythm when they go to read it. 


### GENERAL STANDARDS ###

-	Consistency and conventions between team members is paramount
-	Solutions should be as simple and clear as possible
-	Solutions should serve a specific purpose
- Github Flow - follow branch-based workflow 
https://help.github.com/articles/github-flow/



### HTML PRINCIPLES ###

-	Build pages as a library of components, in such a way that blocks of code can be broken up and reused when implemented
-	Maintain a clear separation of concerns, avoid in-line styles and in-line JavaScript whenever possible
-	Use the most meaningful yet minimal markup required to present the styles and interaction required
-	Have reference implementations so that each team member knows what sorts of structures are appropriate, as well as where to add new code




### CSS/SCSS PRINCIPLES ###

-	Build pages as a library of components, in such a way that blocks of scss code can be broken up and reused when implemented
- Use Sass whenever possible (use the .scss syntax)
-	Avoid nested selectors for more modular CSS
-	Put your styles in the scss files and avoid in-line CSS and style tags on the page
- Prefer dash-cased variable names (e.g. $my-variable) over camelCased or snake_cased variable names
- Do not nest selectors more than three levels deep!
- Never nest ID selectors



### JAVASCRIPT PRINCIPLES ###

-	Write JavaScript with the next developer in mind, or as if it’ll be released as Open Source, so keep it clear and readable.


General advice for readability: 
- Choose your variable and function names carefully. 
- CamelCase is used in JavaScript and it is a visually identifiable JS formatting
- Use named function expressions instead of function declarations
- Use single quotes '' for strings
- Use JS design patterns when appropriate. https://addyosmani.com/resources/essentialjsdesignpatterns/book/

A mostly reasonable approach to JavaScript:
https://github.com/airbnb/javascript

Clientside Javascript (jQuery) Best Practices:
https://github.com/holidayextras/culture/blob/master/clientside-jquery-best-practices.md


### DEVELOPMENT TOOLS ###

All of our front-end tooling is built upon Node and npm.

-	Gulp – The glue between all of our build tools

-	BrowserSync – Live-reloads and synchronises browsers, plus other goodies. 
-	ESLint – The best JavaScript linter. 
-	SASS-Lint – Best SCSS linter. 
-	Chrome DevTools – Browser developer tools for Chrome. 


### NAMING CONVENTIONS: ###

-	If the components already exist in VS as tasks assigned to you, use those names for components - if not, use meaningful ID and class names
-	Use ID and class names that are as short as possible but as long as necessary
