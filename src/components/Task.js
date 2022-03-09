import React, { useState } from 'react'

export default function Task({
  name,
  done,
  onCheckHandler,
  id,
  deleteHandler,
}) {
  return (
    <div>
      <div className={'todo-item ' + (done ? 'complete' : '')}>
        <div className="checker">
          <span className="">
            <input
              type="checkbox"
              checked={done}
              onChange={(e) => onCheckHandler(id, e.target.checked)}
            />
          </span>
        </div>
        <span>{name}</span>

        <i className="icon-close">
          <button
            onClick={() => deleteHandler(id)}
            className="btn btn-danger btn-sm float-right "
          >
            X
          </button>
        </i>
      </div>
    </div>
  )
}
