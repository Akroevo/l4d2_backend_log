const mongoose = require('mongoose');

const survivorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    nickname: { type: String, trim: true, default: '' },
    role: {
      type: String,
      required: true,
      enum: ['Scout', 'Medic', 'Explosives Expert', 'Heavy Gunner', 'All-rounder']
    },
    status: {
      type: String,
      required: true,
      enum: ['Alive', 'Incapacitated', 'Dead', 'Unknown'],
      default: 'Alive'
    },
    kills: { type: Number, default: 0, min: 0 },
    rescues: { type: Number, default: 0, min: 0 },
    bio: { type: String, trim: true, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Survivor', survivorSchema);
