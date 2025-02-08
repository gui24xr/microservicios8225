import axios from 'axios'
import { getServiceInstances } from './eurekaserver.js'

export async function getProductsInfo(productId){
    const instances = await getServiceInstances('PRODUCTS-MICROSERVICE')
    if (instances.length === 0) {
        throw new Error('No hay instancias disponibles de product-service');
      }
    console.log('Array de instancias: ', instances)
    // Seleccionar la primera instancia (puedes implementar balanceo de carga aquí)
    const instance = instances[0];
    const baseUrl = `http://${instance.hostName}:${instance.port.$}`;

    try {
        const response = await axios.get(`${baseUrl}/api/products/${productId}`);
        return response.data;
      } catch (error) {
        console.error('Error al obtener información del producto:', error);
        throw error;
      }
}