const letterLeser = {
    section1: {
        title: "Description",
        p1: "This project was a simulation of a real-world Scrum environment where a group of students were asked to develop an e-mail dashboard application from scratch. The group consisted of developers and designers and were split into the teams labelled: Engine, GUI, Database, Requirements, Quality Assurance and Usability.",
        p2: "I was assigned to be co-leader of team Usability and a member of team Database.",
    },
    section2: {
        title: "Design",
        p1: "As there were a sufficient number of members in team Usability, the workload was split between members for design and evaluation. I was not heavily involved in the design phase but participated in meetings and discussions where design decisions were made.",
        p2: "To begin with, the stakeholder made it clear to team Requirements that the app is to be developed for his personal use only. Therefore, we did not have to consider representative users, as our decisions had to be focused around our sole user. Requirements also noted the basic elements and color scheme that the stakeholder requested for.",
        p3: "Using this information, discussions were held between team Engine, GUI and Usability to determine how these requirements could be implemented. Based off the discussions, team Usability began to design the main interface of the application.",
        images1: ["300px", [{url: "/Projects/ux/letter-leser/letterleser.jpg", name: "Prototype of LetterLeser interface"}], "Prototype of LetterLeser interface"],
        p4: "The name was decided based on a voting system implemented among the team, LetterLeser was chosen from among the many options. LetterLeser was chosen because of the alliteration which makes it easy to remember, and the inclusion of the word 'Leser' which is German for 'Reader', so as to pay homage to the stakeholder who is of German descent.",
        p5: "The color scheme was based on the official colors of SUNY Oswego, where the stakeholder was employed. Variations of the main colors were used to provide appropriate levels of contrast.",
        p6: "The chart designs were chosen to be able to best visualize the statistics that the stakeholder wanted to view."
    },
    section3: {
        title: "Evaluation",
        p1: "While my involvement in the design phase was minor, I spearheaded team Usability during the evaluation phase. I began by planning and documenting the research procedure so that all researchers would be on the same page during evaluations.",
        p2: "The evaluation was conducted as a standard usability test. The participants were asked to use the prototype of the interface and perform 8 simple tasks that would have them use the main functions of the application. While doing so, their voice and screen activity were recorded.",
        p3: "For each task an indication was made whether a participant successfully completed it or not along with the time taken to complete the task. Following each task, an After Scenario Questionnaire (ASQ) was provided to the participants to identify their satisfaction with it. Participants were asked to complete a Post-Study System Usability Questionnaire (PSSUQ) after the study to assess the overall user satisfaction, system usefulness, information quality and the interface quality of the application.",
    },
    section4: {
        title: "Results",
        p1: "Following the evaluation, the gathered data was statistically analyzed and visually charted to identify and possible problem points.",
        images1: ["300px", [{url: "/Projects/ux/letter-leser/totasq1.png", name: "Comparing Time on Task and ASQ Score"}], "Comparing Time on Task and ASQ Score"],
        images2: ["300px", [{url: "/Projects/ux/letter-leser/tot1.png", name: "Comparing expert Time on Task and user Time on Task"}], "Comparing expert Time on Task and user Time on Task"],
        images3: ["400px", [{url: "/Projects/ux/letter-leser/taskcompletionrate1.png", name: "Task Completion Rate"}], "Task Completion Rate"],
        p2: "Using the results gathered from the evaluation, we were able to compile a list of possible solutions for the usability problems present within the interface. Each issue highlighted the current design, the problems encountered by users, problem severity and design recommendation, as follows:",
        images4: ["700px", [{url: "/Projects/ux/letter-leser/rec.jpg", name: "Example of Design problem and recommendation"}], "Example: Design problem and recommendation"],
        p3: "The design team used the list of problems and solutions to update the prototype accordingly, which was then used by the developers to create the final interface of the application."
    },
    section5: {
        title: "Reflection",
        p1: "As this project utilized the Scrum framework of Agile development, it exposed us to the process of developing a software using this framework. Regular scrum meetings were led by a scrum master. Self-organizing, cross-functional teams worked together to accomplish goals noted down on a project backlog. I learned how to effectively communicate and work with my team and other teams.",
        p2: "This was the first project that I worked on where front and back end development was also involved. It was more challenging to make design decisions that would satisfy both users and developers, as opposed to only considering the user.",
        p3: "I also realized how much time management matters in software development. The time and effort it would take a create a perfect product may sometimes be too high, requiring compromises to be made if things do not go according to plan. Therefore, it is important to be prepared for such situations."
    }
}

export default letterLeser