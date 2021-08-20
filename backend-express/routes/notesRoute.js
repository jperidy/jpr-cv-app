const express = require('express');
const { getNotes, createOneNote, getOneNote, updateOneNote, deleteOneNote } = require('../controllers/notesController');

const router = express.Router();

router.route('/:id')
    .get(getOneNote)
    .put(updateOneNote)
    .delete(deleteOneNote);

router.route('/')
    .get(getNotes)
    .post(createOneNote);


module.exports = router;
