import ToDoListItem from "../ToDoListItem/ToDoListItem";

const Completedlist = ({ completedItems, removeFromCompleted }) => {
  return (
    <div>
      <h2> Completed </h2>
      <ul>
        {completedItems.map((item, index) => {
          return (
            <ToDoListItem
              key={index}
              content={item.title}
              buttonText="remove"
              handleClick={() => removeFromCompleted(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Completedlist;
