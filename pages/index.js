import Layout from "../components/Layout";
import Prices from "../components/Prices"
import Fetch from "isomorphic-unfetch";


const Main = (props) => (
  <Layout>
    <h1>Welcome to bitcoin checker</h1>
    <p>Check current price of bitcoin</p>
    <Prices bpi={props.bpi}/>
  </Layout>
);

Main.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}
export default Main;
