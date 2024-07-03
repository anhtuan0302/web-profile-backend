var express = require("express");
var router = express.Router();

const projectsModel = require("../models/project");

router.get("/", async (req, res) => {
  const projects = await projectsModel.find();
  res.json(projects);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const project = await projectsModel.findById(id);
  res.json(project);
});

router.post("/", async (req, res) => {
  const { title, description, image } = req.body;
  const newProject = await projectsModel.create({ title, description,
    image });
  res.json(newProject);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;
  const updatedProject = await projectsModel.findByIdAndUpdate(
    id,
    { title, description, image },
    { new: true }
  );
  res.json(updatedProject);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await projectsModel.findByIdAndDelete(id);
  res.json({ message: "Project deleted" });
});

module.exports = router;


