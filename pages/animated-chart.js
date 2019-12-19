import Nav from '../components/nav'

const Animated = () => {
    return (
        <>
            <Nav />
            <div>
                <h2>Animated Chart</h2>
                <p>Use the controller to pan thru the data</p>
                <div className="responsive-container">
                    <iframe className="responsive-iframe" src="https://larvalabs.com/public/productsites/githubdataviz/index.html#/"></iframe>
                </div>
            </div>

            <style jsx>{`
                .responsive-container {
                    position: relative;
                    overflow: hidden;
                    padding-top: 40%;
                }
                .responsive-iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 0;
                }
            `}</style>
        </>
    )
}

export default Animated;