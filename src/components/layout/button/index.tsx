import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { Button as MaterialButton } from '@material-ui/core';

interface Props {
  configuration: {
    title: String;
    url?: String;
    path?: String;
    type: String;
  };
}

const Colors = ['inherit', 'default', 'primary', 'secondary'];

export const CustomButton = ({ configuration }: Props) => {
  const { title, path, url, type } = configuration;

  // Instance of Button class
  const button = new Button(
    url as String,
    path as String,
    title as String,
    type as String
  );
  const propsCheck = button.propsAreNotEmpty();

  if (propsCheck) {
    // Send a error console when the button has no path and url props.
    console.error(
      'We can not create this button because the path and url are empty.'
    );
  }

  const { propPath } = button.getPropToRedirect();

  // Generate button with a specific type
  return (
    <div>
      {propPath
        ? buttonWithPath(button.getTitle(), button.getPath(), button.getType())
        : buttonWithUrl(button.getTitle(), button.getUrl())}
    </div>
  );
};

// Button builders functions
function buttonWithPath(title: String, path: String, type: String) {
  return (
    <Link to={`${path}`}>
      <MaterialButton variant='contained' style={{color: Colors[type as any]}}>
        {title}
      </MaterialButton>
    </Link>
  );
}

function buttonWithUrl(title: String, url: String) {
  return (
    <a target='_blank' rel='noreferrer' href={`${url}`}>
      {title}
    </a>
  );
}
