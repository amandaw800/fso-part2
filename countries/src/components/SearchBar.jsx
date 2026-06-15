const SearchBar = ({onChange, text, inputId}) => {
    return (
        <div>
            <label htmlFor={inputId}>{text} </label>
            <input type="text"onChange={onChange}></input>

        </div>
    )

}

export default SearchBar