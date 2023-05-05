import React, { useState } from "react";

import { TextInput, TextArea, Button } from "grommet";

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [emailInputError, setEmailInputError] = useState(false);

  const inputNameHandler = (e) => {
    const name = e.target.value;
    setFormData({ ...formData, name });
  };

  const inputEmailHandler = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    !emailPattern.test(email)
      ? setEmailInputError(true)
      : setEmailInputError(false);
  };

  const inputTopicHandler = (e) => {
    const topic = e.target.value;
    setFormData({ ...formData, topic });
  };

  const inputMessageHandler = (e) => {
    const message = e.target.value;
    setFormData({ ...formData, message });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!emailInputError && formData.name && formData.message) {
      console.log(formData);
    } else if (!emailInputError && formData.name) {
      console.log({
        name: formData.name,
        email: formData.email,
        topic: formData.topic,
      });
    } else if (!emailInputError && formData.message) {
      console.log({
        email: formData.email,
        topic: formData.topic,
        message: formData.message,
      });
    } else if (!emailInputError) {
      console.log({ email: formData.email, topic: formData.topic });
    }
  };

  return (
    <div>
      <form className="myForm" onSubmit={formSubmitHandler}>
        <TextInput
          style={{ marginBottom: 10 }}
          name="name"
          type="text"
          placeholder="Ім'я"
          value={formData.name}
          onChange={inputNameHandler}
        />

        <TextInput
          style={{ marginBottom: 10 }}
          name="email"
          type="text"
          placeholder="E-mail*"
          required={true}
          value={formData.email}
          onChange={inputEmailHandler}
        />

        {emailInputError && <p style={{ color: "red" }}>Невалідна пошта</p>}

        <TextInput
          style={{ marginBottom: 10 }}
          name="topic"
          type="text"
          placeholder="Тема*"
          required={true}
          value={formData.topic}
          onChange={inputTopicHandler}
        />

        <div>
          <TextArea
            id="message"
            placeholder="Повідомлення"
            value={formData.message}
            onChange={inputMessageHandler}
          />
        </div>

        <p>Поля відмічені * мають бути обов'язково заповненими</p>

        <div>
          <Button type="submit" label="Відправити" />
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
