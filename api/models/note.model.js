const mongoose = require('mongoose');
const Schema = require('../config').Schema;

const NoteSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Note', NoteSchema);
