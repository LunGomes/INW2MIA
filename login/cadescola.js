//configura a conexão com o mongodb e o banco de dados

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 20000
});

const db = mongoose.connection;

db.on('error ', console.error.bind(console, 'connection error: '));

db.once('open', function(){
    console.log("Estamos conectados ao mongoDB");
});


//criando uma collection dentro do mongodb

const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
});

const Aluno = mongoose.model("Aluno", alunoSchema);

const Paulo = new Aluno({
    matricula : 'rm201',
    nome : "Paulo da Silva",
    idade : 18,
    turma : '2MIA'
});

const Maria = new Aluno({
    matricula : 'rm202',
    nome : "Maria Carla",
    idade : 15,
    turma : '2MIA'
});

Paulo.save();
Maria.save();

Aluno.findOne({nome : 'Maria Carla'},function(err, Aluno){
    console.log(Aluno);
});