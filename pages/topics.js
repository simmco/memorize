import Page from "../components/page";
import PageWidth from "../components/pageWidth";

export default props => (
  <Page>
    {console.log(props.url.query.domains)}
    <PageWidth>
      {props.url.query.domains} CATEGORYS HERE
    </PageWidth>
  </Page>
);
