const Contract = require('../models/contract');


exports.createContract = async (req, res) => {
    try {
        const contract = await Contract.create(req.body);
        res.status(201).json(contract);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAllContracts = async (req, res) => {
    try {
        const contracts = await Contract.findAll();
        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateContract = async (req, res) => {
    try {
        const contract = await Contract.findByPk(req.params.id);
        if (!contract) {
            return res.status(404).json({ message: 'Contract not found' });
        }
        await contract.update(req.body);
        res.status(200).json(contract);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteContract = async (req, res) => {
    try {
        const contract = await Contract.findByPk(req.params.id);
        if (!contract) {
            return res.status(404).json({ message: 'Contract not found' });
        }
        await contract.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
