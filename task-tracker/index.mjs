#!/usr/bin/node
import fs from 'node:fs';
import taskJSON from "./tasks.json" with {type: "json"};

const argvs = process.argv; // array

async function addTask(taskTitle) {
    taskJSON.push({
        id: taskJSON.length + 1,
        title: taskTitle,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    try {
        await fs.writeFileSync("./tasks.json", JSON.stringify(taskJSON));
        console.log("Task successfully added!")
    } catch (error) {
        console.log(error)
        console.log("Failed to add task!");
        process.exit(1); // error
    }
}

async function deleteTask(taskId) {
    // filter
    const updatedTaskJSON = taskJSON.filter((task) => {
        if (task.id === taskId) {
            return false;
        }
        return true;
    });
    try {
        await fs.writeFileSync("./tasks.json", JSON.stringify(updatedTaskJSON));
        console.log("Task successfully deleted!")
    } catch (error) {
        console.log(error)
        console.log("Failed to delete task!");
        process.exit(1); // error
    }
}

// logic for adding task
if (argvs.includes("add")) {
    const taskTitle = (argvs[3]);
    if (!taskTitle) {
        console.log("Please enter the task title!");
        process.exit(1);//  0 -> success 1-> error
    }
    addTask(taskTitle);
}


// logic for delete a task
if (argvs.includes("del")) {
    const taskId = argvs[3]
    console.log(`task id: ${taskId}`);
    deleteTask(Number(taskId));
}
