import SearchBar from '../SearchBar.jsx'

export default function Nav(props){
    const { onSearch } = props
    return(

        <SearchBar onSearch={ onSearch }/>
    )

}