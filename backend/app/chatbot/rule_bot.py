def rule_bot_response(message: str) -> str:
    message = message.lower()
    if "hello" in message or "hi" in message:
        return "Hello! How can I assist you today?"
    elif "help" in message:
        return "No. Help yourself. Don't rely on me for every single task. Have some self confidence."
    elif "bye" in message:
        return "Goodbye! Have a great day!"
    else:
        return "I'm not sure how to respond to that. Can you please rephrase?"