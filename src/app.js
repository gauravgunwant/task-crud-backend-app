import express from "express";
import dbModel from "./models/db.model.js";
import logger from "./models/logger.model.js"; // http req middleware for express!.. method,url,statuscode,etc
import morgan from "morgan"; // log levels, - transportation -> file/ json structure, or console
// lvls like info, warn, debug, error

let app = express();

// logger snippet from docs!
const morganFormat = ":method :url :status :response-time ms";

app.use(
    morgan(morganFormat, {
        stream: {
            write: (message) => {
                const logObject = {
                    method: message.split(" ")[0],
                    url: message.split(" ")[1],
                    status: message.split(" ")[2],
                    responseTime: message.split(" ")[3],
                };
                logger.info(JSON.stringify(logObject));
            },
        },
    }),
);

app.use(express.json());

// create task

app.post("/task", async (req, res) => {
  const data = req.body;
  console.log(data);
  await dbModel.create({
    task : data.task,
    description : data.description
  })

  res.status(201).json({
    message: "Data successfully inserted!"
  })

});

// fetch tasks

app.get("/task", async (req,res)=>{
  const data = await dbModel.find();
  res.status(200).json({
    message : "Data fetched!",
    data : data
  });
})

// update description of the task!
app.patch("/task/:id", async (req,res)=>{
  const id = req.params.id;
  const description = req.body.description;
  if (description){
    await dbModel.findByIdAndUpdate({_id : id},{description : description});
    res.status(200).json({
      message : "Description updated successfully!",
    })
  }else{
    res.status(400).json({
      message : "Failed to update!",
    })
  }
})

// delete description

app.delete("/task/:id", async (req,res)=>{
  const id = req.params.id;
  await dbModel.findByIdAndDelete({_id:id})

  res.status(200).json({
    message : "Description deleted successfully!",
  })

})

export default app;
