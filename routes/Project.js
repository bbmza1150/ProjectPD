const express = require('express');
const router = express.Router();

const {createProject,updateProject,getProject,getProjects,deleteProject} = require("../controllers/projectController");
router.post("/", async(req,res)=>{
    res.sendStatus(404);
});

router.post("/createProject",createProject);
router.delete("/deleteProject/:project_id",deleteProject);
router.put("/project/:project_id", updateProject);
router.get("/project/:project_id", getProject);
router.get("/projects", getProjects);
module.exports = router;