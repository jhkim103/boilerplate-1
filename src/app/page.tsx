import { Text, Title } from '@bp1/client/components';
export default function Home() {
  let name = 'park';

  return (
    <>
      <div>
        <Title>MSP CS ADMIN</Title>
        <Text>powered by raidea.</Text>

        <p>{name}</p>
      </div>
    </>
  );
}
