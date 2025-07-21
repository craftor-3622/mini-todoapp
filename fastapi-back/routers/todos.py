from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from models import Todo
from schemas import TodoCreate, UserTodoInfo, TodoUpdate, TodoDetail
from dependencies import get_current_user
from models import User

router = APIRouter(prefix="/todos", tags=["Todos"])

@router.post("/", response_model=TodoDetail, status_code=status.HTTP_201_CREATED)
def create_todo(todo: TodoCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    new_todo = Todo(
        content=todo.content,
        isDone=False,
        user_id=current_user.id
    )
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo

@router.get("/", response_model=List[UserTodoInfo])
def list_todo(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query(Todo).filter(user_id=current_user.id)

@router.put("/{todo_id}/", response_model=TodoUpdate)
def update_todo(todo_id: int, update: TodoUpdate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    todo = db.query(Todo).filter(Todo.id == todo_id).first()
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    if todo.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to update this todo")
    
    if update.content is not None:
        todo.content = update.content
    if update.isDone is not None:
        todo.isDone = update.isDone

    db.commit()
    db.refresh(todo)
    return todo

@router.delete("/{thread_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_todo(thread_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    todo = db.query(Todo).filter(Todo.id == thread_id).first()
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    if todo.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to delete this todo")

    db.delete(todo)
    db.commit()
    return
