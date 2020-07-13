import React from 'react';

interface UserMessage {
  name: string;
  message: string;
}

const Message = (props: UserMessage ): any => {
  return (
    <p>{props.name} {props.message}</p>
  )
}

export default Message;