import { Eureka } from "eureka-js-client";

export const eurekaClient = new Eureka({
    instance:{
        app: 'orders-microservice',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port:{
            '$': 8084, 
            '@enabled': true,
        },
        vipAddress: 'orders-microservice',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn', // Nombre del data center
          }
    },
    eureka:{
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/'
    }
})


export async function getServiceInstances(serviceName){
    return eurekaClient.getInstancesByAppId(serviceName.toUpperCase())
}