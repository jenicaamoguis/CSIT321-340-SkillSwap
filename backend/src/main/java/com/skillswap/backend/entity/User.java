package com.skillswap.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String fullName;
    private String email;
    private String password;
    private String school;
    private Double rating;
    private LocalDate dateJoined;

    public User() {}

    public User(String fullName, String email, String password, String school) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.school = school;
        this.rating = 0.0;
        this.dateJoined = LocalDate.now();
    }

    // Getters and setters
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getSchool() { return school; }
    public void setSchool(String school) { this.school = school; }
    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }
    public LocalDate getDateJoined() { return dateJoined; }
    public void setDateJoined(LocalDate dateJoined) { this.dateJoined = dateJoined; }
}
