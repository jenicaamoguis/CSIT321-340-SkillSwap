package com.skillswap.backend.service;

import com.skillswap.backend.entity.SkillOffer;
import com.skillswap.backend.repository.SkillOfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillOfferService {

    @Autowired
    private SkillOfferRepository offerRepository;

    public List<SkillOffer> getAllOffers() {
        return offerRepository.findAll();
    }

    public SkillOffer getOfferById(Long id) {
        return offerRepository.findById(id).orElse(null);
    }

    public SkillOffer createOffer(SkillOffer offer) {
        return offerRepository.save(offer);
    }

    public SkillOffer updateOffer(Long id, SkillOffer offerDetails) {
        Optional<SkillOffer> optionalOffer = offerRepository.findById(id);
        if (optionalOffer.isPresent()) {
            SkillOffer offer = optionalOffer.get();
            offer.setUserId(offerDetails.getUserId());
            offer.setSkillId(offerDetails.getSkillId());
            offer.setDescription(offerDetails.getDescription());
            offer.setAvailability(offerDetails.getAvailability());
            offer.setStatus(offerDetails.getStatus());
            return offerRepository.save(offer);
        }
        return null;
    }

    public void deleteOffer(Long id) {
        offerRepository.deleteById(id);
    }
}
