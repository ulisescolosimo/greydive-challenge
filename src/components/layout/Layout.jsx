import Footer from '../Footer'
import Header from '../Header'
import '../../index.css'

function PageLayout(props) {
    return (
        <div id="main" className="flex flex-col min-h-screen">
            <Header/>
            <div id="body" className="flex flex-col items-center bg-gray-800">
                { props.children }
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout