export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(
    `${process.env.STRAPI_BASEURL}/api/boarding-confirmation/add-person`,
    {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );

  const data = await res.json();

  return Response.json(data, { status: res.status });
}
