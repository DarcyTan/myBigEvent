module.exports = (sql,params=null)=>{
      const mysql = require('mysql');
      const conn = mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'root',
          port:3306,
          database:'mybigevent'
      });
      conn.connect();
     
       return new Promise((resolve,reject)=> {
           conn.query(sql,params,(err, result)=> {
               err ? reject(err): resolve(result);
           })
           conn.end();
       }).catch((err) => {
           console.log(err.sqlMessage);
       })
}