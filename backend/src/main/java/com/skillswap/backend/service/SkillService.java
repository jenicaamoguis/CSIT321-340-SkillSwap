package com.skillswap.backend.service;

import com.skillswap.backend.entity.Skill;
import com.skillswap.backend.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    public Skill getSkillById(Long id) {
        return skillRepository.findById(id).orElse(null);
    }

    public Skill createSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    public Skill updateSkill(Long id, Skill skillDetails) {
        Optional<Skill> optionalSkill = skillRepository.findById(id);
        if (optionalSkill.isPresent()) {
            Skill skill = optionalSkill.get();
            skill.setName(skillDetails.getName());
            skill.setCategory(skillDetails.getCategory());
            skill.setDescription(skillDetails.getDescription());
            return skillRepository.save(skill);
        }
        return null;
    }

    public void deleteSkill(Long id) {
        skillRepository.deleteById(id);
    }
}
