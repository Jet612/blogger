import BlogList from './BlogList';
import useFetchBlogs from './useFetchBlogs';
//import { useUserContext } from './UserContext';

const Home = () => {
	const { blogs, isPending, error } = useFetchBlogs();
  //const { user } = useUserContext();

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} />}
		</div>
	);
}

export default Home;