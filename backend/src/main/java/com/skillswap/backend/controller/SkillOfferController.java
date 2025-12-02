package com.skillswap.backend.controller;

import com.skillswap.backend.entity.SkillOffer;
import com.skillswap.backend.service.SkillOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/offers")
public class SkillOfferController {

    @Autowired
    private SkillOfferService offerService;

    @GetMapping
    public List<SkillOffer> getAllOffers() {
        return offerService.getAllOffers();
    }

    @GetMapping("/{id}")
    public SkillOffer getOfferById(@PathVariable Long id) {
        return offerService.getOfferById(id);
    }

    @PostMapping
    public SkillOffer createOffer(@RequestBody SkillOffer offer) {
        return offerService.createOffer(offer);
    }

    @PutMapping("/{id}")
    public SkillOffer updateOffer(@PathVariable Long id, @RequestBody SkillOffer offer) {
        return offerService.updateOffer(id, offer);
    }

    @DeleteMapping("/{id}")
    public void deleteOffer(@PathVariable Long id) {
        offerService.deleteOffer(id);
    }
}
