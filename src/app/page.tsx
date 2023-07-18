import 'antd/dist/reset.css';
import Button from './components/Button';
import Title from './components/Title';
import './globals.css';

export default function Home() {
  return (
    <div>
      <Title>MSP CS ADMIN</Title>
      <Title level={3} style={{ color: 'red' }}>
        MSP CS ADMIN
      </Title>
      <Button>MSP CS ADMIN</Button>
      <Button rdsType="error">MSP CS ADMIN : ERROR</Button>
      <p>powered by raidea.</p>
    </div>
  );
}
