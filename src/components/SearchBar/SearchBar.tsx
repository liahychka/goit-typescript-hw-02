import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FormEvent } from "react";

const SearchBar = ({ onSubmit }: { onSubmit: (query: string) => void }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = (form.elements.namedItem("query") as HTMLInputElement).value.trim();
    if (!query) {
      const notify = () =>
        toast("Enter search query!", {
          duration: 3000,
          position: "top-center",
          style: { marginTop: 100 },
          icon: "👀",
        });
      notify();

      return;
    }
    onSubmit(query);
    form.reset();
  };
  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.boxInput}>
            <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          />      
         <button className={css.btn} type="submit">
          Search
        </button>         
        </div>


      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;

