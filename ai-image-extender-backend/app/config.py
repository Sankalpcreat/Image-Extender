import os
from dotenv import load_dotenv


load_dotenv()

class Setting:
    OPENAI_API_KEY=os.getenv("OPENAI_API_KEY")


setting=Setting()