//consulta 2: Actualizar el teléfono del cliente con email "
db.clientes.updateOne(
    { "email": "juan.perez@example.com" },
    { $set: { "teléfono": "+54123456789" } }
  )
  