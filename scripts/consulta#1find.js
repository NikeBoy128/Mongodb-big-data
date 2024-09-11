// CONSULTA PARA ENCONTRAR POR UN ATRIBUTO ESPECÍFICO
db.clientes.find({ "email": "juan.perez@example.com" })
db.facturas.find({ "estado": "pendiente" })