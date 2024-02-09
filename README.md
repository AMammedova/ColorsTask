### Intro:
The main goal of this exercise is to test your ability to write clean, maintainable, and **performant** code. We are looking for a solution that is well-architected and follows best practices. 

### Requirements:

1. Clicking an item selects/unselects it.
2. Multiple items can be selected at a time.
3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
4. Currently selected items should be visually highlighted.
5. Currently selected items' names should be shown at the top of the page.
6. Implement a "Select All" button that, when clicked, selects all items in the list.
7. Allow for the deselection of all items using a "Deselect All" button.

### How performance is measured:

To measure the performance of your solution, we will use [React Developers Tools](https://chromewebstore.google.com/detail/fmkadmapgofadopljbjfkapdkoienihi) chrome extension. We will use the "Highlight Updates" feature to see how many components are being re-rendered when we interact with the list.

Example:

![image](https://github.com/emil9453/cyber-colors-task/assets/48174625/6dfb1a7f-cf55-4d7f-8f02-f057fdc14159)

<br/>
<br/>
<br/>

![image](https://github.com/emil9453/cyber-colors-task/assets/48174625/2791e502-a013-4e18-86b0-428d946599f2)

<br/>

After clicking on first item only the first item is re-rendered.

<br/>

![image](https://github.com/emil9453/cyber-colors-task/assets/48174625/5bea9313-b1c7-43a3-a1a0-b5cffaa631e4)

***Please make sure that all the requirements are met, before you start working on the "Nice to have" requirements.***

### Nice to have:

1. Add search/filter functionality that dynamically filters the items based on user input. Ensure that the selection state is maintained during filtering.
2. Provide a button to clear the search/filter and reset the list to its original state.
3. Test the feature thoroughly to handle edge cases, such as rapid clicking, and ensure a smooth user experience.
4. Enhance the visual indication of selected items by applying a distinct style or animation.

Feel free to change the component structure as you want.
