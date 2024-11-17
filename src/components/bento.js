function BentoGrid1() {
    return (
        <>
            <section>
                <div class="px-8 py-32 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div class="grid grid-cols-1 gap-2 lg:items-center lg:grid-cols-2 mt-12">
                        <div
                            class="bg-base-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center lg:p-12 overflow-hidden"
                        >
                            <div class="relative items-center text-balance">
                                <p class="text-xs leading-normal font-bold uppercase text-accent-600">
                                    Tagline
                                </p>
                                <h3
                                    class="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl mt-4 text-base-900 font-semibold"
                                >
                                    Transforming the banking experience for a digital future
                                </h3>
                                <p class="text-base leading-normal mt-2 text-base-600 font-medium">
                                    The fastest method for working together on staging and temporary
                                    environments.
                                </p>
                                <div
                                    class="flex flex-wrap justify-center items-center gap-2 mx-auto mt-8"
                                >
                                    <button
                                        class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-500/50 h-9 px-4 py-2 text-sm font-medium rounded-md"
                                    >
                                        Get started
                                    </button>
                                    <button
                                        class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-200 focus:ring-accent-500 h-9 px-4 py-2 text-sm font-medium rounded-md"
                                    >
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-2 lg:grid-cols-2 h-full">
                            <div
                                class="bg-base-50 rounded-2xl flex flex-col h-full justify-between relative overflow-hidden"
                            >
                                <div class="p-8 relative">
                                    <p
                                        class="text-xs leading-normal font-bold uppercase text-accent-600"
                                    >
                                        Tagline
                                    </p>
                                    <h3
                                        class="text-base leading-normal sm:text-lg md:text-xl mt-4 text-base-900 font-medium"
                                    >
                                        Schedule
                                    </h3>
                                    <p class="text-sm leading-normal mt-2 text-base-500 font-medium">
                                        Schedule your integrations effortlessly and automate tasks for
                                        seamless workflows.
                                    </p>
                                </div>
                                <div class="lg:absolute -bottom-4 -right-8 ml-8 -mb-4">
                                    <img
                                        class="rounded-l-xl shadow h-full"
                                        src="/widgets/calendar.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div
                                class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full"
                            >
                                <div
                                    class="bg-base-50 text-center rounded-2xl items-center p-8 flex h-full justify-center relative overflow-hidden"
                                >
                                    <div>
                                        <img
                                            class="h-12 mx-auto"
                                            src="/images/oxbow/windLogo.png"
                                            alt="#_"
                                        />
                                        <h3
                                            class="text-base leading-normal sm:text-lg md:text-xl mt-4 text-base-900 font-medium"
                                        >
                                            Connect your app
                                        </h3>
                                        <p class="text-sm leading-normal mt-2 text-base-500 font-medium">
                                            Connection secure, fast and easy. You can disconnect at any
                                            time.
                                        </p>
                                        <div class="mt-8 justify-center flex">
                                            <button
                                                class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-200 focus:ring-accent-500 h-9 px-4 py-2 text-sm font-medium rounded-md"
                                            >
                                                See our integrations
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-base-50 p-8 rounded-2xl">
                                    <p
                                        class="text-xs leading-normal font-bold uppercase text-accent-600"
                                    >
                                        Tagline
                                    </p>
                                    <h3
                                        class="text-base leading-normal sm:text-lg md:text-xl mt-4 text-base-900 font-medium"
                                    >
                                        Easy Integration
                                    </h3>
                                    <p class="text-sm leading-normal mt-2 text-base-500 font-medium">
                                        Integrating with existing systems is smooth and hassle-free,
                                        thanks to our incredible flexible approach.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default BentoGrid1;