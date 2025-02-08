package com.g24code.products_microservice.controller;

import com.g24code.products_microservice.entity.ProductEntity;
import com.g24code.products_microservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ProductEntity> getAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping("/{id}") // Captura el ID de la URL
    @ResponseStatus(HttpStatus.OK)
    public ProductEntity getProductById(@PathVariable String id) { // Usa @PathVariable para obtener el ID
        return productRepository.findById(id)
                .orElseThrow(() ->  new IllegalArgumentException("Producto no encontrado con ID: " + id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void createProduct(@RequestBody ProductEntity productEntity){
        System.out.print(productEntity);
        productRepository.save(productEntity);
    }
}
