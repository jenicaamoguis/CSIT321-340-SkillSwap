// SkillOfferRepository.java
package com.skillswap.backend.repository;

import com.skillswap.backend.entity.SkillOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillOfferRepository extends JpaRepository<SkillOffer, Long> {
}
