
const studioService = require('../services/studioService');

async function getStudios(req, res) {
    const studios = await studioService.getAllStudios();
    res.json(studios);
}

async function getStudioById(req, res) {
  const studio = await studioService.getStudioById(req.params.id);
  if (!studio) return res.status(404).json({ message: "Nie znaleziono" });
  res.json(studio);
}


async function addStudio(req, res) {
    const newStudio = await studioService.createStudio(req.body);
    res.status(201).json(newStudio);
}

async function updateStudio(req, res) {
    const updated = await studioService.updateStudio(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Nie znaleziono' });
    res.json({ message: 'Zaktualizowano' });
}

async function deleteStudio(req, res) {
    const deleted = await studioService.deleteStudio(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Nie znaleziono' });
    res.status(204).end();
}

module.exports = {
    getStudios,
    getStudioById,
    addStudio,
    updateStudio,
    deleteStudio
};
