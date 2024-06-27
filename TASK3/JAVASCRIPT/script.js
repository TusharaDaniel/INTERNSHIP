$(document).ready(function() {
    // Dummy data for tasks
    const tasks = [
        { id: 1, title: "Task 1", date: "2024-06-27" },
        { id: 2, title: "Task 2", date: "2024-07-16" },
        { id: 3, title: "Task 3", date: "2024-07-05" },
        { id: 3, title: "EP lab exam ", date: "2024-06-26" },

        // Add more tasks as needed
    ];

    // Function to display today's tasks
    function displayTodayTasks() {
        const today = moment().format('YYYY-MM-DD');
        const todayTasks = tasks.filter(task => task.date === today);
        
        const tasksList = $('#tasks-list');
        tasksList.empty();
        
        todayTasks.forEach(task => {
            tasksList.append(`<li>${task.title}</li>`);
        });
    }

    // Initialize the calendar
    $('#calendar').fullCalendar({
        events: tasks.map(task => ({
            title: task.title,
            start: task.date
        }))
    });

    // Display today's tasks
    displayTodayTasks();
});