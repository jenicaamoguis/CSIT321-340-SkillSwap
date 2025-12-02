// SkillRepository.java
package com.skillswap.backend.repository;

import com.skillswap.backend.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
}
