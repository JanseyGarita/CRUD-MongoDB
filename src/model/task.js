//Aqui se define el esquema de la base de datos para controlar que los documentos a insertar
//Cumplan con la estructura deseada

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//El esquema se compone de un titulo de la tarea y una descripcion
const TaskSchema = Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});
//Exportamos el objeto TaskSchema para poder usuarlo en otros archivos
module.exports = mongoose.model('tasks', TaskSchema);
