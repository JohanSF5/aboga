let mysql = require('mysql');

let connection = mysql.createConnection({
    //variables de Conexión
    host :'localhost',
    user :'root',
    password :'',
    database : 'ventas'
});

connection.connect(
    (err)=>{
        if(!err){
        console.log('Conexión exitosa');
        }else{
        console.log('Error de conexión');
        }
    }
);

module.exports=connection;

/*connection.query("SELECT * FROM tblproductos", function (err, resultado) {
    console.log(resultado)
});

connection.end();*/