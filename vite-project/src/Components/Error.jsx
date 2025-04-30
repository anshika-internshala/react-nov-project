import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops!! You have come on undefined Path</h1>
      <h1>{err.data}</h1>
      <h1>{err.status}</h1>
      <h1>{err.statusText}</h1>
    </>
  );
}

export default Error;
