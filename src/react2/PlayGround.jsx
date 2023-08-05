/* eslint-disable react/prop-types */
import { useState } from "react";
import userList from "./userList";

//1- form
export default function UserList() {
  const [form, setForm] = useState({
    filterText: "",
    sort: "",
  });

  return (
    <div>
      <Header form={form} setForm={setForm} />
      <List form={form} />
    </div>
  );
}

function Header({ form, setForm }) {
  const { filterText, sort } = form;

  const inputHandler = (event) => {
    setForm({ ...form, filterText: event.target.value });
  };

  const inputHandlerSort = (event) => {
    setForm({ ...form, sort: event.target.value });
  };

  return (
    <div>
      <div className="mt-8">
        <label className="mr-2 "> search: </label>
        <input className="rounded-md p-4" onInput={inputHandler} />
      </div>

      <div>
        <label className="mr-2 "> sort: </label>
        <select
          className="rounded-md p-4 mt-8"
          value={sort}
          onInput={inputHandlerSort}
        >
          <option value="username"> Username</option>
          <option value="date"> Date</option>
        </select>
      </div>
    </div>
  );
}

function List({ form }) {
  const { filterText, sort } = form;

  return (
    <div>
      <div className="flex flex-col gap-4 mt-4">{filterText}</div>

      <div className="flex flex-col gap-4 mt-4 p-8">
        {/* {testList.map((text) => (
          <p> {text} </p>
        ))} */}

        {userList
          .sort((user1, user2) => (user1[sort] < user2[sort] ? 1 : -1))
          .filter((user) => user.username.includes(filterText))
          .map((user) => (
            <Card key={user.username} user={user} />
          ))}
      </div>
    </div>
  );
}

function Card({ user }) {
  return (
    <div className="flex  gap-4 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="rounded-s-3xl bg-slate-500 w-16">{user.name[0]}</div>
      <div className="flex-1">{user.username}</div>
      <div className="rounded-e-3xl bg-slate-500 px-4">
        {new Date(user.date).toLocaleDateString("fa-ir")}
      </div>
    </div>
  );
}
