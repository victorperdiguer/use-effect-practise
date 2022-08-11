# React, life cycle & useEffect 🌈

Right now you already know a lot about two react hooks: <code>useState</code> and <code>useEffect</code>. In this exercise you will practise both!

---

## Iteration 1: simple counter 🔢

In the <code>Counter</code> component, create a function called <code>handleIncrease</code> that, when passed to the "onClick" event of the increase button, will increase the count state by 1.

Then, create a function called <code>handleDecrease</code> that, when passed to the "onClick" event of the decrease button, will decrease the count state by 1.

---

## Iteration 2: initial render random 🎱

Do you see the "count" state in the <code>Counter</code> component? By default it is initiallized to 0.

Now use a hook to give the component the following effect: **when the component just mounted**, and **only the first time it renders**, it should update the state and set it to a random number betwen 0 and 10.

This way, everytime we refresh our page, we should see a different initial value for the counter.

The increase and decrease buttons should still work.

> 💡 Note: might want to remember how the Math.random() worked for this iteration.

---

## Iteration 3: color change 🎨

We want to add another effect to our component <code>Counter</code>: the color of the counter number should change:

- If it is 0 or less, it should be red
- If it is a number between 0 and 5, it should be orange
- If it is a number bigger than 5, it should be green

This effect should apply everytime the "count" state is changed.

> 💡 Note: you already have the classes ready in the <code>App.css</code> file, and the class is already dynamic. Everything is set so you can focus on the hooks.

---

## Iteration 4: toggle, toggle, dubidu 🧠

Let's move to the <code>App.jsx</code> component one second.

As you can see, the Counter component is only shown because the toggle in the state of App is set up to <code>true</code>.

Create a button in the <code>App.jsx</code> component that, when clicked, will hide the Counter component by setting the state to false.

---

## Iteration 5: clean up your mess! 🧹

Go back to the <code>Counter.jsx</code> component again. 

Write the necessary code to make sure that, **when the Counter component unmounts** (for instance, when we click the hide button on <code>App.jsx</code>):

- The count state is back to 0
- The dynamic class state is back to 'text'
- You display the following console.log, to test everything is right:

```js
console.log('All clean here. Count:', count, 'Class:', dynamicClass);
```

All done ✅