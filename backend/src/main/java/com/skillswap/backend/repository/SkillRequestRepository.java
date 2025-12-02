// SkillRequestRepository.java
package com.skillswap.backend.repository;

import com.skillswap.backend.entity.SkillRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRequestRepository extends JpaRepository<SkillRequest, Long> {
}
