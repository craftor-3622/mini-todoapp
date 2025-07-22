from sqlalchemy import Integer, String, Boolean, DateTime, func, ForeignKey
from sqlalchemy.orm import mapped_column, relationship
from database import Base

class User(Base):
    __tablename__ = "users"

    id = mapped_column(Integer, primary_key=True, index=True)
    username = mapped_column(String, unique=True)
    email = mapped_column(String, unique=True)
    password = mapped_column(String)
    is_active = mapped_column(Boolean, default=True)
    created_at = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at = mapped_column(DateTime(timezone=True), onupdate=func.now(), server_onupdate=func.now())

    todos = relationship("Todo", back_populates="user", cascade="all, delete-orphan")


class Todo(Base):
    __tablename__ = "todos"

    id = mapped_column(Integer, primary_key=True, index=True)
    content = mapped_column(String, index=True)
    isDone = mapped_column(Boolean, index=True)
    user_id = mapped_column(ForeignKey("users.id"), nullable=False)
    created_at = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at = mapped_column(DateTime(timezone=True), onupdate=func.now(), server_onupdate=func.now())

    user = relationship("User", back_populates="todos")
