
const titles = ['Home', 'About', 'Services','Project', 'Contact'];
// Experience, Education, Skills

const NavBar = () => {
    return (
        <nav className='p-4 flex justify-between'>
            <h1 className='text-white text-2xl font-bold'>Mieraf</h1>

            <ul className='flex space-x-6'>
                {
                    titles.map((title, index) => {
                        return <li key={index} className='text-white'>{title}</li>
                    }, [])
                }
            </ul>

            {/*resume*/}
            <div>
                <button className='text-white px-4 py-2 border rounded'>Resume</button>
            </div>
        </nav>
    )
}

export default NavBar;