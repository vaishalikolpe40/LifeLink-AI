from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "LifeLink AI backend is running"}