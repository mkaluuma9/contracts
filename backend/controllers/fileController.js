const File = require('../models/file'); 

exports.createFile = async (req, res) => {
    try {
        const file = await File.create(req.body);
        res.status(201).json(file);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllFiles = async (req, res) => {
    try {
        const files = await File.findAll();
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFileById = async (req, res) => {
    try {
        const file = await File.findByPk(req.params.id);
        if (!file) {
            return res.status(404).json({ error: 'File not found' });
        }
        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateFile = async (req, res) => {
    try {
        const [updated] = await File.update(req.body, {
            where: { id: req.params.id },
        });
        if (!updated) {
            return res.status(404).json({ error: 'File not found' });
        }
        const updatedFile = await File.findByPk(req.params.id);
        res.status(200).json(updatedFile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteFile = async (req, res) => {
    try {
        const deleted = await File.destroy({
            where: { id: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json({ error: 'File not found' });
        }
        res.status(204).json({ message: 'File deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
