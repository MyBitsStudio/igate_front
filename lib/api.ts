export async function requestAPI(
  headers: HeadersInit,
  method: string,
  body: BodyInit,
  url: string,
  log: boolean = true
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await fetch(url, {
    headers: headers,
    method: method,
    body: body,
  })
    .then((res) => res.json())
    .then((data) => {
      // enter you logic when the fetch is successful
      if (log) console.log(data)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return data
    })
    .catch((error) => {
      // enter your logic for when there is an error (ex. error toast)
      console.log(error)
    })
}
