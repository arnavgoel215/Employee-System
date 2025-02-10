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
                <p>Use this portal to help see a list of your employees, manage shift schedules and monitor employee pay</p>
            </article>
        </>
     );
}
 
export default Home;