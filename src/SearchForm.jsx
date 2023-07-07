import { useGlobalContext } from "./context";

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const handelSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if(!searchValue) return;
        setSearchTerm(searchValue);
    }
  return (
    <section>
      <h1 className='title'>react images</h1>
      <form className='search-form' onSubmit={handelSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cats'
        />
        <button type="submit"className="btn">search</button>
      </form>
    </section>
  );
};

export default SearchForm;
