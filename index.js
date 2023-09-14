import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const lists=[[]];

var listCount=0;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    
    res.render("index.ejs",{items:lists,listIdx:listCount});
})

app.post("/submit",(req,res)=>{
    
    const data={"task":req.body.TaskName,
                "time":req.body.StartTime+" : "+req.body.EndTime};
    // lists[req.body.listIndex].push(data);
    const listIndex=parseInt(req.body.listIndex);
    console.log(listIndex);
    lists[listIndex].push(data);
    console.log(lists);
    res.render("index.ejs",{items:lists,listIdx:listIndex});
})



app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})