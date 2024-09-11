db. facturas. updateOne (
    {“id_cliente": "2", "estado": "pendiente”},
    {$set: {“estado": "pagada”} }
  ) 