const express = require("express");
const Form = require("../models/formModel");
const router = express.Router();

router.post("/", async (req, res) => {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
});

router.get("/:id", async (req, res) => {
    const form = await Form.findById(req.params.id);
    res.status(200).json(form);
});

module.exports = router;
