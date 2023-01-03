import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

// type RenderFn = () => void

const useD3 = (renderFn: any, dependencies: Array<any>) => {
  const ref = useRef<HTMLOrSVGElement>()
  
  useEffect(() => {
    renderFn(() => {
      const elParse = ref.current as unknown
      d3.select(elParse as string)
      return () => {}
    })
  })

  return ref
}