import DefaultPage from "components/patterns/DefaultPage";
import PageTitle from "components/PageTitle";
import {Box, Image, Text} from "theme/components";

export default function HomeScreen() {
  // @ts-ignore
  return (
    <>
      <PageTitle title="Alura Geek" />
      <DefaultPage>
        <
          // @ts-ignore
          Box

        >
          <
            // @ts-ignore
            Box
            styleSheet={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              marginTop: '16px',
              gridGap: '16px',
            }}
          >
            <
              // @ts-ignore
              Text
              variant="heading1"
              tag="h1"
              styleSheet={{ color: '#F9703E', justifyContent: 'center' }}
            >
              rubish
            </Text>
          </Box>
        </Box>
      </DefaultPage>
    </>
  );
}