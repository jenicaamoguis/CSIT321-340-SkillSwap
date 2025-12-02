package com.skillswap.backend.controller;

import com.skillswap.backend.entity.SkillRequest;
import com.skillswap.backend.service.SkillRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/requests")
public class SkillRequestController {

    @Autowired
    private SkillRequestService requestService;

    @GetMapping
    public List<SkillRequest> getAllRequests() {
        return requestService.getAllRequests();
    }

    @GetMapping("/{id}")
    public SkillRequest getRequestById(@PathVariable Long id) {
        return requestService.getRequestById(id);
    }

    @PostMapping
    public SkillRequest createRequest(@RequestBody SkillRequest request) {
        return requestService.createRequest(request);
    }

    @PutMapping("/{id}")
    public SkillRequest updateRequest(@PathVariable Long id, @RequestBody SkillRequest request) {
        return requestService.updateRequest(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteRequest(@PathVariable Long id) {
        requestService.deleteRequest(id);
    }
}
