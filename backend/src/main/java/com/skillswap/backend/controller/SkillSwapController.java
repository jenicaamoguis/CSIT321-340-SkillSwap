package com.skillswap.backend.controller;

import com.skillswap.backend.entity.SkillSwap;
import com.skillswap.backend.service.SkillSwapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/swaps")
public class SkillSwapController {

    @Autowired
    private SkillSwapService swapService;

    @GetMapping
    public List<SkillSwap> getAllSwaps() {
        return swapService.getAllSwaps();
    }

    @GetMapping("/{id}")
    public SkillSwap getSwapById(@PathVariable Long id) {
        return swapService.getSwapById(id);
    }

    @PostMapping
    public SkillSwap createSwap(@RequestBody SkillSwap swap) {
        return swapService.createSwap(swap);
    }

    @PutMapping("/{id}")
    public SkillSwap updateSwap(@PathVariable Long id, @RequestBody SkillSwap swap) {
        return swapService.updateSwap(id, swap);
    }

    @DeleteMapping("/{id}")
    public void deleteSwap(@PathVariable Long id) {
        swapService.deleteSwap(id);
    }
}
