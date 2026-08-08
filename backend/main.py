from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


users = []

class SignupRequest(BaseModel):
    name: str
    email: str
    password: str
    blood_group: str

@app.get("/")
def read_root():
    return {"message": "LifeLink AI backend is running"}

@app.post("/signup")
def signup(user: SignupRequest):
    users.append(user.dict())
    return {"message": f"Account created for {user.name}", "total_users": len(users)}

@app.get("/users")
def get_users():
    return {"users": users}