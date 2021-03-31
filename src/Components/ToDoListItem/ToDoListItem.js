const ToDoListItem = ({ content, buttonText, handleClick }) => {
  return (
    <li>
      <span>{content}</span>
      <button onClick={() => handleClick()}>{buttonText}</button>
    </li>
  );
};

export default ToDoListItem;
