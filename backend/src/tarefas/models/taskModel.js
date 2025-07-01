const mongoose = require('mongoose');
const moment = require('moment-timezone');

//fuso horario pertinho daqui
const timezone = 'America/Recife';

const tarefasSchema = new mongoose.Schema({
    titulo: {
       type: String,
       required: [true, 'O titulo é obrigatorio'],
       trim: true,
       minlenght: [3, 'O titulo deve ter pelo menos 3 caracteres.'],
       maxlenght: [100, 'O titulo deve ter no maximo 100 caracteres.'] 
    },
})