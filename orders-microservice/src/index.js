import { app } from "./app.js";
import { eurekaClient } from "./eurekaserver.js";
const PORT = process.env.PORT || 8084


app.listen(PORT,()=>{
    console.log(`Server corriendo en port ${PORT} `)
    
    eurekaClient.start((error) => {
        if (error) {
          console.log('Error al registrar el servicio en Eureka:', error);
        } else {
          console.log('Servicio registrado en Eureka correctamente');
        }
      })
})

process.on('SIGINT', () => {
    eurekaClient.stop();
    process.exit();
  });