import {useState} from 'react';

const SearchBar = (props) => {
    let [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <form className="search-bar" onSubmit={(e) => { e.preventDefault(); props.handleSubmit(searchValue) }}>
                <input className="search" type="text" value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}} />
                <input className="submit" type="submit" value="Add City" />
            </form>
            <style jsx>{`
            .search-bar {
                display: flex;
                margin-bottom: 32px;
            }
            input {
                height: 48px;
                box-sizing: border-box;
            }
            .search {
                font-size: 16px;
                border-color: #B2B2B2;
                border-style: solid;
                border-width: 1px;
                width: 85%;
            }

            .submit {
                background-color: #4D9B96;
                color: white;
                border-style: none;
                width: 15%;
            }
            `}
            </style>
        </div>
    );
};

export default SearchBar;