package com.example.demo.controller;

import com.example.demo.dto.RegisterUserDTO;
import com.example.demo.dto.UserResponseDTO;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("users")
    public List<UserResponseDTO> getAllUser(){
        return userService.getAllUser();
    }

    @PostMapping("users")
    public UserResponseDTO registerUser(@RequestBody RegisterUserDTO registerUserDTO){
        return userService.registerUser(registerUserDTO);
    }
}
