package com.example.demo.service;

import com.example.demo.dto.RegisterUserDTO;
import com.example.demo.dto.UserResponseDTO;
import com.example.demo.entity.Cart;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;


    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;

    }

    public List<UserResponseDTO> getAllUser(){
        List<User> users = userRepository.findAll();

        return users.stream()
                .map(user -> new UserResponseDTO(
                        user.getId(),
                        user.getFirstName(),
                        user.getLastName(),
                        user.getEmail()
                ))
                .toList();

    }

    public UserResponseDTO registerUser(RegisterUserDTO registerUserDTO){
        User user = new User();
        Cart cart = new Cart();

        user.setFirstName(registerUserDTO.firstName());
        user.setLastName(registerUserDTO.lastName());
        user.setEmail(registerUserDTO.email());
        user.setPassword(registerUserDTO.password());
        user.setRole(Role.USER);

        user.setCart(cart);
        User saved = userRepository.save(user);


        return new UserResponseDTO(
                saved.getId(),
                saved.getFirstName(),
                saved.getLastName(),
                saved.getEmail()
        );
    }

}
