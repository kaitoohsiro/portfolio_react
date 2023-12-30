import { Footer, Header } from '../components/default';



const WorkPage = () => {
    return (
        <>
            <Header scrolled={true} />
            <div style={WorkPageStyle}>
                <h2>Works</h2>
            </div>
            {/* <BlockItem />
            <BlockItem /> */}
            <Footer />
        </>
    )
}

const WorkPageStyle: { [key: string]: string } = {
    textAlign: "center",
    paddingTop: "150px",
}

export default WorkPage;