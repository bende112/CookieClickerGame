export default function Cookies({cookies, cookiesPerSec}) {
  return(
    <div className="cookies-display">
      <img src="" height={300} />
    <p>Cookies: {cookies}</p>
    <p>Cookies per seconds: {cookiesPerSec}</p>
    </div>
  );
}
