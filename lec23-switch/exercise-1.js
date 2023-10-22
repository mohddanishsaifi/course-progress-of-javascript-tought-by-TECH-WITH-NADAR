const activities = ["Swimming", "Hiing", "Rock Climbing", "Biking", "Running"];

for(const activity of activities) {
    switch(activity) {
        case "Swimming": {
            console.log("Like a fish!");
            break;
        }
        case "Rock Climbing": {
            console.log("Like a mountain goat!");
            break;
        }
        case "Running" : {
            console.log("Like a cheetah!");
            break;
        }
        default : {
            console.log("I am sure some animal does that");
            break;
        }
    }
}