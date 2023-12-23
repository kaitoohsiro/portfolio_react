import {Header, Footer } from '../components/default';
import {BlockItem} from '../components/parts/';


const BlogPage = () => {
    return (
        <>
            <Header />
            <div style={BlogPageStyle}>
                <h2>Blog</h2>
            </div>
            <BlockItem />
            <BlockItem />
            <Footer />
        </>
    )
}

const BlogPageStyle: { [key: string]: string } = {
    textAlign: "center",
    paddingTop: "150px",
}

export default BlogPage;