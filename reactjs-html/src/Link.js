import React from 'react'

const useState = React.useState;

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const Link = ({page, children}) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children || 'default'}
    </a>
  );
};

export default Link;