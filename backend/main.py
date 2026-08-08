
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from passlib.context import CryptContext

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Temporary in-memory storage (resets every time the server restarts)
users = []

class SignupRequest(BaseModel):
    name: str
    email: str
    password: str
    blood_group: str

class LoginRequest(BaseModel):
    email: str
    password: str

@app.get("/")
def read_root():
    return {"message": "LifeLink AI backend is running"}

@app.post("/signup")
def signup(user: SignupRequest):
    hashed_password = pwd_context.hash(user.password)

    new_user = {
        "name": user.name,
        "email": user.email,
        "password": hashed_password,
        "blood_group": user.blood_group,
    }
    users.append(new_user)

    return {"message": f"Account created for {user.name}", "total_users": len(users)}

@app.post("/login")
def login(credentials: LoginRequest):
    for user in users:
        if user["email"] == credentials.email:
            if pwd_context.verify(credentials.password, user["password"]):
                return {"message": f"Welcome back, {user['name']}!", "name": user["name"]}
            else:
                raise HTTPException(status_code=401, detail="Incorrect password")

    raise HTTPException(status_code=404, detail="No account found with this email")

@app.get("/users")
def get_users():
    return {"users": users}