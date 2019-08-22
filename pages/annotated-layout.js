import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    TextField,
  } from '@shopify/polaris';
  
  class AnnotatedLayout extends React.Component {
    state = {
      discount: '10%',
    };
  
    render() {
      const { discount } = this.state;
  
      return (
        <Page>
          <Layout>
            <Layout.AnnotatedSection
              title="Descuento por defecto"
              description="Establezca el % de descuento que tendrán los productos."
            >
              <Card sectioned>
                <Form onSubmit={this.handleSubmit}>
                  <FormLayout>
                    <TextField
                      value={discount}
                      onChange={this.handleChange('discount')}
                      label="Porcentaje de descuento (%)"
                      type="discount"
                    />
                    <Stack distribution="trailing">
                      <Button primary submit>
                        Guardar cambios
                      </Button>
                    </Stack>
                  </FormLayout>
                </Form>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
      );
    }
  
    handleSubmit = () => {
      this.setState({
        discount: this.state.discount,
      });
      console.log('submission', this.state);
    };
  
    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
    };
  }
  
  export default AnnotatedLayout;