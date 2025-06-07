const db = require('../models');
const path = require('path');
const fs = require('fs');

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const { originalname, mimetype, size, filename } = req.file;

    const file = await db.File.create({
      filename: originalname,
      path: `/uploads/${filename}`,
      mimetype,
      size
    });

    res.redirect('/upload');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading file');
  }
};

const downloadFile = async (req, res) => {
  try {
    const file = await db.File.findByPk(req.params.id);
    if (!file) {
      return res.status(404).send('File not found');
    }

    const filePath = path.join(__dirname, '../public', file.path);
    res.download(filePath, file.filename);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error downloading file');
  }
};


module.exports = {
  uploadFile,
  downloadFile,
 
};