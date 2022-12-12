# Dmitry Buravkin

### Contacts:

**Phone:** +375 (29) 8930685  
**Email:** dmitry.buravkin@gmail.com    
**Telegram:** @Alyaska53  
**GitHub:** [Alyaska53](https://github.com/Alyaska53)  
**LinkedIn:** [Dmitry Buravkin](https://www.linkedin.com/in/dmitry-buravkin/)  

***

### Briefly about myself: 

I am a frontend developer with experience in developing my own projects. 

In 2020 I graduated from the _Belarusian National Technical University_ with a degree in _Power Engineering_.  
Today I work as an engineer in the laboratory of robotic systems at the Academy of Sciences of Belarus.

I also have some C++ and SQL programming experience. 
I always strive to find effective ways to solve specific problems. I am easy to learn and work well in a team.

My main goal is to start a career as a frontend developer and grow to a team leader in 4-5 years.

***

### Skills and Proficiency:

* HTML5, CSS3  
* JavaScript 
* React
* Redux 
* Node.js Basics
* Sass
* Webpack
* Boodstrap
* Git 
* Figma  

***

### Code example:

**KATA from CODEWARS**: _Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid._  
_The function should return_ `true` _if the string is valid, and_ `false` _if it's invalid._

```
function validParentheses(parens) {
  if (parens.length > 100) return false;
      
  const brackets = parens.split('')
                         .filter(el => (el === ')') || (el === '('));  
  const stack = [];
  
  brackets.forEach((element) => {
    if (element === '(') || 
        !stack.length ||
        stack[stack.length - 1] === ')') {
      
      stack.push(element);
      return;
    } 
    
    stack.pop();
    return;
  });
  
  return !stack.length;
}
```
***