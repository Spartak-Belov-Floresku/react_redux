import { useState } from "react";
import {v4} from "uuid";
import './FormMeme.css';

const DEFAULT_FORM = {
  url: "",
  topText: "",
  bottomText: ""
};

const FormMeme = ({ createMeme }) => {
  const [form, setForm] = useState(DEFAULT_FORM);

  const handleSubmit = (e) => {
    e.preventDefault();
    createMeme({ ...form, id: v4() });
    setForm(DEFAULT_FORM);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <h2>Make a New Meme</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Image URL</label>
        <input
          type="text"
          name="url"
          id="form_url"
          onChange={handleChange}
          value={form.url}
        />
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          id="form_topText"
          onChange={handleChange}
          value={form.topText}
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="form_bottomText"
          onChange={handleChange}
          value={form.bottomText}
        />
        <button type="submit" id="form_submit">
          Generate Meme!
        </button>
      </form>
    </div>
  );
}

export default FormMeme;
