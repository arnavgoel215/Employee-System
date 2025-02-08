const Home = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    let currentDate = `${month}/${day}/${year}`

    return ( 
        <>
            <h2>Welcome</h2>
            <article>
                <p>Today is {currentDate}</p>
            </article>
        </>
     );
}
 
export default Home;