# TaskList 

Naming conventions for branches and commits based on [Gitflow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow).

[Project Link](https://task-list-dnc.vercel.app/)  
[Project Link with added features](https://tasklist-dnc-production.netlify.app/)

## Features

- Create/remove task groups (organizations)
- Add/Edit/Remove tasks
- List specific tasks for each organization
- Mark task as completed

## Tecnologies Used

- [Vite](https://vitejs.dev/guide/)
- [React](https://react.dev)
- [React Router](https://reactrouter.com/en/main)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [SASS](https://sass-lang.com)

## Pages

### "Organização"

Page responsible for creating and listing organizations to separate tasks.

### "Tarefas"

Page responsible for creating and listing tasks for each organization.


## Usage

It is pretty straightfoward, first add a group name for a group of tasks.  
Then click on its name to be redirected to the page for adding new tasks.  
After that you can add/edit/delete tasks and their descriptions.

For now we use 'localstorage' to keep the data, so its not a permanent solution.  
Databases would be the next step for this project to be complete.

## How to test project:

```bash
# clone the repositorie:

$ git clone https://github.com/thiago-b-coelho/taskList-DNC.git

# change directory to the project directory

$ cd taskList-DNC

# install dependencies

$ npm install

# run project

$ npm run dev
```

With the project running, go to [localhost](http://localhost:5173/) with port 5173.
