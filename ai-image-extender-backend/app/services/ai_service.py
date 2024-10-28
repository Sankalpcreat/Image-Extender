import openai
from app.config import setting

openai.api_key=setting.OPENAI_API_KEY


def extend_image(image_path:str,mask_path:str,prompt:str="Extend the image naturally"):

    with open(image_path,'rb') as image_file,open(mask_path,"rb") as mask_file:
        response=openai.Image.create_edit(
            image=image_file,
            mask=mask_file,
            prompt=prompt,
            n=1,
            size="1024x1024" 
        )
        return response['data'][0]['url']