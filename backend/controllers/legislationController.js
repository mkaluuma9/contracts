const Legislation = require('../models/legislation'); 
exports.createLegislation = async (req, res) => {
    console.log(req.body); // Log the request body
    try {
        const legislation = await Legislation.create(req.body);
        res.status(201).json(legislation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAllLegislations = async (req, res) => {
    try {
        const legislations = await Legislation.findAll();
        res.status(200).json(legislations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getLegislationById = async (req, res) => {
    try {
        const legislation = await Legislation.findByPk(req.params.id);
        if (!legislation) {
            return res.status(404).json({ error: 'Legislation not found' });
        }
        res.status(200).json(legislation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateLegislation = async (req, res) => {
    try {
        const [updated] = await Legislation.update(req.body, {
            where: { id: req.params.id },
        });
        if (!updated) {
            return res.status(404).json({ error: 'Legislation not found' });
        }
        const updatedLegislation = await Legislation.findByPk(req.params.id);
        res.status(200).json(updatedLegislation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteLegislation = async (req, res) => {
    try {
        const deleted = await Legislation.destroy({
            where: { id: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Legislation not found' });
        }
        res.status(204).json({ message: 'Legislation deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
