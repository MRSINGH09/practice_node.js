You are tasked with building a dashboard for a Travel Booking Platform. To display data efficiently, you need to fetch the following information about destinations from different APIs. All the data must be fetched simultaneously.

Data APIs:
API 1: Fetches a list of destinations.
API 2: Fetches the weather forecast for each destination.
API 3: Fetches the average hotel prices for each destination.

Your Task:
Write a function that fetches data from all three APIs simultaneously using Promise.all.
Combine the data from all APIs into a single array of destination objects.
Handle any errors that occur in any of the API calls and ensure it does not crash the entire application.


Data:
Destinations API (fetchDestinations):
Returns a list of destination names after 1 second:
["Paris", "New York", "Tokyo", "Sydney"]


Weather API (fetchWeather):
Returns a weather object for each destination after 1.5 seconds:
{
    "Paris": "Sunny",
    "New York": "Cloudy",
    "Tokyo": "Rainy",
    "Sydney": "Windy"
}


Hotel Prices API (fetchHotelPrices):
Returns an average hotel price object for each destination after 2 seconds:
{
    "Paris": 200,
    "New York": 300,
    "Tokyo": 250,
    "Sydney": 220
}


Task:
Fetch all the data using the APIs provided and combine it into this format:

[
    { destination: "Paris", weather: "Sunny", hotelPrice: 200 },
    { destination: "New York", weather: "Cloudy", hotelPrice: 300 },
    { destination: "Tokyo", weather: "Rainy", hotelPrice: 250 },
    { destination: "Sydney", weather: "Windy", hotelPrice: 220 }
]


Ensure all three APIs are called simultaneously.

Log a message if one of the APIs fails but still process the data from the successful ones.