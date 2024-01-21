import express from "express";
const app = express();

// app.use((req, res) =>{
//     console.log("running port");
//     // res.send("Response");
// })

app.get("/cats", (req, res) =>{
    console.log("Cat route");
    res.send("Meow");
})

app.post("/cats", (req, res) =>{
    console.log("Cat route");
    res.send("Meow");
})

// if we place this at the top then none of the other requests will be
// entertained, it'll follow priority
app.post("/*", (req, res) =>{
    console.log("Generic response");
    res.send("response");
})

// defining a pattern for the url
app.get('/r/:subreddit/:id', (req, res) =>{
    // res.send("Pattern response of subreddit");
    const {subreddit, id} = req.params;
    res.send(`<h1> This is the ${id} number of '${subreddit}' subreddit </h1>`);
})

app.get('/search', (req, res) =>{
    const {q} = req.query;
    if(!q){
        res.send("Nothing found if nothing searched");
    }
    res.send(`<h1>You searched for ${q}`);
})

app.listen(3000, () =>{
    console.log("Listening on port 3000");
})