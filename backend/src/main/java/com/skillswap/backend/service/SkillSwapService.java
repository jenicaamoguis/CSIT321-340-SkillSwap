package com.skillswap.backend.service;

import com.skillswap.backend.entity.SkillSwap;
import com.skillswap.backend.repository.SkillSwapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillSwapService {

    @Autowired
    private SkillSwapRepository swapRepository;

    public List<SkillSwap> getAllSwaps() {
        return swapRepository.findAll();
    }

    public SkillSwap getSwapById(Long id) {
        return swapRepository.findById(id).orElse(null);
    }

    public SkillSwap createSwap(SkillSwap swap) {
        return swapRepository.save(swap);
    }

    public SkillSwap updateSwap(Long id, SkillSwap swapDetails) {
        Optional<SkillSwap> optionalSwap = swapRepository.findById(id);
        if (optionalSwap.isPresent()) {
            SkillSwap swap = optionalSwap.get();
            swap.setOffererId(swapDetails.getOffererId());
            swap.setRequesterId(swapDetails.getRequesterId());
            swap.setOfferSkillId(swapDetails.getOfferSkillId());
            swap.setRequestSkillId(swapDetails.getRequestSkillId());
            swap.setStatus(swapDetails.getStatus());
            swap.setStartDate(swapDetails.getStartDate());
            swap.setEndDate(swapDetails.getEndDate());
            return swapRepository.save(swap);
        }
        return null;
    }

    public void deleteSwap(Long id) {
        swapRepository.deleteById(id);
    }
}
