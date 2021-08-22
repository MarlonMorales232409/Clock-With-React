import React from 'react';

export function StartTickTack(props){
    return (
      <button onClick={props.start}>Iniciar</button>
    )
  }

  export function StopTickTack(props){
    return (
      <button onClick={props.stop}>Detener</button>
    )
  }