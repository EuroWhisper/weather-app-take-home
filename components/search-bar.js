import {useState} from 'react';

// Search bar is a component representing the
// city search form.
const SearchBar = (props) => {
    // searchValue holds the value of the search input element.
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
                font-size: 16px;
            }
            .search {
                border-color: #B2B2B2;
                border-style: solid;
                border-width: 1px;
                width: 85%;
            }

            .submit {
                background-color: #4D9B96;
                color: white;
                border-style: none;
                min-width: 128px;
            }

            @media(max-width: 480px) {
                .search-bar {
                    flex-direction: column;
                }

                .search, .submit {
                    width: 100%;
                }

                .search {
                    margin-bottom: 8px;
                }
            }
            `}
            </style>
        </div>
    );
};

export default SearchBar;