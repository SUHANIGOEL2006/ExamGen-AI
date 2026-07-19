from fastapi import Depends
from app.auth.auth import get_current_user
from fastapi import APIRouter, HTTPException
from app.models.user import UserSignup, UserLogin
from app.database.database import users_collection
from app.auth.auth import hash_password, verify_password, create_access_token


router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/signup")
def signup(user: UserSignup):

    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    hashed_password = hash_password(user.password)

    users_collection.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hashed_password
    })

    return {
        "message": "User registered successfully"
    }


@router.post("/login")
def login(user: UserLogin):

    db_user = users_collection.find_one(
        {"email": user.email}
    )

    if not db_user:
        raise HTTPException(
            status_code=400,
            detail="Invalid Email"
        )

    if not verify_password(
        user.password,
        db_user["password"]
    ):
        raise HTTPException(
            status_code=400,
            detail="Invalid Password"
        )

    token = create_access_token({
        "email": db_user["email"]
    })

    return {
        "access_token": token,
        "name": db_user["name"]
    }

@router.get("/profile")
def get_profile(
    current_user: str = Depends(get_current_user)
):

    user = users_collection.find_one(
        {"email": current_user},
        {"password": 0}
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    user["_id"] = str(user["_id"])

    return user

@router.put("/profile")
def update_profile(
    data: dict,
    current_user: str = Depends(get_current_user)
):

    users_collection.update_one(
        {"email": current_user},
        {
            "$set": {
                "name": data["name"]
            }
        }
    )

    return {
        "message": "Profile Updated Successfully"
    }