import React, { useState } from 'react'

const Weather = () => {

    const [city, setCity] = useState("")
    const [error, setError] = useState("")
    const [weather, setWeather] = useState(null)

    const api_key = "4951a777be97a210386f067232220644"
    let city_name = "jaipur"

    const handleWeather = async () => {
        try {
            setError("")
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
            )
            if (!response.ok) throw new Error("City Not Found...👎")
            const record = await response.json()
            console.log(record)
            setWeather(record)  // yaha update karo
            setError("")        // agar error pehle se ho to hata do
            setCity("")
        } catch (error) {
            setError(error.message)
            setWeather(null)    // agar error aaya to purana data clear ho jaye
            setCity("")
        }
    }


    return (
        <div className='min-h-screen bg-weather_bg bg-cover bg-no-repeat flex flex-col items-center justify-center'>
            <div className='w-full max-w-md bg-black bg-opacity-70 rounded-xl shadow-2xl p-8 text-white'>
                <h1 className='text-4xl  font-bold mb-7 text-center'>Weather App 🌎</h1>
                <div className='flex flex-col gap-6'>
                    <input type="text" name="" id="" placeholder='Enter City Name:' className='p-1.5 rounded-xl text-black focus:outline-none shadow-inner' value={city} onChange={(e) => { setCity(e.target.value) }} />
                    <button onClick={handleWeather} className='text-black bg-green-200 font-bold py-2 rounded-xl hover:bg-indigo-500 hover:text-white '>Search Weather 🔍</button>
                </div>

                {
                    error && <p className='text-center text-red-600 font-semibold  mt-4'>{error}</p>
                }

                {
                    weather && <div className='text-center mt-7'>
                        <img src="https://cdn-icons-png.flaticon.com/512/4188/4188714.png" alt="" className='w-24 mx-auto animate-bounce drop-shadow-lg' />
                        <h2 className='text-3xl font-bold'>{weather.name} / {weather.sys.country}</h2>
                        <p className='text-xl'>{weather.weather[0].description}</p>
                        <p className='text-5xl font-bold m-2'>{weather.main.temp} ℃</p>
                        <div className='grid grid-cols-3 text-center gap-3 mt-7'>
                            <div className='bg-white text-black opacity-50 rounded-xl p-2'>
                                <p className='font-bold'>Humidity</p>
                                <p>{weather.main.humidity}%</p>
                            </div>
                            <div className='bg-white text-black opacity-50 rounded-xl p-2'>
                                <p className='font-bold'>Wind</p>
                                <p>{weather.wind.speed} m/s</p>
                            </div>
                            <div className='bg-white text-black opacity-50 rounded-xl p-2'>
                                <p className='font-bold'>Clouds</p>
                                <p>{weather.clouds.all}%</p>
                            </div>
                        </div>
                    </div>
                }


            </div>
        </div>
    )
}

export default Weather 