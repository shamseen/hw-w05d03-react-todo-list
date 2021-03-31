[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

[Markdown website](https://seir-erica-sfs.herokuapp.com/react-fundamentals/week-13/day-2/lecture-materials/handling-form-inputs/#react-to-do-list)

# React To Do list

For this homework/lab, you will be creating a to do list using React.

[Working Example](https://yxr29.csb.app/)

<details>
  <summary>Preview Image</summary>
  
![Working Example](https://i.imgur.com/47LwvRJ.png)

</details>

### Learning Objectives

- React State
- Controlling Input in React
- Rendering Data with React

### Prerequisites

- React State
- React Props
- Capturing Input

## Requirements

<details>
  <summary><code>Starter Code</code></summary>
  
 ```text
const toDoListData = [
  {
    title: "Learn more about React",
    completed: true /*Notice That I say true and look where I am on the page when you look at the starter code */
  },
  {
    title: "Write a new Component",
    completed: false
  },
  {
    title: "Add some style",
    completed: false
  }
];
```

</details>

- [ ] When the page loads, your app should render a list of items from an array of data. You can use the data below its already imported for you at codesandbox.
  - Some people had trouble with the HW yesterday, because they weren't able to remove REACT from the imports
  - Only React version 17 and higher and React Scripts 4 and higher allow you the freedom to remove the React Import.
- [ ] Working To Do List in React.
- [ ] Submit Homework via Google Form
- [ ] If the item is not completed, render the item on the page.
- [ ] Your app should have an input that allows the user to enter a new item to the to do list.
- [ ] When the user submits the form (presses enter) the value in the input should be added as an item on your to do list.
- [ ] Allow the user to complete an item by clicking on it. When the user clicks on a list item, toggle its completed property to true and send it to the completed list.
- [ ] Update the Styling of the application (Need a hint google: Color Pallete), try switching the application to dark mode

## Hungry For More

- [ ] When you click on an item in the Completed List it should be deleted from the application
- [ ] If you get the above bonus completed, try refactoring your app so that the items which are deleted remain on the page with a strike through them.
- [ ] Put the Main App inside of a Hexagon with Clip Path
- [ ] When You Click On The Text of A Todo Make it grow to cover the page, neatly. When you click it again make it go back to regular size (use either the checkbox hack or toggle a className on click with React)... I didn't teach you this you'll have to look it up
