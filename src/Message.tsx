import React from 'react';

const Message = (props: { message: string }): any => {
  return (
    <p>{props.message}</p>
  )
}

export default Message;