// test("Should add taskinput to list", () => {
//   // get task input
//   const taskInput = document.querySelector("input[name='task']");

//   // enter test data into inputs
//   taskInput.value = "drink";

//   // submit the form
//   const submitButton = document.querySelector("button[id='push']");
//   submitButton.click();

//   // verify that the page contains the expected result
//   const result = document.querySelector("#tasks");
//   equal(result.textContent, taskInput.value);

//   // reset the page so it doesn't affect anything else
//   result.textContent = "";
// });

test('when add button is clicked, display task in the div id=tasks',()=>{
  const button = document.getElementById('push');
  button.click();
  const form = document.getElementById('tasks');
  const actual=document.body.contains(form);
  const expected= true;
  equal(actual, expected)
});






























//Add tasks to a list so that I can keep track of them
test("Submitting a new task adds it to the list", () => {
    
  });

//Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
    // test goes here
  });

//Delete things from the list if I don’t need to do them anymore
test("Deleting an entry removes it from the list", () => {
  // test goes here
});