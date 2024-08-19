"use client";

import React, { MouseEventHandler, useState } from 'react'

const ToggleCollapseButton = ({target}:{target:string}) => {
 
  const [collapsed, setCollapsed] = useState(false)
 
  return (
    <>
      <button className="btn btn-primary" type="button" onClick={() => setCollapsed(!collapsed)} data-bs-toggle="collapse" data-bs-target={"#"+target} aria-expanded="false" aria-controls={target}>
        Show {collapsed ? "less" : "more"}
      </button>
    </>
  )
}

export default ToggleCollapseButton