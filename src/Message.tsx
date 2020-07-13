import React from 'react';
import MessageHOC from './HOC';

interface UserMessage {
  name: string;
  message: string;
}

const example = (props: UserMessage ): any => <p>{props.name} {props.message}</p>

const Message = MessageHOC(example)

export default Message;