package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record ProductRequestDTO(
        @NotBlank String productName,
        @Positive int priceCents,
        @Size(max = 1000) String description,
        String imgUrl) {

}
