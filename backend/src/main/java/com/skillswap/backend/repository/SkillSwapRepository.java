// SkillSwapRepository.java
package com.skillswap.backend.repository;

import com.skillswap.backend.entity.SkillSwap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillSwapRepository extends JpaRepository<SkillSwap, Long> {
}
