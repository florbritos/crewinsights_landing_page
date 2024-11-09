import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
    {
        id: 1,
        title: 'Transformó la manera en que gestionamos los reportes post-vuelo',
        rating: 5,
        content: `
        <p>CrewInsights ha cambiado por completo la forma en que gestionamos los reportes post-vuelo. Antes, el proceso era desorganizado y propenso a errores, lo que generaba confusión y retrasos. Ahora, con su interfaz intuitiva y la capacidad de analizar los datos en tiempo real, hemos logrado optimizar nuestras operaciones de forma significativa. La plataforma también facilita la colaboración entre los miembros de la tripulación, lo que mejora la comunicación y la toma de decisiones. ¡Sin duda una herramienta indispensable para cualquier aerolínea!</p>
        `,
        author: 'Ben Russel',
        avatarSrc:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        title: 'Transforma la forma de trabajar',
        rating: 4,
        content: `
        <p>CrewInsights ha revolucionado nuestra forma de gestionar incidentes. Su capacidad para automatizar procesos y analizar datos ha mejorado la seguridad y la puntualidad en los vuelos. Una excelente inversión.</p>
        `,
        author: 'Martin Gaspari',
        avatarSrc:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    },
    {
        id: 3,
        title: 'La mejor herramienta para optimizar el rendimiento de la tripulación',
        rating: 5,
        content: `
        <p>Como parte de la tripulación, siempre busco herramientas que me ayuden a gestionar mejor mi tiempo y responsabilidades. CrewInsights ha sido una revelación. La plataforma ofrece todo lo que necesito: desde la recopilación automatizada de datos hasta la posibilidad de consultar incidentes pasados de manera sencilla. Esto ha reducido significativamente el tiempo que dedicábamos a gestionar reportes manualmente y ha mejorado nuestra capacidad para responder a incidentes de manera más rápida y efectiva. Altamente recomendada para todas las aerolíneas que buscan mejorar su operación.</p>
        `,
        author: 'James Fraser',
        avatarSrc:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const LandingPage = () => {

return (
    <div>
        
        {/* Welcoming Section */}
        
        <div className="backgroundBlue pt-28 lg:overflow-hidden lg:pb-14" id="presentacion">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                        <div className="lg:py-24">
                            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                <span className="block font1">Transformá la Gestión de Incidentes y Seguridad Operativa </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">CrewInsights optimiza la gestión de incidentes post-vuelo y mejora la seguridad operativa, brindando análisis en tiempo real y apoyo a la toma de decisiones para la tripulación y administración de aerolíneas.</p>
                        </div>
                    </div>
                    <div className="mt-12 lg:relative lg:m-0 pb-12">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0">
                            <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto " src="imagenes/airplane.svg" alt="airplane front view"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* About us */}
        <main>
            <div className="relative bg-white py-16 sm:py-24" id="sobre-nosotros">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                    <div className="relative sm:py-16 lg:py-0">
                        <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-200 lg:right-72"></div>
                        </div>
                        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl backgroundSlogan">
                                <div className="absolute inset-0 backgroundOrange mix-blend-multiply"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-600 opacity-90"></div>
                                <div className="relative px-8">
                                    <q className="mt-8">
                                        <span className="relative text-lg font-medium text-white md:flex-grow">
                                            <svg className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-800" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <span className="relative">Nuestra misión es empoderar a las aerolíneas y su tripulación. No solo facilitamos la gestión de incidentes y la seguridad operativa, sino que aseguramos que cada vuelo se realice de la mejor manera posible. Estoy convencida de que CrewInsights es una herramienta imprescindible para mejorar la eficiencia y la seguridad en cada vuelo.</span>
                                        </span>
                                        <cite className="mt-4 block">
                                            <span className="text-base font-semibold text-orange-200">Florencia Britos, CEO at CrewInsights</span>
                                        </cite>
                                    </q>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                            <h2 className="text-3xl font-bold tracking-tight color1 sm:text-4xl font1">Sobre CrewInsights</h2>
                            <div className="mt-6 space-y-6 text-gray-500">
                                <p className="text-base leading-7 font2">Esta aplicación fue creada por tripulantes de cabina y pilotos comerciales, pensando en cómo mejorar nuestra vida diaria en el aire. Ser parte de una tripulación es mucho más que un trabajo, es un estilo de vida único lleno de desafíos, desde la gestión de incidentes inesperados hasta la toma de decisiones bajo presión. En el vuelo, la seguridad es clave, pero también lo es tener acceso rápido a la información y datos necesarios para tomar decisiones informadas.</p>
                                <p className="text-base leading-7">CrewInsights nace para simplificar la gestión de incidentes post-vuelo y mejorar la seguridad operativa de las aerolíneas. La aplicación centraliza los reportes generados por la tripulación y proporciona análisis en tiempo real para tomar acciones preventivas. De esta manera, CrewInsights se convierte en una herramienta esencial para optimizar la eficiencia de la tripulación y la administración de la aerolínea, garantizando una mejor experiencia tanto para los tripulantes como para los pasajeros.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            {/* Jet Lag */}

            <div className="bg-gray-900" id="transformacion-operativa">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12">
                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none mx-auto">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font1">Transformando la Gestión de Incidentes y Mejorando la Puntualidad</h2>
                            <p className="text-xl text-gray-300">CrewInsights ofrece una solución innovadora que optimiza la gestión de incidentes post-vuelo, agilizando el proceso de toma de decisiones y mejorando la eficiencia operativa en tiempo real.</p>
                        </div>
                        <div role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-8">
                            <div className="rounded-lg bg-gray-100 py-10 px-6 text-center xl:px-10 xl:text-left">
                                <div className="space-y-6 xl:space-y-10">
                                    <img className="mx-auto h-40 w-40 rounded-md xl:h-56 xl:w-56" src="imagenes/clock.svg" alt="woman standing next to a clock"/>
                                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                        <div className="space-y-1 text-lg  leading-6">
                                            <h3 className="color1 font-bold font1">El Desafío del Tiempo Perdido</h3>
                                            <p className="text-black">Antes de la implementación de CrewInsights, la industria aeronáutica se enfrentaba a un proceso de gestión de datos post-vuelo que era lento y propenso a errores humanos. Los tripulantes y equipos de operaciones se veían atrapados en un mar de reportes manuales y hojas de cálculo, lo que no solo consumía un valioso tiempo, sino que también dificultaba la identificación de patrones clave para mejorar la seguridad y eficiencia. Este enfoque tradicional a menudo llevaba a retrasos en la resolución de incidentes y en la toma de decisiones, generando una sensación de "espera" innecesaria y sin resultados inmediatos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg bg-gray-100 py-10 px-6 text-center xl:px-10 xl:text-left">
                                <div className="space-y-6 xl:space-y-10">
                                    <img className="mx-auto h-40 w-40 rounded-md xl:h-56 xl:w-56" src="imagenes/coffee.svg" alt="woman waiting at departure zone"/>
                                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                        <div className="space-y-1 text-lg  leading-6">
                                            <h3 className="color1 font-bold font1">Demoras Inexplicables</h3>
                                            <p className="text-black">Antes de CrewInsights, muchas demoras en los vuelos no tenían una explicación clara o inmediata. La falta de una herramienta centralizada y eficiente para la gestión de incidentes post-vuelo impedía que los problemas se identificaran rápidamente. A menudo, los equipos no podían acceder a información crucial de manera oportuna, lo que retrasaba la resolución de problemas y prolongaba las demoras, afectando tanto a la tripulación como a los pasajeros.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features list */}
        
            <div className="bg-white" id="nuestras-soluciones">
                <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
                    <div>
                        <p className="text-lg font-semibold color1">Todo lo que necesitás</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 font1">En UNA sola plataforma</h2>
                        <p className="mt-4 text-lg text-gray-500">CrewInsights tiene una interfaz simple y fácil de usar, diseñada específicamente para aerolíneas, permitiendo una operación rápida e intuitiva. Esta será una de tus aplicaciones indispensables, sin importar en qué parte del mundo te encuentres.</p>
                    </div>
                    <div className="mt-12 lg:col-span-2 lg:mt-0">
                        <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
                            <div className="relative">
                                <dt>
                                    <svg className="absolute h-6 w-6 color1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">Gestión de Reportes Post-Vuelo</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">CrewInsights permite a la tripulación generar reportes detallados tras cada vuelo, capturando incidentes, problemas operativos, y cualquier otra situación relevante, asegurando una documentación clara y eficiente.</dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <svg className="absolute h-6 w-6 color1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">Análisis de Datos en Tiempo Real</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">La plataforma ofrece análisis instantáneos de los reportes post-vuelo, permitiendo detectar patrones, identificar problemas recurrentes y obtener métricas clave para mejorar la seguridad y eficiencia operativa.</dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <svg className="absolute h-6 w-6 color1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">CrewBot</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">Un asistente inteligente que busca respuestas en los reportes previos generados por la tripulación, facilitando la resolución de problemas en tiempo real y proporcionando información relevante para tomar decisiones rápidas y eficaces.</dd>
                            </div>
                            {/* <div className="relative">
                                <dt>
                                    <svg className="absolute h-6 w-6 color1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">Alarms</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">You can manage your alarms to never miss that important event or be late for check in again.</dd>
                            </div> */}
                            <div className="relative">
                                <dt>
                                    <svg className="absolute h-6 w-6 color1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">Dashboard Centralizado</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">Un tablero de control accesible en tiempo real que proporciona visualizaciones claras sobre incidentes, tendencias, y otros datos críticos, ayudando a los equipos de operaciones a tomar decisiones informadas de manera rápida.</dd>
                            </div>
                            {/* <div className="relative">
                                <dt>
                                    <svg className="absolute h-6 w-6 color1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">Local Currency</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">Easy find out what's the currency exchange rate at your next destination.</dd>
                            </div> */}
                            <div className="relative">
                                <dt>
                                    <svg className="absolute h-6 w-6 color1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">Acceso Móvil</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">CrewInsights es accesible desde cualquier dispositivo móvil, permitiendo a los miembros de la tripulación acceder a información clave y generar reportes desde cualquier lugar, incluso durante sus tiempos libres o entre vuelos.</dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <svg className="absolute h-6 w-6 color1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">Integración con Otros Sistemas</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">Se puede integrar con sistemas internos de las aerolíneas para garantizar un flujo de información continuo y optimizar la gestión operativa, desde la asignación de tripulación hasta la coordinación con operaciones en tierra.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </main>

        {/* Mision, vision, purpose*/}

        <div className="bg-white" id="nuestro-proposito">
            <div className="relative bg-gray-800 pb-32">
                <div className="absolute inset-0 purposeBackground">
                    <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true"></div>
                </div>
                <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl font1">¿Qué estamos buscando?</h2>
                    <p className="mt-6 max-w-3xl text-xl text-white mx-auto">Una de las formas más importantes de expresar nuestra marca es a través de nuestra identidad. Esta resume lo que representamos al reflejar nuestros valores y brindar una idea de la calidad y el servicio que se puede esperar de CrewInsights, tanto en tierra como en el aire.</p>
                </div>
            </div>
            <div className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
                <ul className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    <li className="flex flex-col rounded-2xl bg-white shadow-xl">
                        <div className="relative px-6 pt-16 pb-8 md:px-8 flex flex-col justify-center items-center">
                            <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl backgroundOrange p-5 shadow-lg">
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">Nuestra Misión</h3>
                            <p className="mt-4 text-base text-gray-500">Transformar los procesos operativos para lograr un entorno de trabajo más seguro y eficiente para la tripulación y un mejor servicio para los pasajeros.</p>
                        </div>
                    </li>
                    <li className="flex flex-col rounded-2xl bg-white shadow-xl">
                        <div className="relative px-6 pt-16 pb-8 md:px-8 flex flex-col justify-center items-center">
                            <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl backgroundOrange p-5 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">Nuestra Visión</h3>
                            <p className="mt-4 text-base text-gray-500">Convertirnos en la solución líder en la industria aeronáutica para la gestión y análisis de reportes post-vuelo, permitiendo a las aerolíneas de todo el mundo alcanzar los más altos estándares de seguridad, eficiencia y satisfacción del cliente.</p>
                        </div>
                    </li>
                    <li className="flex flex-col rounded-2xl bg-white shadow-xl">
                        <div className="relative px-6 pt-16 pb-8 md:px-8 flex flex-col justify-center items-center">
                            <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl backgroundOrange p-5 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">Nuestro Propósito</h3>
                            <p className="mt-4 text-base text-gray-500">A través de la automatización, el análisis en tiempo real y el acceso a información histórica, buscamos mejorar la seguridad operativa, reducir los tiempos de respuesta ante incidentes y contribuir al bienestar de los pasajeros y la tripulación.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* Opiniones */}

        <div className="backgroundOrange" id="opiniones">
            <div className="pt-12 sm:pt-16 lg:pt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font1">Lo que dicen nuestros usuarios</h2>
                        <p className="mt-4 text-xl text-white">Descubre cómo CrewInsights ha transformado la gestión de reportes y la eficiencia operativa de diversas aerolíneas. Nuestros usuarios comparten su experiencia con nuestra plataforma, destacando mejoras en seguridad, puntualidad y productividad.</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-white sm:mt-12">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2 backgroundOrange"></div>
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto rounded-lg shadow-lg lg:flex ">
                            <div className='flex-1 flex-col bg-gray-50 flex items-center justify-center content-center'>
                                <div>
                                    <div className="max-w-[800px]  my-3 flex flex-col items-center justify-center px-5 py-10 text-start">
                                        <div className="space-y-10">
                                        {reviews.map((review) => (
                                            <div key={review.id} className="flex flex-col sm:flex-row">
                                            <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                                                <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>
                                                <p className="sr-only">{review.rating} out of 5 stars</p>

                                                <div
                                                dangerouslySetInnerHTML={{ __html: review.content }}
                                                className="mt-3 space-y-6 text-sm text-gray-600"
                                                />
                                            </div>

                                            <div className="order-1 flex items-center sm:flex-col sm:items-start">
                                                <img alt={`${review.author}.`} src={review.avatarSrc} className="h-12 w-12 rounded-full" />

                                                <div className="ml-4 sm:ml-0 sm:mt-4">
                                                <p className="text-sm font-medium text-gray-900">{review.author}</p>
                                                <div className="mt-2 flex items-center">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                    <StarIcon
                                                        key={rating}
                                                        aria-hidden="true"
                                                        className={classNames(
                                                        review.rating > rating ? 'color1' : 'text-gray-400',
                                                        'h-5 w-5 shrink-0',
                                                        )}
                                                    />
                                                    ))}
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact */}

        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contacto">
            <svg
                aria-hidden="true"
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            >
                <defs>
                <pattern
                    x="50%"
                    y={-64}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
                </defs>
                <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
                <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                    strokeWidth={0}
                />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            <div className="mx-auto max-w-xl lg:max-w-4xl">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Contactanos
                </h2>
                <p className="mt-2 text-lg/8 text-gray-600">
                Si tienes alguna pregunta, comentario o necesitas asistencia, no dudes en ponerte en contacto con nosotros. Nuestro equipo estará encantado de ayudarte y responder a todas tus consultas. ¡Esperamos saber de vos pronto!
                </p>
                <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                    <form action="#" method="POST" className="lg:flex-auto">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                                    Nombre
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="focus:ring-slate-500 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                                    Apellido
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="focus:ring-slate-500 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm/6 font-semibold text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="budget"
                                        name="budget"
                                        type="text"
                                        className="focus:ring-slate-500 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-sm/6 font-semibold text-gray-900">
                                    Número de Contacto
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="website"
                                        name="website"
                                        type="url"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6 focus:ring-slate-500"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                                    Mensaje
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6 focus:ring-slate-500"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="button"
                                className="block w-full rounded-md btnDashboard backgroundBlue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default LandingPage