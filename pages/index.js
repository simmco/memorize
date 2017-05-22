import initStore from "../utils/store";
import withRedux from "next-redux-wrapper";

import Home from "./home";

export default withRedux(initStore)(Home);
