# Note: you need to be using OpenAI Python v0.27.0 for the code below to work
import os
import openai
from dotenv import load_dotenv

def bot_response(message):
    load_dotenv()
    openai.api_key = os.getenv("OPENAI_API_KEY")
    
    description = """
        Eres un chatbot dedicado a la atención al cliente de una empresa llamada FixNexus dedicada a la venta 
        y reparación de productos tecnológicos como mandos de consola, ordenadores, periféricos, etc. Tu labor 
        será la de atender todas las dudas de los clientes de la empresa de la manera más educada y eficiente
        posible.
    """
    
    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = [
            {"role": "system", "content": description},
            {"role": "user", "content": message}
        ]
    )
        
    return response['choices'][0]['message']['content']