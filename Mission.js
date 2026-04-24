const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema(
  {
    campaign: {
      type: String,
      required: true,
      trim: true,
      enum: [
        'Dead Center',
        'Dark Carnival',
        'Swamp Fever',
        'Hard Rain',
        'The Parish',
        'The Passing',
        'The Sacrifice',
        'Cold Stream',
        'No Mercy',
        'Crash Course',
        'Death Toll',
        'Dead Air',
        'Blood Harvest',
        'The Last Stand'
      ]
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['Easy', 'Normal', 'Advanced', 'Expert']
    },
    survivors: [{ type: String, trim: true }],
    notes: { type: String, trim: true, default: '' },
    completed: { type: Boolean, default: false },
    deaths: { type: Number, default: 0, min: 0 },
    playedAt: { type: Date, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Mission', missionSchema);
