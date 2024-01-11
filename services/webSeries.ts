"server-only";

export async function getWebseries() {
  const res = await fetch('https://ott-details.p.rapidapi.com/advancedsearch?'+new URLSearchParams({
    start_year: '1970',
    end_year: '2022',
    language: 'hindi',
    type: 'show',
    sort: 'latest',
  }),
   {
    cache:'no-store',
    headers: {
      "X-RapidAPI-Key":`${process.env.ott_api_key}`,
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
    
  });
  return res.json();
}
