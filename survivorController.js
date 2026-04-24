const Survivor = require('../models/Survivor');

exports.listSurvivors = async (req, res) => {
  try {
    const survivors = await Survivor.find().sort({ name: 1 });
    res.json(survivors);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar sobreviventes.', error: err.message });
  }
};

exports.getSurvivorById = async (req, res) => {
  try {
    const survivor = await Survivor.findById(req.params.id);
    if (!survivor) return res.status(404).json({ message: 'Sobrevivente não encontrado.' });
    res.json(survivor);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar sobrevivente.', error: err.message });
  }
};

exports.createSurvivor = async (req, res) => {
  try {
    const survivor = await Survivor.create(req.body);
    res.status(201).json(survivor);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar sobrevivente.', error: err.message });
  }
};

exports.updateSurvivor = async (req, res) => {
  try {
    const survivor = await Survivor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!survivor) return res.status(404).json({ message: 'Sobrevivente não encontrado.' });
    res.json(survivor);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar sobrevivente.', error: err.message });
  }
};

exports.deleteSurvivor = async (req, res) => {
  try {
    const survivor = await Survivor.findByIdAndDelete(req.params.id);
    if (!survivor) return res.status(404).json({ message: 'Sobrevivente não encontrado.' });
    res.json({ message: 'Sobrevivente removido com sucesso.' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao remover sobrevivente.', error: err.message });
  }
};
