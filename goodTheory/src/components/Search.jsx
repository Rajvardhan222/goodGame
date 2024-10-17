import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types';
function Search({list,isSearching,setIsSearching}) {
    let [searchValue, setSearchValue] = React.useState('');
    let [searchList, setSearchList] = React.useState([]);

    React.useEffect(() => {
        let filteredList = list.filter((item) =>{
            console.log(item)
            let name = item.name.toLowerCase();
            return name.includes(searchValue.toLowerCase());
        });
        setSearchList(filteredList);
        console.log(searchList);

        searchValue.length > 0 ? setIsSearching(true) : setIsSearching(false);
    },[searchValue])
return (
    <div>
        <input 
            type="text" 
            placeholder="Search" 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='border-2 border-gray-300 p-2 rounded-lg w-1/4 mx-auto mt-5'
        />
        {searchValue.length>0&& searchList.length > 0 ? (
            searchList.map((item, index) => (
                <div key={`${item.name}-${index}`} className='py-6'>
                  
                    <Card pokemonDetails={item} />
                </div>
            ))
        ) : (
          null
        )}
    </div>
)
}

Search.propTypes = {
    list: PropTypes.array.isRequired,
    setIsSearching: PropTypes.func.isRequired,
    isSearching: PropTypes.bool.isRequired
};

export default Search