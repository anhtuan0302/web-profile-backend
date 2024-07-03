var express = require('express');
var router = express.Router();

const infoModel = require('../models/info');

router.get('/', async (req, res) => {
    const info = await infoModel.find();
    res.json(info);
});

router.post('/', async (req, res) => {
    const { name, avatar, cover, address, phone, email, website, description } = req.body;
    const count = await infoModel.countDocuments();
    if (count > 0) {
        return res.status(400).json({ message: 'A record already exists. No more records can be created.' });
    }
    const newInfo = await infoModel.create({ name, avatar, cover, address, phone, email, website, description });
    res.json(newInfo);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, avatar, cover, address, phone, email, website, description } = req.body;
    const updatedInfo = await infoModel.findByIdAndUpdate(id, { name, avatar, cover, address, phone, email, website, description }, { new: true });
    res.json(updatedInfo);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await infoModel.findByIdAndDelete(id);
    res.json({ message: 'Info deleted' });
});

module.exports = router;