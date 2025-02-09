let names = ["Dave", "Fan", "Candy", "Oswitch"];
// strength, agility, speed
let skills = [
    [90, 60, 60],
    [50, 90, 80],
    [20, 60, 70],
    [60, 50, 50]
];

function averageSkills(skills){
    let average = [];

    for(let i=0; i < skills.length; i++){
        
        let row = skills[i];
        let sum = row.reduce((total, skill) => total + skill, 0);
        average[i] = sum / row.length;
    }

    return average;
}

function qualify(names, average){

    for (let i=0; i < average.length; i++){
        if(average [i] >= 60){
            console.log(names[i] + " qualifies for the average with: " + average[i]);
        } else{
            console.log(names[i] + " does not qualify for the average with: " + average[i]);
        }
    }

}

let averageTwo = averageSkills(skills);
qualify(names, averageTwo);
