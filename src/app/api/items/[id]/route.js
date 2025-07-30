export async function GET(req , params) {
  const p = await params
  return Response.json({ params: p });
}
