from pydantic import BaseModel, EmailStr
from fastapi import Form
from typing import Optional
from datetime import datetime

# User schemas for API requests and responses

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    password_confirm: str

class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    password: str

class UserInfo(BaseModel):
    id: int
    username: str
    email: EmailStr
    is_active: bool

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

# Todo schemas for API requests and responses

class TodoBase(BaseModel):
    content: str

class TodoCreate(TodoBase):
    pass

class TodoUpdate(BaseModel):
    isDone: Optional[bool]

class TodoDetail(TodoBase):
    id: int
    isDone: bool
    user_id: int
    created_at: datetime
    updated_at: Optional[datetime]

class UserTodoInfo(TodoBase):
    id: int
    isDone: bool
    created_at: datetime
    updated_at: Optional[datetime]

    class Config:
        orm_mode = True
