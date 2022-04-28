import {Box, Text, Image} from "theme/components";
import PageTitle from "../../components/PageTitle";
import DefaultPage from "../../components/patterns/DefaultPage";

export default function AboutScreen() {
  return (
    <>
      <PageTitle title={"about"} />
      <DefaultPage>
        <
          // @ts-ignore
          Box
          styleSheet={{
            width: '400px',
            margin: '16px auto',
          }}
        >
          <
            // @ts-ignore
            Box
            styleSheet={{
              width: '900px',
              margin: '16px auto',
            }}
          >
            <a href={"https://iugmali.com"}>https://iugmali.com</a>
          </Box>
          <
            // @ts-ignore
            Image
            src={`https://github.com/iugmali.png`}
            styleSheet={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              margin: '0 auto',
              border: '2px solid #F9703E',
            }}
          />
        </Box>
      </DefaultPage>
    </>
  );
}