import { getWeekdayGoal } from "./database.js";

const weekdayGoals = getWeekdayGoal()
//function that creates areasHTML to display on webpage
export const getWeekdayGoalList = () => {
    let weekdayGoalHTML = '';

    for (const weekdayGoal of weekdayGoals) {
        weekdayGoalHTML +=`
            <section class="weekday-goal-list">
                <h4 class="weekday_goal">Weekday Goal</h4>
                <p class="goal_description">${weekdayGoal.goal}</p>
            </section>
        `;
    }
    return weekdayGoalHTML
}

