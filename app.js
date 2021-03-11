export default function Table() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setUsers(res.data);
            setLoading(false);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <Users />
                </tbody>
            </table>
            <section className="pagination">
                <button className="first-page-btn">first</button>
                <button className="previous-page-btn">previous</button>
                <button className="next-page-btn">next</button>
                <button className="last-page-btn">last</button>
            </section>
        </div>
    );
};
