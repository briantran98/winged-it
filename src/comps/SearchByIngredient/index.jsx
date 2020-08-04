import React, { useState } from 'react';
import SearchBar from './SearchBar'
import recipeFinder from '../../helper/foodApi'
import SearchTag from '../SearchByIngredient/SearchTag'

const SearchByIngredient = ({setRecipes, searchTags, setSearchTags }) => {
  const [searchTerm, setSearchTerm] = useState('');

	const pressEnter = (searchTerm) => {
		setSearchTags(prev => [...prev, searchTerm])
		setSearchTerm("")
	}

	const onSubmit = (e) => {
		recipeFinder(searchTags)
		.then(data => {
      console.log('data', data);
      setRecipes(data)
		})
	}

	return(
		<div class="search-container">
			<SearchBar
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				searchTags={searchTags}
				setSearchTags={setSearchTags}
				onKeyUp={pressEnter}/>

        {/* returns an array of ingredients */}

				<button class="btn btn-primary waves-effect waves-light" onClick={onSubmit}>Recipe Search</button>
        {/* {searchTags && <SearchTag searchTags={searchTags} />} */}

		</div>

	);
}

export default SearchByIngredient;
