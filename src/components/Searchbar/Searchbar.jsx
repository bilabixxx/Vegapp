import './SearchBar.css';

const SearchBar = (props) => {
    return (

        <div className='m-5'>
            <form onSubmit={props.getSearch} className='search-form'>
                <input className='search-bar btn p-3 search-bar' type='text' value={props.search} onChange={props.updateSearch} />
                <button className=' btn p-3 search-btn' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar