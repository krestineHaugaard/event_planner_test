export default async function EventPage({ params }) {
  const uuid = params.uuid;
  let headerList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };

  let response = await fetch(
    "https://yuisogjwvntfoxudooln.supabase.co/rest/v1/events?id=eq." + uuid,
    { headers: headerList }
  );
  let data = await response.json();
  const eventInfo = data[0];
  return (
    <article>
      <h1>{eventInfo.name}</h1>
      <dl>
        <dt>Hvornår</dt>
        <dd>{eventInfo.when}</dd>
      </dl>
      <p>{eventInfo.description}</p>
    </article>
  );
}
