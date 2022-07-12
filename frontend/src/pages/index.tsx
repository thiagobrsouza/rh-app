import type { NextPage } from 'next';
import { useState } from 'react';
import { ButtonDialog } from '../components/common/ButtonDialog';
import { Dialog } from '../components/common/Dialog';
import { Card } from '../components/layout/Card';
import { Layout } from '../components/layout/Layout';

const Home: NextPage = () => {

  const [display, setDisplay] = useState(false);

  return (
    <Layout>
      <Card title='Home Page'>
        <ButtonDialog label='Abrir Modal' target="myModal" />
        <Dialog title="Modal Home" id="myModal">
          <p>Alguma coisa aqui...</p>
        </Dialog>
      </Card>
    </Layout>
  )
}

export default Home
