import { Page, Layout, TextStyle, EmptyState } from '@shopify/polaris';

const Index = () => (
    <Page>
      <Layout>
        <EmptyState
          heading="Administre los pagos de los clientes"
          action={{content: 'Añadir Pago'}}
          secondaryAction={{content: 'Aprender mas', url: 'https://help.shopify.com'}}
          image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg">
          <p>Cree y realice le pago de los carritos.</p>
        </EmptyState>
      </Layout>
    </Page>
    
  );
  
  export default Index;