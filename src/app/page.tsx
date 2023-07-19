import Button from './components/Button';
import Title from './components/Title';

export default function Home() {
  return (
    <div>
      <Title level={1}>MSP CS ADMIN</Title>
      <Title level={2}>MSP CS ADMIN</Title>
      <Title level={3}>MSP CS ADMIN</Title>
      <Title level={4}>MSP CS ADMIN</Title>
      <Title level={5}>MSP CS ADMIN</Title>
      <Button>test1</Button>
      <Button rdsType="warning">test2</Button>

      <p>powered by raidea.</p>
    </div>
  );
}
