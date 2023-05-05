import { useDispatch, useSelector } from "react-redux";

// redux toolkit
import { useEffect, useState } from "react";
import {
  increment,
  decrement,
  addUser,
  removeUser,
} from "../toolkitRedux/createSlice";
import { fetchUsers } from "../store/actions/users";

const Lesson10 = () => {
  // redux toolkit
  const counter = useSelector((state) => state.toolkit.counter);
  const users = useSelector((state) => state.toolkit.users);

  const [addUsers, setAddUsers] = useState(false);
  const dispatch = useDispatch();

  console.log(Math.floor(Math.random() * 1000));

  useEffect(() => {
    addUsers && dispatch(fetchUsers());
    setAddUsers(false);
  }, [addUsers]);

  return (
    <div>
      <div>
        <br />
        Counter: {counter}
        <button onClick={() => dispatch(increment())}>Increase counter</button>
        <button onClick={() => dispatch(decrement())}>Decrease counter</button>
      </div>

      <div>
        <button
          onClick={() =>
            dispatch(addUser({ name: `Petya ${Date.now()}`, id: Date.now() }))
          }
        >
          Add user
        </button>

        <button onClick={() => setAddUsers(true)}>
          Add users from fakeAPI
        </button>

        {users.length ? (
          <div>
            <h3>Users</h3>
            {users.map((user) => (
              <div
                key={user.id + Math.random()}
                onClick={() => dispatch(removeUser(user.id))}
              >
                {user.name}
              </div>
            ))}
          </div>
        ) : (
          <div>Нікого немає вдома</div>
        )}
      </div>
    </div>
  );
};
export { Lesson10 };
