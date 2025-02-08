package com.g24code.products_microservice.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="products")
@Getter
@Setter
@NoArgsConstructor
public class ProductEntity {
    @Id
    private String id;
    private String productName;
    private String productDescription;
    private Double unitPrice;

    @Override
    public String toString() {
        return "ProductEntity{" +
                "id='" + id + '\'' +
                ", productName='" + productName + '\'' +
                ", productDescription='" + productDescription + '\'' +
                ", unitPrice=" + unitPrice +
                '}';
    }

}
