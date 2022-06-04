/**
 * window.addEventListener("load"; () => {});
 * .querySelector('')  element = document.querySelector(sélecteurs);
 */
window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form");
  const input = document.getElementById("new-task-input");
  const taskList = document.querySelector("task-list");
  const listEl = document.getElementById("tasks"); //<div class="task">

  //console.log(form, input);
  //Add Submit envent to form element w refresh page.
  form.addEventListener("submit", (e) => {
    //empeche le non refresh the page.
    e.preventDefault();

    //User typing.
    const taskInput = input.value;

    if (!taskInput) {
      alert("Please fill out the task!!!");
      return; // met fin à l'execution
    } else {
      // =============================================================================
      //
      // =============================================================================

      // CreateElement   'function d'ajout de tache dans quoi?' 'ajout de bloc html'

      // [1] Create | <div class="task"></div>
      const taskEl = document.createElement("div"); //create DOM Node
      taskEl.classList.add("task"); // Ajoute une .class
      /**debug */
      console.log(taskEl);

      // [2] Create | <div class="content"> TaskInput </content>
      const taskContentEl = document.createElement("div");
      taskContentEl.classList.add("content");
      taskContentEl.innerHTML = taskInput;
      /**debug */
      console.log(taskContentEl);

      // Ajout
      // [3] Injection | <div class="task"> ajout content // ok fonctionne
      taskEl.appendChild(taskContentEl);
      /**debug */
      console.log(taskEl.appendChild(taskContentEl));

      // [4] Create | <input class="text" type="text" readonly="readonly"></input>
      const taskInputEl = document.createElement("input");
      taskInputEl.classList.add("text");
      taskInputEl.type = "text";
      taskInputEl.value = taskEl;
      taskInputEl.setAttribute("readonly", "readonly");
      /**debug */
      console.log(taskInputEl);

      // [5] Injection | ok
      taskContentEl.appendChild(taskInputEl);
      console.log(taskContentEl.appendChild(taskInputEl));

      // =============================================================================
      // New Elements
      // =============================================================================

      // [6] Create | <div class="actions"></div>
      const taskActionEl = document.createElement("div");
      taskActionEl.classList.add("actions");

      // [7] Create | <button class="edit"></button>
      const taskEditEl = document.createElement("button");
      taskEditEl.classList.add("edit"); //action
      console.log(taskEditEl);

      // [8] Create | <button class="delete">delete</button> | ok
      const taskDeleteEl = document.createElement("button");
      taskDeleteEl.classList.add("delete"); // class="delete"
      taskDeleteEl.innerHTML = "Delete"; // <element> Delete </element>
      /**debug */
      console.log(taskDeleteEl);

      // =============================================================================
      //  Injections HTML
      // =============================================================================

      // Ajouter node child dans le button "edit"
      // [9] Injection |Espected: <div class="tasks"><div class="content">Saisie user</div></div> ok
      taskActionEl.appendChild(taskEditEl);

      // Ajouter node child dans le button "delete"
      taskActionEl.appendChild(taskDeleteEl);

      // Ajouter node child dans la div "actions"
      taskEl.appendChild(taskActionEl);

      // Ajouter node child dans <div class="task"></div>
      listEl.appendChild(taskEl);

      /**debug */
      console.log(listEl.appendChild(taskEl));

      input.value = "";
    }
  });
});
