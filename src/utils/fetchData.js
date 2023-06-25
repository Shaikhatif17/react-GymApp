export const exerciseOptions= [
    {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': '59fd62b213msh90eef0a4f126a1ep1270bfjsn76a260b8fb47',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
]
export const fetchData =async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
};