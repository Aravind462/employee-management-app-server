const jsonServer = require('json-server')

const employeeServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = 3000
const route = jsonServer.router('db.json')

employeeServer.use(middleware)
employeeServer.use(route)

employeeServer.listen(PORT,()=>{
    console.log(`Employee Server started at PORT : ${PORT} and waiting for client requests!!!`);
})