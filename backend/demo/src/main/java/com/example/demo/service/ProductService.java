package com.example.demo.service;

import com.example.demo.dto.ProductRequestDTO;
import com.example.demo.dto.ProductResponseDTO;
import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;


    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    public List<ProductResponseDTO> getAllProduct(){
        List<Product> products = productRepository.findAll();

        return products.stream().map(product -> new ProductResponseDTO(
                product.getId(),
                product.getProductName(),
                product.getPriceCents(),
                product.getDescription(),
                product.getImgUrl()
                )).toList();
    }

    public ProductResponseDTO addProduct(ProductRequestDTO productRequestDTO){
        Product product = new Product();
        product.setProductName(productRequestDTO.productName());
        product.setPriceCents(productRequestDTO.priceCents());
        product.setDescription(productRequestDTO.description());
        product.setImgUrl(productRequestDTO.imgUrl());
        Product save = productRepository.save(product);

        return new ProductResponseDTO(
                save.getId(),
                save.getProductName(),
                save.getPriceCents(),
                save.getDescription(),
                save.getImgUrl()
        );

    }
}
