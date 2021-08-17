import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const FormDemo = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [valid, setValid] = useState(false);
  const options = [
    { value: "Blue", label: "Blue" },
    { value: "Orange", label: "Orange" },
    { value: "Pink", label: "Pink" },
    { value: "White", label: "White" },
    { value: "Black", label: "Black" },
    { value: "Purple", label: "Purple" },
  ];

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const onBlur = () => {
    setValid(true);
    if (name.length === 0) {
      setError("Name is required");
      return;
    }
    setError("");
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("value", selectedOption);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name :</label>
        <input {...register("firstName")} />
        <br></br>
        <br></br>
        <label>gender :</label>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <br></br>
        <br></br>
        <Select
          value={selectedOption}
          options={options}
          onChange={handleChange}
          isMulti
        />
        <br></br>
        <input type="submit" />
      </form>
      <br></br>
      <form>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={onBlur}
        />
        {valid && "Name is required"}
      </form>
    </div>
  );
};

export default FormDemo;
