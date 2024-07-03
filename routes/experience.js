var express = require('express');
var router = express.Router();

const experienceModel = require('../models/experience');

router.get('/', async (req, res) => {
    const experiences = await experienceModel.find();
    res.json(experiences);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const experience = await experienceModel.findById(id);
    res.json(experience);
});

router.post('/', async (req, res) => {
    const { title, type, company, location, startDate, endDate } = req.body;
    const newExperience = await experienceModel.create({ title, type, company, location, startDate, endDate });
    res.json(newExperience);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, type, company, location, startDate, endDate } = req.body;
    const updatedExperience = await experienceModel.findByIdAndUpdate(id, { title, type, company, location, startDate, endDate }, { new: true });
    res.json(updatedExperience);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await experienceModel.findByIdAndDelete(id);
    res.json({ message: 'Experience deleted' });
});

module.exports = router;