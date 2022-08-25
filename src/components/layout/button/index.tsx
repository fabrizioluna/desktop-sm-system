import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';

interface Props {
  configuration: {
    title: String;
    url?: String;
    path?: String;
    // componentRender: any;
  };
}

export const CustomButton = ({ configuration }: Props) => {
  const { title, path, url } = configuration;

  // Instance of Button class
  const button = new Button(path as String, url as String, title as String);

  // Check Props
  const propsCheck = button.propsAreNotEmpty();

  if (!propsCheck) {
    console.error(
      'We can not create this button because the path and url are empty.'
    );
  }

  const { path: propPath } = button.getPropToRedirect();
  return (
    <div>
      {propPath
        ? buttonWithPath(button.getTitle(), button.getPath())
        : buttonWithUrl(button.getTitle(), button.getPath())}
    </div>
  );
};

function buttonWithPath(title: String, path: String) {
  return (
    <Link to={`${path}`}>
      <button>{title}</button>
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
