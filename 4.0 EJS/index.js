import express from "express";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get("/",(req,res) => {

    const day = new Date();
    const date = day.getDay();
      
    let week = "Hey it's Weekday, it's time to work smartly Hard 👨‍💻👩🏻‍💻📓✍🏻💡";
    
    if (date === 0|| date === 6) {
        week = "Hey it's WeekEnd, it's time to RelaX!!🧘🏽💆‍♂️😴🤍☁️🌿🍃✨️";
   }
    res.render("index",{
        whatis: week
    });

    console.log(date);

});

app.listen(port, () => {
    console.log("I'm ready!");
});