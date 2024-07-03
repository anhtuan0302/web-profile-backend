var express = require('express');
var router = express.Router();

const educationModel = require('../models/education');
const education = require('../models/education');

router.get('/', async (req, res) => {
    const educations = await educationModel.find();
    res.json(educations);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const education = await educationModel.findById(id);
    res.json(education);
});

router.post('/', async (req, res) => {
    const { school, degree, major, startDate, endDate, gpa } = req.body;
    const newEducation = await educationModel.create({ school, degree, major, startDate, endDate, gpa });
    res.json(newEducation);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { school, degree, major, startDate, endDate, gpa } = req.body;
    const updatedEducation = await educationModel.findByIdAndUpdate(id, { school, degree, major, startDate, endDate, gpa }, { new: true });
    res.json(updatedEducation);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await educationModel.findByIdAndDelete(id);
    res.json({ message: 'Education deleted' });
});

module.exports = router;