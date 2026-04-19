const database = {
    weekdayGoal: [
        {id:1, goal: "SLAA mtg. Cook meal. Intentional rest. One book chapter"},
        {id:2, goal: "Weekly check-in and set intention"},
        {id:3, goal: "Gym. Coding class or woodworking"},
        {id:4, goal: "Gym. In-person friend time."},
        {id:5, goal: "Gym. Creative hour. SLAA mtg."},
        {id:6, goal: "Gym. Plan social evening."},
        {id:7, goal: "Longer creative session. Farmers market or errand that gets you outside."},
    ],
    body: [
        {goal: "Gym, walk, or yoga"},
        {goal: "Two unprocessed meals"},
        {goal: "Pepprmint tea"},
        {goal: "No alcohol or cbd"},
        {goal: "Skincare morning/night"},
        {goal: "Invisalign"},
    ],
    creative: [
        {goal: "Woodworking"},
        {goal: "Sketching"},
    ],
    connection: [
        {goal: "One meaningful connection: text, call, or in-person"},
        {goal: "Not waiting to need help before reaching out"},
        {goal: "SLAA mtg"},
        {goal: "Sponsor, service, and/or outreach"},
    ],
    work: [
        {goal: "30 minutes of arboreal or legislative research"},
        {goal: "90-day roadmap"},
        {goal: "Coding website"},
        {goal: "Coding class"},
    ],
    spirit: [
        {goal: "Two-way prayer"},
        {goal: "Therapy restarted"},
        {goal: "Self-care act"},
    ],
}

export const getBodyGoal = () => {
    return structuredClone(database.body);
};
export const getWeekdayGoal = () => {
    return structuredClone(database.weekdayGoal);
};
export const getCreativeGoal = () => {
    return structuredClone(database.creative);
};
export const getConnectionGoal = () => {
    return structuredClone(database.connection);
};
export const getWorkGoal = () => {
    return structuredClone(database.work);
};
export const getSpiritGoal = () => {
    return structuredClone(database.spirit);
};