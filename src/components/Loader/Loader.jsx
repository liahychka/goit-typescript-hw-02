import { Bars } from "react-loader-spinner";

function Loader() {
    return (
        <Bars
  height="60"
  width="60"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />)
}

export default Loader;