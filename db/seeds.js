const Project = require("../models/Project");
const Task = require("../models/Task");
const Subtask = require("../models/Subtask");
const faker = require("faker");
const mongoose = require("./connections");

// const item1 = new Task({
//     type: "FMEA",
//     processStep: "ATM Pin Authentication",
//     failureType: "Unauthorized access",
//     potentialImpact: "Unauthorized cash withdrawal",
//     severity: 8,
//     potentialCause: "Lost or stolen ATM card",
//     occurence: 3,
//     preventionControls: "Block ATM card after 3 failed attempts",
//     detection:3,
//     rpn: 72,
//     notes: []
// })

// const item2 = new Task({
//     type: "FMEA",
//     processStep: "ATM Pin Authentication",
//     failureType: "Authentication failure",
//     potentialImpact: "Annoyed customer",
//     severity: 3,
//     potentialCause: "Network failure",
//     occurence: 5,
//     preventionControls: "Install load balanecer to distribute workload across network links",
//     detection: 5,
//     rpn: 75,
//     notes: []
// })

// const item3 = new Task({
//     type: "FMEA",
//     processStep: "Dispense Cash",
//     failureType: "Cash not disbursed",
//     potentialImpact: "Dissatisfied customer",
//     severity: 7,
//     potentialCause: "ATM out of cash",
//     occurence: 7,
//     preventionControls: "Internal alert of low cash in ATM",
//     detection: 4,
//     rpn: 196,
//     notes: []
// })
const types = ["DMAIC", "DMADV"];

// const project1 = new Project({
//     name: faker.words(3),
//     type: types[Math.round(Math.random())],
//     tasks: [],
// })

// Project.remove({})
//     .then(() => Task.remove({}))
//     .then(() => Task.insertMany([item1, item2, item3]))
//     .then(() => project1.save())
//     .then(() => console.log('Successful Save'))
//     .then(() => mongoose.connection.close())

Project.remove({})
  .then(() => Task.remove({}))
  .then(() => Subtask.remove({}))
  .then(() => {
    
    // Generate Array with 3 items;
    const projects = Array(3).fill(null);
    const tasks = Array(12).fill(null);
    const subtasks = Array(8).fill(null);

    // Loop over array to create new Projects
    projects.forEach(() => {
      const projectType = types[Math.round(Math.random())];

      const cp = new Project({
        name: faker.lorem.words(3),
        type: projectType
        // taskIds: [ ] task ids
      });

      const pId = cp.get("id");
      let taskIds = [];
      let subtaskIds = [];

      // Start Task Creation
      tasks.forEach(() => {

        const ct = new Task({
          type: projectType,
          processStep: String,
          projectId: pId
          // subtaskIds:[ ] st ids,
          // notes: [ ] note ids,
        });

        const tId = ct.get("id");

        taskIds.push(tId);

        // START Subtask creation
        subtasks.forEach(() => {
          
          const sev = Math.round(Math.random() * 10);
          const occ = Math.round(Math.random() * 10);
          const det = Math.round(Math.random() * 10);
          const rpn = sev * occ * det;

          const cst = new Subtask({
            failureType: faker.lorem.words(3),
            potentialImpact: faker.lorem.words(1),
            severity: sev,
            potentialCause: faker.lorem.words(5),
            occurence: occ,
            preventionControls: faker.lorem.words(12),
            detection: det,
            rpn,
            projectId: pId,
            taskId: tId
            // subtaskIds:[ ] st ids,
            // notes: [ ] note ids,
          });

          cst.save();

          const cstId = cst.get("id");

          subtaskIds.push(cstId);

        });
        // END Subtask creation
        ct.set('subtaskIds', subtaskIds);

        subtaskIds = [];
        
        ct.save();

      });
      // END task creation
      cp.set('taskIds', taskIds);

      taskIds = [];

      cp.save();
      // currentProject
    });

  });
