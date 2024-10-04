const Litigation = require('../models/litigation');

// Create a new Litigation record
exports.createLitigation = async (req, res) => {
    try {
        const newLitigation = await Litigation.create(req.body);
        res.status(201).json(newLitigation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read all Litigation records
exports.getAllLitigations = async (req, res) => {
    try {
        const litigations = await Litigation.findAll();
        res.status(200).json(litigations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read a single Litigation by ID
exports.getLitigationById = async (req, res) => {
    try {
        const litigation = await Litigation.findByPk(req.params.id);
        if (!litigation) {
            return res.status(404).json({ message: 'Litigation not found' });
        }
        res.status(200).json(litigation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a Litigation record
exports.updateLitigation = async (req, res) => {
    try {
        const litigation = await Litigation.findByPk(req.params.id);
        if (!litigation) {
            return res.status(404).json({ message: 'Litigation not found' });
        }

        await litigation.update(req.body);
        res.status(200).json(litigation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a Litigation record
exports.deleteLitigation = async (req, res) => {
    try {
        const litigation = await Litigation.findByPk(req.params.id);
        if (!litigation) {
            return res.status(404).json({ message: 'Litigation not found' });
        }

        await litigation.destroy();
        res.status(204).send(); // No content after delete
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};