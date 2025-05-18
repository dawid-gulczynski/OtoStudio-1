
const Studio = require('../models/studio');

async function getAllStudios() {
    return await Studio.findAll();
}

async function getStudioById(id) {
  return await Studio.findByPk(id);
}

async function createStudio(data) {
    return await Studio.create(data);
}

async function updateStudio(id, data) {
    const [updated] = await Studio.update(data, { where: { id } });
    return updated;
}

async function deleteStudio(id) {
    return await Studio.destroy({ where: { id } });
}

module.exports = {
    getAllStudios,
    getStudioById,
    createStudio,
    updateStudio,
    deleteStudio
};
