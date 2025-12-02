package com.skillswap.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "skill_swaps")
public class SkillSwap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long swapId;

    private Long offererId;
    private Long requesterId;
    private Long offerSkillId;
    private Long requestSkillId;
    private String status;
    private LocalDateTime startDate;
    private LocalDateTime endDate;

    public SkillSwap() {}

    // Getters and setters
    public Long getSwapId() { return swapId; }
    public void setSwapId(Long swapId) { this.swapId = swapId; }
    public Long getOffererId() { return offererId; }
    public void setOffererId(Long offererId) { this.offererId = offererId; }
    public Long getRequesterId() { return requesterId; }
    public void setRequesterId(Long requesterId) { this.requesterId = requesterId; }
    public Long getOfferSkillId() { return offerSkillId; }
    public void setOfferSkillId(Long offerSkillId) { this.offerSkillId = offerSkillId; }
    public Long getRequestSkillId() { return requestSkillId; }
    public void setRequestSkillId(Long requestSkillId) { this.requestSkillId = requestSkillId; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public LocalDateTime getStartDate() { return startDate; }
    public void setStartDate(LocalDateTime startDate) { this.startDate = startDate; }
    public LocalDateTime getEndDate() { return endDate; }
    public void setEndDate(LocalDateTime endDate) { this.endDate = endDate; }
}
