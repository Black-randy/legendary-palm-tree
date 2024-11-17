function Navbar() {

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Link</a>
                        </li>
                        <li>
                            <details>
                                <summary>Theme </summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    {[
                                        "light",
                                        "dark",
                                        "cupcake",
                                        "bumblebee",
                                        "emerald",
                                        "corporate",
                                        "synthwave",
                                        "retro",
                                        "cyberpunk",
                                        "valentine",
                                        "halloween",
                                        "garden",
                                        "forest",
                                        "aqua",
                                        "lofi",
                                        "pastel",
                                        "fantasy",
                                        "wireframe",
                                        "black",
                                        "luxury",
                                        "dracula",
                                        "cmyk",
                                        "autumn",
                                        "business",
                                        "acid",
                                        "lemonade",
                                        "night",
                                        "coffee",
                                        "winter",
                                        "dim",
                                        "nord",
                                        "sunset",
                                    ].map((theme) => (
                                        <li key={theme}>
                                            <input
                                                type="radio"
                                                name="theme-dropdown"
                                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
                                                value={theme}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;