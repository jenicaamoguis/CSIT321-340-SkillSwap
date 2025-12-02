package com.skillswap.backend.service;

import com.skillswap.backend.entity.SkillRequest;
import com.skillswap.backend.repository.SkillRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillRequestService {

    @Autowired
    private SkillRequestRepository requestRepository;

    public List<SkillRequest> getAllRequests() {
        return requestRepository.findAll();
    }

    public SkillRequest getRequestById(Long id) {
        return requestRepository.findById(id).orElse(null);
    }

    public SkillRequest createRequest(SkillRequest request) {
        return requestRepository.save(request);
    }

    public SkillRequest updateRequest(Long id, SkillRequest requestDetails) {
        Optional<SkillRequest> optionalRequest = requestRepository.findById(id);
        if (optionalRequest.isPresent()) {
            SkillRequest request = optionalRequest.get();
            request.setUserId(requestDetails.getUserId());
            request.setSkillId(requestDetails.getSkillId());
            request.setMessage(requestDetails.getMessage());
            request.setStatus(requestDetails.getStatus());
            return requestRepository.save(request);
        }
        return null;
    }

    public void deleteRequest(Long id) {
        requestRepository.deleteById(id);
    }
}
