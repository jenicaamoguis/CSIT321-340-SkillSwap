package com.skillswap.backend.service;

import com.skillswap.backend.entity.Message;
import com.skillswap.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    public Message getMessageById(Long id) {
        return messageRepository.findById(id).orElse(null);
    }

    public Message createMessage(Message message) {
        return messageRepository.save(message);
    }

    public Message updateMessage(Long id, Message messageDetails) {
        Optional<Message> optionalMessage = messageRepository.findById(id);
        if (optionalMessage.isPresent()) {
            Message message = optionalMessage.get();
            message.setSwapId(messageDetails.getSwapId());
            message.setSenderId(messageDetails.getSenderId());
            message.setMessageText(messageDetails.getMessageText());
            message.setTimestamp(messageDetails.getTimestamp());
            return messageRepository.save(message);
        }
        return null;
    }

    public void deleteMessage(Long id) {
        messageRepository.deleteById(id);
    }
}
