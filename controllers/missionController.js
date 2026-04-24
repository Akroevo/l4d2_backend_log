const Mission = require('../models/Mission');

exports.listMissions = async (req, res) => {
  try {
    const missions = await Mission.find().sort({ playedAt: -1 });
    res.json(missions);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar missões.', error: err.message });
  }
};

exports.getMissionById = async (req, res) => {
  try {
    const mission = await Mission.findById(req.params.id);
    if (!mission) return res.status(404).json({ message: 'Missão não encontrada.' });
    res.json(mission);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar missão.', error: err.message });
  }
};

exports.createMission = async (req, res) => {
  try {
    const mission = await Mission.create(req.body);
    res.status(201).json(mission);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar missão.', error: err.message });
  }
};

exports.updateMission = async (req, res) => {
  try {
    const mission = await Mission.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!mission) return res.status(404).json({ message: 'Missão não encontrada.' });
    res.json(mission);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar missão.', error: err.message });
  }
};

exports.deleteMission = async (req, res) => {
  try {
    const mission = await Mission.findByIdAndDelete(req.params.id);
    if (!mission) return res.status(404).json({ message: 'Missão não encontrada.' });
    res.json({ message: 'Missão removida com sucesso.' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao remover missão.', error: err.message });
  }
};
