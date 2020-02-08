import React from "react";
import "./style.css";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book or Author</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Type for a book name or author"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-warning btn-block "
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
