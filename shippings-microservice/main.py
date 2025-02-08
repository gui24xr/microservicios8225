from fastapi import FastAPI
import py_eureka_client.eureka_client as eureka_client

# Crear una instancia de FastAPI
app = FastAPI()

# Configurar el cliente Eureka
eureka_client.init(
    eureka_server="http://localhost:8761/eureka", # URL del servidor Eureka
    app_name="shippings-service", # Nombre de tu servicio
    instance_port=5000, # Puerto de tu servicio
    instance_host="localhost" # Host de tu servicio
)

# Definir un endpoint de ejemplo
@app.get("/")
def read_root():
    return {"message": "¡Hola desde el microservicio de envios!"}

